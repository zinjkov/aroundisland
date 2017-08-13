<template>
  <div class="tracker">
    <gmap-map
      class="map"
      :center="center"
      :zoom="16"
    >
    </gmap-map>
  </div>
</template>

<script>

  export default {
    name: 'tracker',
    data() {
      return {
        center: {lat: 43.127877, lng: 131.892663},
      }
    }
  }
</script>

<style scoped>
  .map {
    min-height: 91vh;
    max-width: 98.7vw;
  }

  .tracker {

  }
</style>
