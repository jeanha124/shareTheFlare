import React from 'react';
import ReactDOM from 'react-dom';
import { login } from './util/session_api_util';
import configureStore from './store/store';

window.login = login;

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  const store = configureStore();

  window.getState = store.getState;
  window.dispatch = store.dispatch;

  ReactDOM.render(<h1>Welcome to Share The Flare</h1>, root);
});