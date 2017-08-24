/**
 * Created by zinjk on 03.08.2017.
 */

// const domain = 'http://127.0.0.1:8000/';
const domain = 'http://www.aroundisland.ru/';


function getPositionFrom(m) {
  return {lat: parseFloat(m.latitude_gps), lng: parseFloat(m.longitude_gps)};
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

  'image_list': state => {
    if (state.positions.length !== 0) {
      return state.positions.map((item) => {
        return domain + item.image;
      }).filter((item) => {
        return !item.includes('#')
      });
    } else {
      return []
    }
  },

  'team_list': state => {
    if (state.team_list.length !== 0) {
      return state.team_list
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

}
