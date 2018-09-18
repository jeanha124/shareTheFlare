import React from 'react';
import GreetingContainer from './greetings/greeting_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import Launch from './greetings/launch_description';
import Modal from './../modals/modal';
import PhotoFormNavContainer from './photos/photo_form_nav_container';
import PhotoNavContainer from './photos/photo_nav_container';
import CreatePhotoFormContainer from './photos/create_photo_form_container';
import LoggedInHomepageNavContainer from './homepage/logged_in_homepage_nav_container';
import ExploreNavContainer from './homepage/explore_nav_container';

const App = () => {
    return (
      <div className="main-container">
        <Modal />
            <AuthRoute exact path="/" component={Launch} />
          <Switch>
            <ProtectedRoute path='/photos/upload' component={PhotoNavContainer} />
            <ProtectedRoute path='/' component={GreetingContainer} />
          </Switch>
          <Switch>
            <ProtectedRoute path='/photos/upload' component={PhotoFormNavContainer} />
            <ProtectedRoute path='/explore' component={ExploreNavContainer} />
            <ProtectedRoute path="/" component={LoggedInHomepageNavContainer} />
          </Switch>
          <ProtectedRoute path='/photos/upload' component={CreatePhotoFormContainer} />
      </div>
  
         
    );
};

export default App;
