import * as sessionApiUtil from './../util/session_api_util';

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

export const loginDemo = () => {
  const demoUser = {email: 'demo@email.com', password: 'hunter2'};
  return login(demoUser);
};