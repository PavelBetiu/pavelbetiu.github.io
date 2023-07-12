<template>
  <div id="app">
    <div class="container position-sticky z-index-sticky top-0">
      <div class="row">
        <div class="col-12">
          <Nav :key="$route.fullPath"/> <!-- change key in Nav on logout -->
        </div>
      </div>
    </div>
    <router-view style="padding-top: 40px" />
    <Footer />
  </div>
</template>
<script>
import { provide } from "vue";
import Nav from "./components/partials/Nav.vue";
import Footer from "./components/partials/Footer.vue";

import { CSCL_SERVICE } from "./services/cscl-service.interface";
import { MockCsclService } from "./services/mock-cscl-service";
import { CsclService } from "./services/cscl-service";
import { ANNOTATION_SERVICE } from "./services/annotation-service.interface";
import { RecogitoAnnotationService } from "./services/recogito-annotation-service";

import { QGEN_SERVICE } from "./services/qgen-service.interface";
import { MockQGenService } from "./services/mock-qgen-service";

export default {
  name: "app",
  components: {
    Nav,
    Footer,
  },
  setup() {
    /**
     * Services injected via DI.
     */
    provide(CSCL_SERVICE, new CsclService());
    //provide(CSCL_SERVICE, new MockCsclService());
    provide(ANNOTATION_SERVICE, new RecogitoAnnotationService());
    provide(QGEN_SERVICE, new MockQGenService());
  },
};
</script>
<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
