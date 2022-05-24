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
