import React from 'react';
import ReactDOM from 'react-dom';
import { login } from './util/session_api_util';

window.login = login;

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to Share The Flare</h1>, root);
});