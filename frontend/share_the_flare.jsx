import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import * as ApiUtil from './actions/session_actions';


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  const store = configureStore();
  
  window.login = ApiUtil.login;
  window.signup = ApiUtil.signup;
  window.logout = ApiUtil.logout;
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  ReactDOM.render(<Root store={ store }/>, root);
});