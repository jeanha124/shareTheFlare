import * as SessionApiUtil from './../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  };
};

export const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER,
  };
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  };
};

export const login = (user) => {
  return dispatch => {
    return SessionApiUtil.login(user).then(user => {
      dispatch(receiveCurrentUser(user))
    });
  };
};

export const signup = (user) => {
  return dispatch => {
    return SessionApiUtil.signup(user).then(user => {
      dispatch(receiveCurrentUser(user))
    });
  };
};

export const logout = () => {
  return dispatch => {
    return SessionApiUtil.logout().then(user => {
      dispatch(logoutCurrentUser())
    });
  };
};

