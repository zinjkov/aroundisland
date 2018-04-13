<template>
  <div>
    <div class="gallery">
      <!--<div style="min-height: 300px"></div>-->
      <div class="container">
        <div class="row">
          <b-card v-if="gallery_list.length !== 0" class="col-lg-4"
                  v-for="item in gallery_list">
            <img :src=item.cover>
            <div class="card-view" style="margin-top: 10px">
              <b-button @click='selectAlbum(item)' variant="primary">{{item.name}}</b-button>
            </div>
          </b-card>
        </div>
      </div>
    </div>
    <div v-if="selectedAlbum !== null" id="photo_list" class="container">
      <h3>{{selectedAlbum.name}}</h3>
      <image-list :imageList=photoList></image-list>
    </div>
  </div>

</template>

<script>
  import {mapGetters} from 'vuex'
  import ImageList from './shared/ImageList'
  import Api from '@/Api.js'
  export default {
    name: 'gallery',
    components: {
      ImageList
    },
    data() {
      return {
        selectedAlbum: null,
        photoList: []
      }
    },
    mounted() {
//      const domain = 'http://127.0.0.1:8000/';
      const domain = 'http://www.aroundisland.ru/';
      Api.fetchGalleryList().then((response => {
        this.$store.commit('add_gallery_list', response.data);
      }));
    },
    computed: {
      ...mapGetters(
        [
          'last_img',
          'image_list',
          'gallery_list'
        ]
      )
    },
    methods: {
        selectAlbum(album) {
//            window.scrollingElement(document.getElementById('photo_list'));
          this.selectedAlbum = album;
          Api.fetchPhotoList(album.id).then(response => {
             this.photoList =  response.data.data.map(item => {
               return 'http://www.aroundisland.ru/' + item;
             });
          });
        }
    }

  }
</script>

<style scoped>
  .gallery {
    display: inline-flex;
    margin-top: 10px;
  }
  img {
    width: 200px;
    height: 150px;
  }
  #photo_list img {
    width: 300px;
    height: 200px;
    margin: 10px 10px;
  }

  .card-view {
    display: block;
  }
  .img-modal {
    position:relative; max-width: 100%; max-height: 500px
  }

</style>
