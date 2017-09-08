/**
 * Created by zinjk on 18.08.2017.
 */
/**
 * Created by zinjk on 03.08.2017.
 */


import  Vue  from 'vue'


/*
 board/post
 board/get_list
 board/get_list_by_path
 board/waypoints_list
 board/commands
 board/count

 */
export default class Api {
  static ApiInit(socket) {

  }

  static fetchBoardInfoList() {
    return Vue.http.get('board/get_list');
  }

  static fetchBoardInfoByPath(id_path) {
    return Vue.http.get('board/get_list_by_path', {id_path_id: id_path});
  }

  static fetchBoardInfoCount() {
    return Vue.http.get('board/count');
  }

  static fetchTeamList() {
    return Vue.http.get('team/list');
  }

  static fetchGalleryList() {
    return Vue.http.get('gallery/list');
  }

  static fetchPhotoList(id) {
    return Vue.http.get('gallery/photo/list', {id: id});
  }

  static fetchLastBoardList() {
    return Vue.http.get('board/latest_path');
  }

  static fetchWaypointList() {
    return Vue.http.get('waypoints/get/without');
  }


  static saveWaypoints(waypoints) {
    let data = {path: waypoints};
    console.log(data);
    return Vue.http.post('waypoints/post/', data);
  }

  static updateWaypoints() {
    return Vue.http.post('waypoints/update/');
  }

  static deleteWaypoints() {
    return Vue.http.post('waypoints/delete/');
  }
  static fetchPathList() {
    return Vue.http.get('path/get/');
  }


};
