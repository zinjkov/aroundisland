<template>
  <div class="wrap">
    <img v-show="info.image!==0" :src="srcImg" width="200px" height="200px"
         @click="$emit('show')">
    <div class="info-block"
         @click="$emit('show')">
      <b class='text-info' v-for="(value, key) in Fields">
        {{key}} : {{value}}
      </b>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'info',
    data () {
      return {
        srcsI: function () {
          return this.getImgSrc()
        }
      }
    },
    props: [
      'img',
      'info'
    ],

    computed: {
      srcImg: function () {
//          const domain = 'http://www.aroundisland.ru/';
        const domain = 'http://127.0.0.1:8000/';
        return domain + this.info.image;
      },
      Fields: function () {
        return {
          speed_gps: this.info.speed_gps,
          created_at: this.info.created_at,
          altitude_gps: this.info.altitude_gps,
          satellites_gps: this.info.satellites_gps,
          hdop_gps: this.info.hdop_gps,
          ip_client: this.info.ip_client,
          latitude_gps: this.info.latitude_gps,
          latitude_point: this.info.latitude_point,
          longitude_gps: this.info.longitude_gps,
          longitude_point: this.info.longitude_point,
          vcc: this.info.vcc,
          yaw_compass: this.info.yaw_compass,
          yaw_gps: this.info.yaw_gps,
        }
      }
    },

    method: {}


  }
</script>

<style scoped>
  img {
    display: flex;
  }

  .text-info {
    display: flex;
  }

  .info-block {
    margin-left: 50px;
  }

  .wrap {
    height: 100%;
    width: 100%;
    display: flex;
  }
</style>
