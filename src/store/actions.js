/**
 * Created by zinjk on 03.08.2017.
 */

import Api from '../Api.js'

export default {

  fetch_all_position(context) {
    let i = 0;
    for (i = context.state.downloaded; i < context.state.pointCount; i++) {
      context.dispatch('fetch_position', i)
    }
    context.commit('set_downloaded', i);
  },
  fetch_position_count(context){
    Api.getCount().then((response => {
      context.commit('update_count', response.data);
      if (parseInt(response.data.data) !== parseInt(context.state.downloaded)) {
        context.dispatch('fetch_all_position');
      }
    }))
  },

  fetch_position(context, id) {
    Api().getPosition(id).then((response => {
      context.commit('add_position', response.data);
    }))
  },
  fetch_position_list(context) {
    Api.fetchBoardInfoList().then((response => {
      context.commit('add_positions', response.data);
    }))
  },

  fetch_team_list(context) {
    Api.fetchTeamList().then((response => {
      context.commit('add_team_list', response.data);
    }))
  },
}
