import ApiCall from "../API/ApiCall";
import { api } from "../API/ApiEndPoints";

// send access_token then generate token for request
export const generateLoginToken = (name, password) => {
  let config = {
    url: api.BASE_URL + api.ENDPOINTS.LOGIN,
    header: {},
    body: {
      username: name,
      password: password
    }
  };
  return dispatch => {
    return ApiCall.postCall(config)
      .then(response => {
        let authentication = false;
        if (response.status === 200) {
          authentication = true;
          localStorage.setItem(
            "access_token",
            response.data.id
          );
        }
        return authentication;
      })
      .catch(error => {
        return error;
      });
  };
};