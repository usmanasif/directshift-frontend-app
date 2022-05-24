import axios from "helpers/axios";
import jwtDecode from 'jwt-decode'

export const isAuthorized = () => {
  const accessToken = localStorage.getItem('accessToken');
  if (!accessToken) return false;

  const decoded = jwtDecode(accessToken);
  const currentTime = Date.now() / 1000;

  return decoded.exp > currentTime;
}

export const setSession = (accessToken) => {
  if (accessToken) {
    localStorage.setItem('accessToken', accessToken);
  } else {
    localStorage.removeItem('accessToken');
    delete axios.defaults.headers.common.Authorization;
  }
}