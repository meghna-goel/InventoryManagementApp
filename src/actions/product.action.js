import ApiCall from "../API/ApiCall";
import { GETPRODUCT } from "./ActionType";
import { api } from "../API/ApiEndPoints";

//actions
export const allProduct = (project) => {
  return { type: GETPRODUCT, project };
};

// send access_token then generate token for request
export const getAllProduct = () => {
  let config = {
    url: api.BASE_URL + api.ENDPOINTS.PRODUCT,
    header: {'x-access-token' : localStorage.getItem('access_token')},
    body: {
    }
  };
  return dispatch => {
    return ApiCall.getCall(config)
      .then(response => {
        if (response.status === 200) {
          dispatch(allProduct(response.data));
          return true;
        } else {
          return false;
        }
      })
      .catch(error => {
        return error;
      });
  };
};

export const addProject = (project) => {
  let config = {
    url: api.BASE_URL + api.ENDPOINTS.PRODUCT,
    header: {'x-access-token' : localStorage.getItem('access_token')},
    body: {
      ...project
    }
  };
  return dispatch => {
    return ApiCall.postCall(config)
      .then(response => {
        if (response.status === 200) {
          alert('Project added successfully')
          return true;
        } else {
          return false;
        }
      })
      .catch(error => {
        return error;
      });
  };
};

export const updateProject = (id, project) => {
  let config = {
    url: api.BASE_URL + api.ENDPOINTS.PRODUCT +'/'+id,
    header: {'x-access-token' : localStorage.getItem('access_token')},
    body: {
      ...project
    }
  };
  return dispatch => {
    return ApiCall.updateCall(config)
      .then(response => {
        if (response.status === 200) {
          alert('Project updated successfully')
          return true;
        } else {
          return false;
        }
      })
      .catch(error => {
        return error;
      });
  };
};

export const deleteProject = (id, project) => {
  let config = {
    url: api.BASE_URL + api.ENDPOINTS.PRODUCT +'/'+id,
    header: {'x-access-token' : localStorage.getItem('access_token')},
    body: {
    }
  };
  return dispatch => {
    return ApiCall.deleteCall(config)
      .then(response => {
        if (response.status === 200) {
          alert('Project deleted successfully')
          return true;
        } else {
          return false;
        }
      })
      .catch(error => {
        return error;
      });
  };
};