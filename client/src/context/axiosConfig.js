import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://ml-vipe-shop.onrender.com',
  /* Você pode adicionar mais configurações aqui conforme necessário,
     como headers padrões, timeout, etc. */
});

export default axiosInstance;