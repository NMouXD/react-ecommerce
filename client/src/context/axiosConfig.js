import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://ml-vipe-shop.onrender.com',
});

export default axiosInstance;