import React from 'react';
import GreetingContainer from './greetings/greeting_container';
import LoginFormContainer from './sessionForms/login_form_container';
import SignupFormContainer from './sessionForms/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Launch from './greetings/launch_description';

const App = () => {
    return (
      <div>
        
          <AuthRoute exact path="/" component={Launch} />
           <ProtectedRoute exact path='/' component={GreetingContainer} />
          <AuthRoute path="/login" component={LoginFormContainer} />
          <AuthRoute path="/signup" component={SignupFormContainer} />
      </div>
  
         
    );
};

export default App;
