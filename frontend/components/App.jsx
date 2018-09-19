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
import UserProfileContainer from './users/user_profile_container';
import PhotoIndexContainer from './photos/photo_index_container';

class App extends React.Component {
  render () {
    return (
      <div className="main-container">
        <Modal />
            <AuthRoute exact path='/' component={GreetingContainer} />
            <AuthRoute exact path='/' component={Launch} />
          <Switch>
            <ProtectedRoute path='/photos/upload' component={PhotoNavContainer} />
            <ProtectedRoute path='/' component={GreetingContainer} />
          </Switch>
          <Switch>
            <ProtectedRoute path='/photos/upload' component={PhotoFormNavContainer} />
            <ProtectedRoute path='/explore' component={ExploreNavContainer} />
            <ProtectedRoute path='/photos/:display_name' component={UserProfileContainer} />
            <ProtectedRoute path="/" component={LoggedInHomepageNavContainer} />
          </Switch>
          <Switch>
          <ProtectedRoute path='/photos/upload' component={CreatePhotoFormContainer} />
          <ProtectedRoute path='/photos/:display_name' component={PhotoIndexContainer} />
          </Switch>
      </div>
    );
  }
};

export default App;
