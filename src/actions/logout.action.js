import ApiCall from "../API/ApiCall";
import { api } from "../API/ApiEndPoints";
import { LOGIN } from "../routes/constant";
import { push } from "connected-react-router";

// send access_token then generate token for request
export const logout = () => {
  let config = {
    url: api.BASE_URL + api.ENDPOINTS.LOGOUT,
    header: {'x-access-token' : localStorage.getItem('access_token')},
    body: {
    }
  };
  return dispatch => {
    return ApiCall.postCall(config)
      .then(response => {
        if (response.status === 204) {
          localStorage.clear();
          dispatch(push(LOGIN));
        }
      })
      .catch(error => {
        return error;
      });
  };
};