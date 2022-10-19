<template>

<div class="container">
  <div class="row">
    <div class="col-lg-2"></div>
    <div class="col-lg-8 d-flex justify-content-center flex-column">
      <div class="card d-flex blur justify-content-center p-4 shadow-lg my-sm-0 my-sm-6 mt-8 mb-5">
        <div class="text-center">
          <h3 class="text-gradient text-primary">CSCL</h3>
        </div>
        <form autocomplete="off">
          <div class="card-body pb-2">
            <div class="row">
              <div class="col-md-6">
                <label>Language</label>
                <div class="input-group mb-4">
                  <select class="form-control" name="language-button" id="language-button" v-model="language">
                    <option value="fr">French</option>
                    <option value="en" selected>English</option>
                    <option value="ro">Romanian</option>
                  </select>
                </div>
              </div>
              <div class="col-md-6">
                <label>File</label>
                <div class="input-group mb-4">
                  <input type="file" class="form-control" @change="updateFile">
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 text-center">
                <button type="button" class="btn bg-gradient-primary mt-3 mb-0" @click="process()">Process</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="col-lg-2"></div>
  </div>
</div>

</template>
<script>
import { inject } from 'vue';
import { CSCL_SERVICE } from '../../../services/cscl-service.interface';

export default {
  data() {
    return {
      language: "fr",
    };
  },
  setup() {
    return {
      csclService: inject(CSCL_SERVICE),
    };
  },
  methods: {
    updateFile(event) {
      if (event.target.files.length > 0) {
        this.file = event.target.files[0];
      }
    },
    async process() {
      if (!this.file || !this.language) {
        // TODO: use toaster service to display alert message
        return;
      }
      // TODO: use loading indicator

      const result = await this.csclService.process({
        file: this.file,
        language: this.language
      });
      // TODO: display result in output components
    },
  },
};
</script>
<style lang="scss" scoped>
</style>
