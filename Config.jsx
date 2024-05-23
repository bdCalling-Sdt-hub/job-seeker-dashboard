import axios from 'axios';

const baseURL = axios.create({
    // baseURL: "http://192.168.10.64:8000/api",
    baseURL: "http://app.findwork.careers/api",
    timeout: 10000,
    headers: {'X-Custom-Header': 'foobar'}
  });

export default baseURL;