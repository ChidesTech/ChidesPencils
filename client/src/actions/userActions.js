import Axios from "axios";
import { USER_LOGIN_FAILURE, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_UPDATE_REQUEST, USER_UPDATE_SUCCESS, USER_UPDATE_FAILURE } from "../constants/userConstants";
import Cookie from "js-cookie";


export const update = ({ userId, admin, password }) => async (dispatch, getState) => {
  const { userLogin: { userInfo } } = getState();
  dispatch({ type: USER_UPDATE_REQUEST, payload: { userId, admin, password } });
  try {
    const { data } = await Axios.put("/api/users/" + userId,
      { admin, password }, {
      headers: {
        Authorization: 'Bearer ' + userInfo.token
      }
    });
    dispatch({ type: USER_UPDATE_SUCCESS, payload: data });
    Cookie.set('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({ type: USER_UPDATE_FAILURE , payload: error.response && error.response.data.msg
      ? error.response.data.msg
      : error.msg
    
    });
  }
}

export const login = (admin, password) => async (dispatch) => {
    dispatch({ type: USER_LOGIN_REQUEST, payload: { admin, password } });
    try {
      const { data } = await Axios.post("/api/users/login", { admin, password });
      dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
      Cookie.set('userInfo', JSON.stringify(data));
    } catch (error) {
      dispatch({ type: USER_LOGIN_FAILURE, payload:  error.response && error.response.data.msg
        ? error.response.data.msg
        : error.msg });
    }
  }

  export const logout = () => (dispatch) => {
    Cookie.remove("userInfo");
    dispatch({ type: USER_LOGOUT })
  }