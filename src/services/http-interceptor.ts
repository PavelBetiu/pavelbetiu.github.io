import axios from 'axios';

export function httpInterceptor() {
  axios.interceptors.request.use(request => {
    // TODO: read from env variable
    request.baseURL = 'https://readerbench.com/api/v2';

    return request;
  });
}
