/**
 * Created by zinjk on 03.08.2017.
 */
function positionComparator(x, y) {
  return x.id - y.id;
}


export default {

  update_count (state, newCount) {
    newCount = JSON.parse(newCount.data);
    state.pointCount = newCount;
  },
  add_position (state, newPosition) {
    newPosition = newPosition.data;
    console.log(newPosition)
    state.positions = [...state.positions, newPosition]
      .sort(positionComparator);
    state.clicked_markers = [...state.clicked_markers, false];
  },
  set_downloaded (state, downloaded) {
    state.downloaded = downloaded;
  },
  add_positions(state, newPosition) {
    newPosition = newPosition.data;
    state.positions = newPosition.sort(positionComparator);
  },
  add_team_list(state, newList) {
    state.team_list = newList.data;
  },
}
