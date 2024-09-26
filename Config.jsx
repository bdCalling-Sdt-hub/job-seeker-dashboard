import axios from 'axios';

const baseURL = axios.create({
    // baseURL: "http://192.168.10.64:8000/api",
    // baseURL: "https://app.findwork.careers/api",
    baseURL: "https://server.remedycare.co.uk/api",
    // baseURL: "http://152.42.204.147:8000/api",
    timeout: 10000,
    headers: {'X-Custom-Header': 'foobar'}
  });

export default baseURL;