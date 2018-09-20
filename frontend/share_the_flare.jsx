import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import * as ApiUtil from './actions/session_actions';
import { receiveAllUsers } from './actions/user_actions';



document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  let store;
  
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  
  window.store = store;
  window.login = ApiUtil.login;
  window.signup = ApiUtil.signup;
  window.logout = ApiUtil.logout;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.receiveAllUsers = receiveAllUsers;
  
  


  ReactDOM.render(<Root store={ store }/>, root);
});