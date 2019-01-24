import { LOGIN_REQUEST, LOGGED_IN, LOGIN_FAILED } from "./constant";

export function loginRequest(data) {
  return {
    type: LOGIN_REQUEST,
    data
  };
}

export function loginSuccess(user) {
  console.log(user, "sudrishya");
  return {
    type: LOGGED_IN,
    user
  };
}

export function loginFailed(error) {
  return {
    type: LOGIN_FAILED,
    error
  };
}
