<template>
  <div class="tracker">
    <b-modal class="container" v-model="show" size="lg">
      <img :src="modalImage" class="img-modal">
    </b-modal>

    <gmap-map
      class="map"
      :center=mapCenter
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
      <gmap-cluster
            :gridSize="30">
        <gmap-marker
          v-for="(m, i) in get_waypoint_list"
          :position="m"
          :clickable="true"
          :draggable="false"
          @click="onMarkerClick(i)"
          :icon="getIconMarker(i)"
        >
        </gmap-marker>
      </gmap-cluster>
      <gmap-polyline
        :path="path"
        :editable="false"
        :deepWatch="true"
        :options="{strokeColor: '#00FF00'}"
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
        show: false,
        modalImage: 'media/board/#',
        info_pos: {lat: 0, lng: 0}
      }
    },
    computed: {
      ...mapGetters(
        [
          'get_waypoint_list',
          'last_position',
          'path',
          'position_list',
          'mapCenter'
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
        if (this.info_obj.image !== 'media/board/#') {
          this.modalImage = 'http://aroundisland.ru/' + this.info_obj.image;
          this.show = true;
        }
      },
      getIconMarker: function (idx) {
        if (this.position_list[idx].image === 'media/board/#')
          return '../../static/markerwioutphto.png';
        else
          return '../../static/markerwithphoto.png';
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

  .img-modal {
    position: relative;
    max-width: 100%;
    max-height: 500px
  }
</style>
