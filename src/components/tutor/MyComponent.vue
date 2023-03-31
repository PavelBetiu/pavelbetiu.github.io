<template>
    <div class="container page-header min-vh-100">
      <div id="atext" class="mb-0">One of the greatest text that has ever been annotated stands now before you. Praise the almighty!</div>
    </div>
  </template>
  
  <script>
  import { Recogito, init } from '@recogito/recogito-js'
  import '@recogito/recogito-js/dist/recogito.min.css';
  
  export default {
    name: 'test',
    data() {
      return {
        annotation: {},
      }
    },
    mounted() {
        console.log('mounted')
        console.log(init)
        this.annotation = init({
            content: document.getElementById('atext'),
        });
    },
  }
  </script>