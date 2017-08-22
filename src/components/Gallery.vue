<template>
  <div>
    <div class="gallery">
      <div class="container">
        <div class="row">
          <b-card class="col-lg-4">
            <img :src=src_img>
            <div class="card-view">
              <b-button variant="primary">С лодки</b-button>
            </div>
          </b-card>
          <b-card class="col-lg-4"><img src="../../static/board2.jpg">
            <div class="card-view">
              <b-button variant="primary">СМИ</b-button>
            </div>
          </b-card>
          <b-card class="col-lg-4"><img src="../../static/board2.jpg">
            <div class="card-view">
              <b-button variant="primary">After-Party</b-button>
            </div>
          </b-card>
        </div>
      </div>
    </div>
    <div class="container">
      <h3>FROM BOARD</h3>
      <image-list :imageList=image_list></image-list>
    </div>
  </div>

</template>

<script>
  import {mapGetters} from 'vuex'
  import ImageList from './shared/ImageList'
  export default {
    name: 'gallery',
    components: {
      ImageList
    },
    data() {
      return {
        src_img: ""
      }
    },
    mounted() {
//      const domain = 'http://127.0.0.1:8000/';
      const domain = 'http://www.aroundisland.ru/';
      this.src_img = domain + this.last_img;
    },
    computed: {
      ...mapGetters(
        [
          'last_img',
          'image_list'
        ]
      )
    }

  }
</script>

<style scoped>
  .gallery {
    display: inline-flex;

    margin-top: 10px;

    background-color: gray;
  }

  img {
    width: 300px;
    height: 200px;
    margin: 10px 10px;
  }

  .card-view {
    display: block;
  }

</style>
