<template>

<a href="./sections/page-sections/hero-sections.html">
  <div class="card shadow-lg move-on-hover min-height-160 min-height-160">
    <img class="w-100 my-auto" :src="experiment.featuredImage" alt="">
  </div>
  <div class="mt-2 ms-2">
    <h6 class="mb-0">{{ experiment.name }}</h6>
    <p class="text-secondary text-sm">10 Examples</p>
  </div>
</a>
</template>
<script>
  export default {
    props: ['experiment'],
    data() {
      return {
      }
    },
  };
</script>
<style lang="scss" scoped>
  .card {
    height: 200px;
    background-position: center;
    background-size: cover;
    text-align: center;
  }
  .card-content {
    padding-top: 50px;
    position: absolute;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.35);
    top: 0;
    padding: 10px;
    height: 200px;
    width: 100%;
    span {
      font-size: 18px;
      text-align: center;
      width: 100%;
      position: absolute;
      bottom: 10px;
      right: 0;
    }
    h2 {
      margin-top: 10px;
    }
  }
  .experiment-date {
    background-color: #151515;
    color: #fff;
    font-size: 0.75em;
    padding: 2px 10px;
    position: absolute;
    top: 0;
    right: 0;
  }
</style>