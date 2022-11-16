import { isNil } from 'lodash';
import router from '@/router';
import axios from 'axios';

export default {
  isAuthenticated() {
    const user = localStorage.getItem('user');
    return !isNil(user);
  },

  login(creds, redirect: string) {
    // TODO: call token endpoint
    const user = {
      grant_type: "password",
      client_id: "8okRYORQww9VK0x3UTHAe8rl0dDvCUL6s3d6T43z",
      client_secret: "sOyagG4VyhuBuVjrxzPtO848IbLSk19q7xGKp83c7FDNnNRGJRKOX3RAFI0F4SQMNtIx2Gg9xQTxPPKaTMikniMSbci7nppISLKq8EoRB5U8RZslOPu85AB4H5hI5EsZ",
      username: creds.username,
      password: creds.password
    };

    localStorage.setItem('user', JSON.stringify(user));
    console.log('login', user);
    // axios
    // .post('/oauth2/token/', user)
    // .then(response => {
    //   if (redirect) {
    //     router.push(redirect)
    //   }
    //   localStorage.setItem('token', response.data.access_token);
    //   localStorage.setItem('refresh_token', response.data.refresh_token);
    //   console.log(response)
    // })
    // .catch(error => {
    //   console.log(error)
    // })

    if (redirect) {
      router.push({ path: redirect, hash: '#logged_in' })
    }
    console.log('after axios');
  },

  // To log out
  logout: function () {
    localStorage.removeItem('user');
    router.push({ path: '/', hash: '#logged_out' })
  }
}
