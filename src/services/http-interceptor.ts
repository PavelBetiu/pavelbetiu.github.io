import axios from 'axios';

export function httpInterceptor() {
  axios.interceptors.request.use(request => {
    // TODO: read from env variable
    request.baseURL = 'https://readerbench.com/api/v2';
    request.headers = request.headers ?? {};

    request.headers.Authorization = 'Bearer ' + localStorage.getItem('token');
    return request;
  });
}
