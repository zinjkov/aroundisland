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
  export default {
    name: 'app',
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
