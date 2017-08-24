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
                  <router-link to="/admin/analytics"><span><icon name="area-chart"></icon> Аналитика</span>
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

  export default {
    name: 'about',
    data() {
      return {}
    },
    mounted(){

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
