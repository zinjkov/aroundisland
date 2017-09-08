/**
 * Created by zinjk on 03.08.2017.
 */

// const domain = 'http://127.0.0.1:8000/';
const domain = 'http://www.aroundisland.ru/';


function getPositionFrom(m) {
  return {lat: parseFloat(m.latitude_gps), lng: parseFloat(m.longitude_gps)};
}

function rad2deg(rad) {
  return (rad * 180 / Math.PI);
}
//convert degrees to radians
function dtor(fdegrees)
{
  return (fdegrees * Math.PI / 180);
}

//Convert radians to degrees
function rtod(fradsians)
{
  return (fradians * 180.0 / Math.PI);
}

function CalcDistance( lat1, lon1,  lat2,  lon2)
{
  let dlon, dlat, a, c;
  dlon = dtor(lon2 - lon1);
  dlat = dtor(lat2 - lat1);
  a = Math.pow(Math.sin(dlat / 2), 2) + Math.cos(dtor(lat1)) * Math.cos(dtor(lat2)) *
    Math.pow(Math.sin(dlon / 2), 2);
  c = 2 * Math.atan2(Math.sqrt(a),Math.sqrt(1 - a));
  return (6378140 * c + 0.5);
}

export default {
  allPositions: state => {
    if (state.positions.length !== 0) {
      return state.positions;
    }
  },

  'last_img': state => {
    if (state.positions.length !== 0) {
      return state.positions[state.positions.length - 1].image;
    } else {
      return '#';
    }
  },

  getDistPath: state=> {
    let res = 0;
    if(state.positions.length !== 0) {
      state.positions.reduce((pv, nv, idx, arr) => {
        res += CalcDistance(pv.latitude_gps, pv.longitude_gps,
          nv.latitude_gps, nv.longitude_gps)
        return nv;
      });
    }

    return res
  },

  'image_list': state => {
    if (state.positions.length !== 0) {
      return state.positions.map((item) => {
        return domain + item.image;
      }).filter((item) => {
        return !item.includes('#')
      }).reverse();
    } else {
      return []
    }
  },

  'team_list': state => {
    if (state.team_list.length !== 0) {
      let arr = [];
      arr.push(state.team_list[2]);
      arr.push(state.team_list[0]);
      arr.push(state.team_list[1]);
      arr.push(state.team_list[4]);
      arr.push(state.team_list[3]);
      arr.push(state.team_list[5]);
      arr.push(state.team_list[6]);
      return arr;
    } else {
      return []
    }
  },

  'last_position': state => {
    if (state.positions.length !== 0) {
      return state.positions[state.positions.length - 1];
    } else {
      return []
    }
  },

  'get_waypoint_list': state => {
    if (state.positions.length !== 0) {
      return state.positions.map((item) => {
        return {
          lat: parseFloat(item.latitude_gps), lng: parseFloat(item.longitude_gps)
        }
      });
    } else {
      return []
    }
  },

  path: state => {
    if (state.positions.length !== 0) {
      return state.positions.map(function (item, i, arr) {
        return getPositionFrom(item);
      });
    }
  },
  position_list: state => {
    if (state.positions.length !== 0) {
      return state.positions;
    }
  },

  battery_dataset: state => {
    if (state.positions.length !== 0) {
      return state.positions.map(item => item['vcc'])
    } else {
      return [0, 0];
    }
  },
  speed_dataset: state => {
    if (state.positions.length !== 0) {
      return state.positions.map(item => item['speed_gps'])
    } else {
      return [0, 0];
    }
  },
  time_dataset: state => {
    if (state.positions.length !== 0) {
      return state.positions.map(item => item['created_at'])
    } else {
      return [0, 0];
    }
  },
  satellites_dataset: state => {
    if (state.positions.length !== 0) {
      return state.positions.map(item => item['satellites_gps'])
    } else {
      return [0, 0];
    }
  },
  //,

  mapCenter: state => {
    if (state.positions.length !== 0) {
      return {lat: parseFloat(state.positions[state.positions.length - 1].latitude_gps),
              lng: parseFloat(state.positions[state.positions.length - 1].longitude_gps)}
    } else {
      return {lat: 43.001002,
              lng: 131.845682};
    }
  },

  gallery_list: state => {
    return state.gallery_list;
  },

  waypoints: state => {
    return state.waypoint_list;
  }
}
