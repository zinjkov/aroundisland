<template>
  <div id="app">
    <around-header></around-header>

    <router-view></router-view>

    <around-footer></around-footer>
  </div>
</template>

<script>
  import AroundHeader from './components/shared/AroundHeader.vue'
  import AroundFooter from "./components/shared/AroundFooter";
  import Api from './Api'
  export default {
    name: 'app',
    created() {
//      this.$store.dispatch('fetch_position_count')
//        console.log(this.$store.dispatch(''))
    },
    components: {
      AroundFooter,
      AroundHeader
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  html, body {
    width: 100%;
    height: 100%;
    padding: 0 0;
    margin: 0 0;
  }

</style>
