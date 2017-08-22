<template>
  <b-navbar

    class="aroundHeader" toggleable type="light" variant="link" toggle-breakpoint="md">

    <b-nav-toggle target="nav_collapse"></b-nav-toggle>

    <b-navbar-brand href="#"><img src="static/logo.png"></b-navbar-brand>
    <b-navbar-brand href="#"><img src="static/around_logo.jpeg" style="max-height: 50px; max-width: 50px">
    </b-navbar-brand>


    <b-collapse is-nav id="nav_collapse">

      <b-nav is-nav-bar>
        <b-nav-item href="#"><span>Вокруг Острова!</span></b-nav-item>
      </b-nav>

      <!-- Right alignd nav items -->
      <b-nav is-nav-bar class="ml-auto">
        <b-nav is-nav-bar>
          <b-button-group>
            <b-nav-item>
              <b-button variant="link">
                <router-link to="/"><span><icon name="home"></icon> Домой</span></router-link>
              </b-button>
            </b-nav-item>
            <b-nav-item href="#">
              <b-button variant="link">
                <router-link to="/about"><span><icon name="group"></icon> О нас</span></router-link>
              </b-button>
            </b-nav-item>
            <b-nav-item href="#">
              <b-button variant="link">
                <router-link to="/gallery">
                  <span><icon name="photo"></icon> Галерея</span>
                </router-link>
              </b-button>
            </b-nav-item>
            <b-nav-item href="#">
              <b-button variant="link">
                <router-link to="/tracker">
                  <span><icon name="map-marker"></icon> Трекер</span>
                </router-link>
              </b-button>
            </b-nav-item>
          </b-button-group>
        </b-nav>

      </b-nav>

    </b-collapse>
  </b-navbar>
</template>

<script>

  export default {
    name: 'around-header'
  }
</script>

<style scoped>
  .aroundHeader {
    background-color: #00365f;
    color: white;
  }

  span {
    font-size: 20px;
    color: white
  }
</style>
