import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://memory-api.dev-scapp.swisscom.com/',
});

export default instance;
