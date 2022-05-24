import axios from "helpers/axios";
import { setSession } from 'helpers/auth';

export const signin = (email, password) => {

  return axios.post(`/users/sign_in`, { user: { email, password } })
  .then((res) => {
    if (res.status === 200) {
      setSession(res.data.accessToken)
      return true;
    }
    else {
      alert("Exception: ", res.data.message)
      setSession(null);
    }
    return false
  })
  .catch((err) => {
    alert(err.message)
    return false
  })
}

export const sendReferralEmail = (email) => {
  return axios.post('/referral/send_email', { email })
  .then((response) => {
    if (response.status === 200) {
      return true;
    }
    return false;
  })
  .catch((err) => {
    return false;
  })
}
