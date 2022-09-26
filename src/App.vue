<template>
  <div id="app">
    <div class="container position-sticky z-index-sticky top-0">
      <div class="row">
        <div class="col-12">
          <Nav />
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>
<script>
  import Nav from './components/partials/Nav.vue';
  export default {
    name: 'app',
    components: {
      Nav,
    },
  };
</script>
<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
</style>