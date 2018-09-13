import React from 'react';
import GreetingContainer from './greetings/greeting_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Launch from './greetings/launch_description';
import Modal from './../modals/modal';

const App = () => {
    return (
      <div className="main-container">
        <Modal />
          <AuthRoute exact path="/" component={Launch} />
           <ProtectedRoute exact path='/' component={GreetingContainer} />
      </div>
  
         
    );
};

export default App;
