<template>
  <div id="app">
    <around-header></around-header>
    <!--<div class="spaces"></div>-->
    <router-view></router-view>

    <around-footer></around-footer>

    <noscript><div><img src="https://mc.yandex.ru/watch/45829677" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
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
    },
    mounted() {
      this.$store.dispatch('fetch_position_list')
      /* yandex metrika code */
      (function (d, w, c) {
        (w[c] = w[c] || []).push(function() {
          try {
            w.yaCounter45829677 = new Ya.Metrika({
              id:45829677,
              clickmap:true,
              trackLinks:true,
              accurateTrackBounce:true
            });
          } catch(e) { }
        });

        var n = d.getElementsByTagName("script")[0],
          s = d.createElement("script"),
          f = function () { n.parentNode.insertBefore(s, n); };
        s.type = "text/javascript";
        s.async = true;
        s.src = "https://mc.yandex.ru/metrika/watch.js";

        if (w.opera == "[object Opera]") {
          d.addEventListener("DOMContentLoaded", f, false);
        } else { f(); }
      })(document, window, "yandex_metrika_callbacks");
      /* yandex metrika code end */
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
  .spaces {
    min-width: 100%;
    min-height: 5vh;
  }

</style>
