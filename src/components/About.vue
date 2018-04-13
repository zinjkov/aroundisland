<template>
  <div class="about">
    <div class="container">
      <div class="about-team">
          <h3>Команда</h3>
      </div>
      <div class="whoiswho">
        <div class="row">
          <div class="col-lg-6" v-for="item in team_list">
            <b-card>
              <img :src="domain + item.avatar">
              <h4>{{item.name}}</h4>
              <p>
                {{item.description}}
              </p>
            </b-card>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import {mapGetters} from "vuex";

  export default {
    name: 'about',
    data() {
      return {
//        domain: 'http://127.0.0.1:8000/',
        domain: 'http://www.aroundisland.ru/'
      }
    },
    mounted(){
      this.$store.dispatch('fetch_team_list');
    },
    computed: {
      ...mapGetters(
        [
          'team_list'
        ]
      )
    }
  }
</script>

<style scoped>
  img {
    width: 324px;
    height: 343px;
  }
  .about-team {
    padding-top: 20px;
    padding-bottom: 10px;
  }
  p {
    text-align: justify;
  }
</style>
