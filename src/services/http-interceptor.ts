import axios from 'axios';

export function httpInterceptor() {
  axios.interceptors.request.use(request => {
    // TODO: read from env variable
    request.baseURL = 'http://localhost:8000';
    request.headers = request.headers ?? {};

    request.headers.Authorization = 'Bearer ' + localStorage.getItem('token');
    return request;
  });
}
