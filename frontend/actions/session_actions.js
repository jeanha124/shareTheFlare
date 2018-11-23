import * as sessionApiUtil from './../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

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

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};

export const login = (user) => {
  return dispatch => {
    return sessionApiUtil.login(user).then(user => {
       dispatch(receiveCurrentUser(user))
    });
  };
};

export const signup = (user) => {
  return dispatch => {
    return sessionApiUtil.signup(user).then(user => {
       dispatch(receiveCurrentUser(user))
    });
  };
};

export const logout = () => {
  return dispatch => {
    return sessionApiUtil.logout().then(user => {
       dispatch(logoutCurrentUser())
    });
  };
};

export const updateUser = (formData, id) => {
  return dispatch => {
    return sessionApiUtil.updateUser(formData, id).then(user => {
      return dispatch(receiveCurrentUser(user))
    });
  };
};