import axios from 'axios';
const ROOT_URL = "http://localhost:3001";

// ----------------------------------------------------------------------

const axiosInstance = axios.create({
  baseURL: ROOT_URL
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
);

export default axiosInstance;
