import { LOGIN, LOGIN_FAIL, LOGOUT } from '../constants/ActionTypes';

export function LOGIN() {
  return {
    type: LOGIN
  };
}



export function LOGOUT() {
  return {
    type: LOGOUT
  };
}
