<template>
  <div class="tracker">
    <b-button-group>
      <b-button variant="success" @click="postRequest">
        Сохранить маршрут
      </b-button>
      <b-button variant="primary" @click="updateRequest">
        Обновить маршрут
      </b-button>
      <b-button variant="danger" @click="deleteRequest">
        Удалить маршрут
      </b-button>
    </b-button-group>
    <gmap-map
      class="map"
      :center=mapCenter
      :zoom="16"
      @click="mapClicked"
      :options="{gestureHandling: 'greedy'}"
    >
      <gmap-polyline v-if="true" :path="waypointList" :editable="true"
                     :draggable="true"
                     :options="{geodesic:true, strokeColor:'#FF0000'}"
                     @path_changed="updatePolylinePath($event)">
      </gmap-polyline>
    </gmap-map>
  </div>
</template>

<script>
  import {mapGetters} from "vuex";
  import Api from "../../Api";

  export default {
    name: 'waypointeditor',
    data() {
      return {
        infoOptions: {
          geodesic: true,
          pixelOffset: {
            width: 0,
            height: 0
          },
          clickable: true
        },
        waypointList: []
      }
    },
    computed: {
      ...mapGetters(
        [
          'waypoints',
          'mapCenter'
        ]
      )
    },
    watch: {
      waypoints() {
          this.waypointList = this.waypoints;
      }
    },
    methods: {
      updatePolylinePath(paths) {
        this.waypointList = paths.b.map(item => {
          return {lat: item.lat(), lng: item.lng()};
        })
      },
      mapClicked(mouseArgs) {
        this.waypointList.push({lat:  mouseArgs.latLng.lat(), lng: mouseArgs.latLng.lng()})
      },
      postRequest() {
        this.$store.commit('add_waypoint_list', {data: this.waypointList});
        Api.saveWaypoints(this.waypointList).then(response => {
          console.log(response.data);
        });
      },
      updateRequest() {
        Api.updateWaypoints();
      },
      deleteRequest() {
        Api.deleteWaypoints();
        this.$store.commit('clear_waypoint_list');
      },
    }
  }
</script>

<style scoped>
  .map {
    min-height: 75vh;
    max-width: 99.0vw;
  }

  .tracker {

  }
</style>
