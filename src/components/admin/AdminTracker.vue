<template>
  <div class="tracker">
    <gmap-map
      class="map"
      :center=center
      :zoom="16"
      :options="{gestureHandling: 'greedy'}"
    >

      <gmap-info-window
        :clickable="true"
        style="max-height: 300px; max-width: 300px;"
        v-if="info_opened"
        :options="infoOptions"
        :position="info_pos"
        @closeclick="info_opened = false;"
      >
        <info-window
          style="max-width: 500px"
          :info="info_obj"
          @show="onShowClick(info_obj)"
        >

        </info-window>
      </gmap-info-window>

      <gmap-marker
        v-for="(m, i) in markers"
        :position="m"
        :clickable="true"
        :draggable="false"
        :icon="getIconMarker(i)"
        @click="onMarkerClick(i)"
      >
      </gmap-marker>

      <gmap-polyline
        :path="boardPath"
        :editable="false"
        :deepWatch="true"
        :options="{strokeColor: '#00FF00'}"
      >
        <gmap-circle
          :radius="3"
        ></gmap-circle>
      </gmap-polyline>

      <gmap-polyline
        :path="waypointPath"
        :editable="false"
        :deepWatch="true"
        :options="{strokeColor: '#0000FF'}"
      >
        <gmap-circle
          :radius="3"
        ></gmap-circle>
      </gmap-polyline>
    </gmap-map>
  </div>
</template>

<script>
  import {mapGetters} from "vuex";
  import InfoWindow from "../shared/InfoWindow.vue";
  import Api from "../../Api";

  function getPositionFrom(m) {
    return {lat: parseFloat(m.latitude_gps), lng: parseFloat(m.longitude_gps)};
  }

  export default {
    name: 'admintracker',
    components: {InfoWindow},
    data() {
      return {
        center: {lat: 43.127877, lng: 131.892663},
        info_opened: false,
        info_obj: null,
        infoOptions: {
          geodesic: true,
          pixelOffset: {
            width: 0,
            height: 0
          },
          clickable: true
        },
//        boardPath: [],
//        waypointPath: [],
        modal_show: false,
        boardList: [],
        waypointList: [],
        info_pos: {lat: 0, lng: 0}
      }
    },
    mounted() {
      Api.fetchWaypointList().then(response => {
        this.waypointList = response.data.data;
      });
      Api.fetchLastBoardList().then(response => {
        this.boardList = response.data.data;
      });
      Api.fetchPathList().then(response => {
        this.pathList = response.data.data;
      })
    },
    computed: {
      boardPath: function() {
        if (this.boardList.length !== 0) {
          this.center = getPositionFrom(this.boardList[this.boardList.length - 1]);
         return this.boardList.map((item) => {
            return {
              lat: parseFloat(item.latitude_gps), lng: parseFloat(item.longitude_gps)
            }
          });
        } else {
          return []
        }
      },
      waypointPath: function() {
        if (this.waypointList.length !== 0) {
          return this.waypointList.map((item) => {
            return {
              lat: parseFloat(item.lat), lng: parseFloat(item.lng)
            }
          });
        } else {
          return []
        }
      },

      markers: function() {
        if (this.boardList.length !== 0) {
          return this.boardList.map((item) => {
            return {
              lat: parseFloat(item.latitude_gps), lng: parseFloat(item.longitude_gps)
            }
          });
        } else {
          return []
        }
      },
    },
    methods: {
      onMarkerClick: function (i) {
        this.info_obj = this.boardList[i];
        this.info_pos.lat = parseFloat(this.info_obj.latitude_gps);
        this.info_pos.lng = parseFloat(this.info_obj.longitude_gps);
        this.info_opened = true;
      },
      onShowClick: function (marker) {
        this.clicked_marker = this.boardList[marker];
        this.modal_show = true;
      },
      getIconMarker: function (idx) {
        if (this.boardList[idx].image === 'media/board/#')
          return '../../../static/markerwioutphto.png';
        else
          return '../../../static/markerwithphoto.png';
      }
    }
  }
</script>

<style scoped>
  .map {
    min-height: 88vh;
    max-width: 99.0vw;
  }

  .tracker {

  }
</style>
