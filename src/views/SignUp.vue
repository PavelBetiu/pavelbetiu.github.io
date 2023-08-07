<template>
  <div class="body page-header min-vh-100">
      <div class="container">
        <div class="row d-flex justify-content-around">
          <div class="col-4 card signup-form">
            <div class="card card-plain signup-form-card">
              <div class="card-header" style="box-shadow: none">
                <p class="mb-0">Enter your account details to sign up</p>
              </div>
              <div class="card-body">
                <form role="form">
                  <div class="mb-3">
                    <input type="email" class="form-control form-control-lg" placeholder="Email" aria-label="Email" aria-describedby="email-addon" v-model="email">
                  </div>
                  <div class="mb-3">
                    <input type="text" class="form-control form-control-lg" placeholder="First Name" aria-label="First Name" aria-describedby="email-addon" v-model="firstName">
                  </div>
                  <div class="mb-3">
                    <input type="text" class="form-control form-control-lg" placeholder="Last Name" aria-label="Last Name" aria-describedby="email-addon" v-model="lastName">
                  </div>
                  <div class="mb-3">
                    <input type="password" class="form-control form-control-lg" placeholder="Password" aria-label="Password" aria-describedby="password-addon" v-model="password">
                  </div>
                  <div class="mb-3">
                    <input type="password" class="form-control form-control-lg" placeholder="Confirm Password" aria-label="Confirm Password" aria-describedby="password-addon" v-model="confirmPassword">
                  </div>
                  <div class="text-center">
                    <button type="button" class="btn btn-lg bg-gradient-primary btn-lg w-100 mt-4 mb-0" @click="signUp()">Sign Up</button>
                  </div>
                </form>
              </div>
              <div class="card-footer text-center pt-0 px-lg-2 px-1">
                <p class="mb-4 text-sm mx-auto">
                  <router-link to="/">Back to home page</router-link>
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

.signup-form {
  background-color: #f8f9fa;
  overflow: hidden;
  box-shadow: none;
  padding: 0.3rem;
}

.signup-form-card {
    position: relative;
    background-color: #fff;
    width: 100%;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
}

.signup-form::before {
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
import router from '@/router';
import { isEmpty, values } from 'lodash';

import {
    inject
} from 'vue';

import {
  TOAST_SERVICE
} from "@/services/toast-service.interface"

export default {
  name: "SignUp",
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: '',
      toastService: inject(TOAST_SERVICE),
    };
  },
  methods: {
    signUp() {
      if (isEmpty(this.password) || isEmpty(this.firstName) || isEmpty(this.lastName) || isEmpty(this.email)) {
        this.toastService && this.toastService.error('Please fill in all the fields', 'Sign up failed');
        return;
      }
      if (this.password !== this.confirmPassword) {
        this.toastService && this.toastService.error('Passwords do not match', 'Sign up failed');
        return;
      }
      if (!this.isValidEmail()) {
        this.toastService && this.toastService.error('Please enter a valid email address', 'Sign up failed');
        return;
      }

      auth.signUp({
        email: this.email,
        password: this.password,
        firstName: this.firstName,
        lastName: this.lastName,
      }, this.onSignUpSuccess, this.onSignUpFail);
    },
    onSignUpSuccess(response) {
      this.toastService && this.toastService.success('The account has been successfully created. You may now sign in.', '');
      router.push({ path: '/login' });
    },
    onSignUpFail(error) {
      console.log(error);
      const message = values(error.response.data).join(', ');
      this.toastService && this.toastService.error(message, 'Sign Up failed');
    },
    isValidEmail() {
      return this.email === '' || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email);
    },
  },
};
</script>
