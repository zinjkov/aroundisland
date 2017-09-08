<template>
  <div>
    <b-navbar
      class="aroundHeader" toggleable type="light" variant="link" toggle-breakpoint="md">

      <b-collapse is-nav id="nav_collapse">

        <!--<b-nav is-nav-bar>-->
        <!--<b-nav-item href="#"><span>Вокруг Острова!</span></b-nav-item>-->
        <!--</b-nav>-->

        <!-- Right alignd nav items -->
        <b-nav is-nav-bar class="ml-auto">
          <b-nav is-nav-bar>
            <b-button-group>
              <b-nav-item>
                <b-button variant="link">
                  <router-link to="/admin/tracker"><span><icon name="map-o"></icon>Трекер</span>
                  </router-link>
                </b-button>
              </b-nav-item>
              <b-nav-item>
                <b-button variant="link">
                  <router-link to="/admin/analytics"><span><icon name="area-chart"></icon> Аналитика</span>
                  </router-link>
                </b-button>
              </b-nav-item>
              <b-nav-item>
                <b-button variant="link">
                  <router-link to="/admin/waypointeditor"><span><icon name="pencil"></icon>Проложить маршрут</span>
                  </router-link>
                </b-button>
              </b-nav-item>
            </b-button-group>
          </b-nav>

        </b-nav>

      </b-collapse>
    </b-navbar>
    <router-view></router-view>
  </div>
</template>

<script>
  import {mapGetters} from "vuex";
  import Api from "../Api";

  export default {
    name: 'admin',
    data() {
      return {

      }
    },
    mounted(){
      Api.fetchWaypointList().then(response => {
          this.$store.commit('add_waypoint_list', response.data);
      })
    },
    computed: {
      ...mapGetters(
        []
      )
    }
  }
</script>

<style scoped>

</style>
