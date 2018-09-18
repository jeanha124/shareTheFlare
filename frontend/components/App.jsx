import React from 'react';
import GreetingContainer from './greetings/greeting_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import Launch from './greetings/launch_description';
import Modal from './../modals/modal';
import PhotoForm from './photos/photo_form';
import PhotoNav from './photos/photo_nav';
import PhotoFormNav from './photos/photo_form_nav';

const App = () => {
    return (
      <div className="main-container">
        <Modal />
          <AuthRoute exact path="/" component={Launch} />
           <ProtectedRoute exact path='/' component={GreetingContainer} />
           <ProtectedRoute path='/photos/upload' component={PhotoNav} />
          <ProtectedRoute path='/photos/upload' component={PhotoFormNav} />
           <ProtectedRoute path='/photos/upload' component={PhotoForm} />
      </div>
  
         
    );
};

export default App;
