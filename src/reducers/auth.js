import { LOGIN, LOGIN_FAIL, LOGOUT } from '../constants/ActionTypes'
export default function auth(state = {}, action) {
  switch (action.type) {
  case LOGIN:
    return state;
  case LOGIN_FAIL:
    return state ;
  case LOGOUT:
    return state ;
  default:
    return state;
  }
}
