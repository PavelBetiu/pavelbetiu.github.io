<template>
  <div class="body page-header min-vh-100">
      <div class="container">
        <div class="row d-flex justify-content-around">
          <div class="col-4 card login-form">
            <div class="card card-plain login-form-card">
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
                    <button type="button" class="btn btn-lg bg-gradient-primary btn-lg w-100 mt-4 mb-0" @click="login(), greet()">Sign in</button>
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
          <div class="col-4 d-flex justify-content-center align-items-center">
            <img class="w-80 h-80" src="../assets/images/readerbench-small.svg">
          </div>
        </div>
      </div>
    </div>
</template>

<style lang="scss" scoped>
.body {
    background-color: #f8f9fa;
}

.login-form {
  background-color: #f8f9fa;
  overflow: hidden;
  box-shadow: none;
  padding: 0.3rem;
}

.login-form-card {
    position: relative;
    background-color: #fff;
    width: 100%;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
}

.login-form::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, transparent, transparent, #4c00ff, #7300ff, #bf00ff);
    animation: animate 5s linear infinite;
    transform-origin: bottom right;
}

@keyframes animate {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

</style>


<script>
import auth from "@/services/auth";
import axios from "axios";

import {
    inject
} from 'vue';

import {
  TOAST_SERVICE
} from "@/services/toast-service.interface"

export default {
  name: "Login",
  data() {
    return {
      username: '',
      password: '',
      toastService: inject(TOAST_SERVICE),
    };
  },
  methods: {
    login() {
      let redirect = "/";
      if (this.$route.query.redirect) {
        redirect = decodeURIComponent(this.$route.query.redirect);
      }
      
      auth.dummy_successful_login({username: this.username, password: this.password}, redirect, this.onLoginSuccess, this.onLoginFail);
    },
    onLoginSuccess(response) {
      this.toastService && this.toastService.success('Welcome to ReaderBench!', 'Hi, ' + response);
    },
    onLoginFail(error) {
      this.toastService && this.toastService.error(error.response.data.error_description, 'Login failed');
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
    },
  },
};
</script>
