<template>
  <div class="wrapper">
    <b-modal class="container" v-model="show" size="lg">
      <div slot="modal-footer"></div>
      <img :src="imageModal">
    </b-modal>
    <div class="container">
      <div class="row">
        <img v-for="image in imageList"
             class="col-lg-3"
             :src="image"
             @click="triggerModal(image)">
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'ImageList',
    props: {
      imageList: {
        default: []
      }
    },
    data() {
      return {
        show: false,
        imageModal: ''
      }
    },
    methods: {
      triggerModal(image) {
        this.show = !this.show;
        this.imageModal = image;
      },
    }
  }
</script>

<style scoped>
  img {
    height: 35%;
    margin-bottom: 5px;
  }

  .wrapper {
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .sb-modal {
    width: 1000px;
  }
</style>
