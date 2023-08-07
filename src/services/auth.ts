import { isNil } from 'lodash';
import router from '@/router';
import axios from 'axios';

interface Callback {
  (message: any): void;
}

export default {

  isAuthenticated() {
    const user = localStorage.getItem('user');
    return !isNil(user);
  },

  // Only for testing
  dummy_successful_login(creds, redirect: string, onSuccess: Callback, onError: Callback) {
    const user = {
      grant_type: "password",
      client_id: "8okRYORQww9VK0x3UTHAe8rl0dDvCUL6s3d6T43z",
      client_secret: "sOyagG4VyhuBuVjrxzPtO848IbLSk19q7xGKp83c7FDNnNRGJRKOX3RAFI0F4SQMNtIx2Gg9xQTxPPKaTMikniMSbci7nppISLKq8EoRB5U8RZslOPu85AB4H5hI5EsZ",
      username: creds.username,
      password: creds.password
    };

    if (redirect) {
      router.push({ path: redirect, hash: '#logged_in' })
    }
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', 'secret_token');
    localStorage.setItem('refresh_token', 'secret_refresh_token');

    onSuccess(user);
  },

  login(creds, redirect: string, onSuccess: Callback, onError: Callback) {

    const user = {
      grant_type: "password",
      client_id: "hjLkQMXnau0rMdMEwxRMyEpShoANKubDmIPgdhLX",
      client_secret: "mlinSHmwW1m62GPNlJSuKeZImZusco59pIZDmDbF1mK6EndQ84kFB2TljLUwJQMazg4H27k5NqlwKJa12f6BfXTcmh3dz2vdcKMbEZX51K42Ks1PThJMlKVCF38v15gq",
      username: creds.username,
      password: creds.password
    };

    axios
    .post('/oauth2/token/', user)
    .then(response => {
      if (redirect) {
        router.push({ path: redirect, hash: '#logged_in' })
      }
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('token', response.data.access_token);
      localStorage.setItem('refresh_token', response.data.refresh_token);

      onSuccess(user.username);
    })
    .catch(error => {
      onError(error);
    })
  },

  signUp(details, onSuccess: Callback, onError: Callback) {

    const user = {
      email: details.email,
      password: details.password,
      first_name: details.firstName,
      last_name: details.lastName,
    };

    axios
    .post('/users/register', user)
    .then(response => {
      onSuccess(response);
    })
    .catch(error => {
      onError(error);
    })
  },

  // To log out
  logout: function (callback?: Callback) {
    localStorage.removeItem('user');
    router.push({ path: '/', hash: '#logged_out' })

    if (callback) {
      callback("You have been logged out");
    }
  }
}
