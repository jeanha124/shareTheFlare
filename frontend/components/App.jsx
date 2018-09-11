import React from 'react';
import GreetingContainer from './greetings/greeting_container';
import LoginFormContainer from './sessionForms/login_form_container';
import SignupFormContainer from './sessionForms/signup_form_container';
import { Route } from 'react-router-dom';

const App = () => (
  <div>
    <header>
      <h1>Share The Flare</h1>
      <GreetingContainer />
    </header>

    <Route path="/login" component={LoginFormContainer} />
    <Route path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;