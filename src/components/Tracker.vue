<template>
  <div class="tracker">
    <gmap-map
      class="map"
      :center="{lat: parseFloat(last_position.latitude_gps),
                lng: parseFloat(last_position.longitude_gps)}"
      :zoom="16"
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
        v-for="(m, i) in get_waypoint_list"
        :position="m"
        :clickable="true"
        :draggable="false"
        @click="onMarkerClick(i)"
      >
      </gmap-marker>

      <gmap-polyline
        :path="path"
        :editable="false"
        :deepWatch="true"
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
  import InfoWindow from "./shared/InfoWindow.vue";
  export default {
    name: 'tracker',
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

        modal_show: false,

        info_pos: {lat: 0, lng: 0}
      }
    },
    computed: {
      ...mapGetters(
        [
          'get_waypoint_list',
          'last_position',
          'path',
          'position_list'
        ]
      )
    },
    methods: {
      onMarkerClick: function (i) {
        this.info_obj = this.position_list[i]
        this.info_pos.lat = parseFloat(this.info_obj.latitude_gps);
        this.info_pos.lng = parseFloat(this.info_obj.longitude_gps);
        this.info_opened = true;
      },
      onShowClick: function (marker) {
        this.clicked_marker = this.position_list[marker];
        this.modal_show = true;
      },
    }
  }
</script>

<style scoped>
  .map {
    min-height: 91vh;
    max-width: 99.0vw;
  }

  .tracker {

  }
</style>
