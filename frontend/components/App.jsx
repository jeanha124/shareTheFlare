import React from 'react';
import GreetingContainer from './greetings/greeting_container';
import LoginFormContainer from './sessionForms/login_form_container';
import SignupFormContainer from './sessionForms/signup_form_container';
import { AuthRoute } from '../util/route_util';
import Launch from './greetings/launch_description';

const App = () => (
  <div>
    <header>
      <h1>Share The Flare</h1>
      <input type="text"
      placeholder="Photos"
      />
      <GreetingContainer />
      <Launch />
    </header>

    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;