<template>
  <footer class="footer pt-5">
    <hr class="horizontal dark mb-5">
    <div class="container">
      <div class=" row">
        <div class="col-12">
          
          <div class="text-center">
            <img :src="require('@/assets/images/readerbench-small.svg')" alt="" style="width: 80px; height: 80px; " />
            <p class="my-4 text-sm">
              All rights reserved. Copyright © 2023 ReaderBench.
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>

export default {
  name: "Footer",
  computed: {
  },
  methods: {
  },
};
</script>
