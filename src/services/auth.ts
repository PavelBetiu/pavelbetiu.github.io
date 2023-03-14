import { isNil } from 'lodash';
import router from '@/router';
import axios from 'axios';

export default {
  isAuthenticated() {
    const user = localStorage.getItem('user');
    return !isNil(user);
  },

  login(creds, redirect: string) {
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
      alert('Successfully logged in');
      console.log(response)
    })
    .catch(error => {
      alert(error.response.data.error_description);
    })
  },

  // To log out
  logout: function () {
    localStorage.removeItem('user');
    router.push({ path: '/', hash: '#logged_out' })
  }
}
