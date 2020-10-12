import axios from 'axios'

const api = axios.create({
  baseURL: 'https://hacka-getnet.herokuapp.com/api/'
});

export default api;