import axios from "axios";
import * as Constants from "../constants/constant";



function login(data, callBack) {
  const HEADER = Constants.header();
  axios
    .post(Constants.BASE_URL + "/api/user/login", data, {headers : HEADER})
    .then(res => {
      if(res.status === 200){
        callBack(res);
      }
    })
    .catch(err => {
      console.log(err);
    });
}
function Register(data, callBack) {
  axios
    .post(Constants.BASE_URL + "/api/user/register", data)
    .then(res => callBack(res));
}

export default { login, Register };