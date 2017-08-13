<template>
  <div class="gallery">
    <div class="container">
      <div class="row">
        <b-card class="col-lg-4">
          <img src="../../static/board2.jpg">
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
</template>

<script>

  export default {
    name: 'gallery'
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
