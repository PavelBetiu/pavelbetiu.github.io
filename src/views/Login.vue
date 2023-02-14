<template>
<section>
  <div class="background-login">
    <div class="page-header min-vh-100">
      <div class="container">
        <div class="row">
          <div class="col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-0 mx-auto background-card">
            <div class="card card-plain">
              <div class="card-header" style="box-shadow: none">
                <p class="mb-0">Enter your email and password to sign in</p>
              </div>
              <div class="card-body">
                <form role="form" @submit.prevent="submitForm">
                  <div class="mb-3">
                    <input type="email" class="form-control form-control-lg" placeholder="Email" aria-label="Email" aria-describedby="email-addon" v-model="username">
                  </div>
                  <div class="mb-3">
                    <input type="password" class="form-control form-control-lg" placeholder="Password" aria-label="Password" aria-describedby="password-addon" v-model="password">
                  </div>
                  <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" id="rememberMe">
                    <label class="form-check-label" for="rememberMe">Remember me</label>
                  </div>
                  <div class="text-center">
                    <button type="button" class="btn btn-lg bg-gradient-primary btn-lg w-100 mt-4 mb-0" @click="login()">Sign in</button>
                  </div>
                </form>
              </div>
              <div class="card-footer text-center pt-0 px-lg-2 px-1">
                <p class="mb-4 text-sm mx-auto">
                  <router-link to="/forgot-password">Forgot password ?</router-link>
                  <!-- <a href="javascript:;" class="text-primary text-gradient font-weight-bold">Sign up</a> -->
                </p>
              </div>
            </div>
          </div>
          <div class="col-6 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 end-0 text-center justify-content-center flex-column">
           <div class="position-relative h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center">
              <!-- <img src="../assets/img/shapes/pattern-lines.svg" alt="pattern-lines" class="position-absolute opacity-4 start-0"> -->
              <div class="position-relative">
                <img class="max-width-500 w-80 h-80 position-relative z-index-2" src="../assets/images/readerbench-small.svg">
              </div>
              <!-- <h4 class="mt-5 text-white font-weight-bolder">"Something cool about ReaderBench"</h4>
              <p class="text-white">Cool description of what we do.</p> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </section>
</template>
<style>
.background-login {
  background-color: #f8f9fa
}
.background-card {
  background-color: #fff;
}
</style>
<script>
import auth from "@/services/auth";
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    login() {
      let redirect = "/";
      if (this.$route.query.redirect) {
        redirect = decodeURIComponent(this.$route.query.redirect);
      }
      auth.login({username: this.username, password: this.password}, redirect);
    },
    submitForm(e) {
      const formData = {
        username: this.username,
        password: this.password
      }

      axios.post('/api/v2/oauth2/token/', formData)
        .then(response => {
          console.log(response)

          const token = response.data.auth_token

          this.$store.commit('setToken', token)

          axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

          localStorage.setItem('token', token)
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
};
</script>
