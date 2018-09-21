import React from 'react';
import GreetingContainer from './greetings/greeting_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import Launch from './greetings/launch_description';
import Modal from './../modals/modal';
import PhotoNavContainer from './photos/photo_nav_container';
import UploadIndexContainer from './photos/upload_index_container';
import LoggedInHomepageNavContainer from './homepage/logged_in_homepage_nav_container';
import ExploreNavContainer from './homepage/explore_nav_container';
import UserNavContainer from './users/user_nav_container';
import PhotoIndexContainer from './photos/photo_index_container';
import CreatePhotoFormContainer from './photos/create_photo_form_container';
import PhotoFormNav2 from './photos/photo_form_nav2';
import PhotoFormNav from './photos/photo_form_nav';
import ActivityPhotosContainer from './homepage/activity_photos_container';

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
            <ProtectedRoute path='/photos/upload/new' component={PhotoFormNav2} />
            <ProtectedRoute path='/photos/upload' component={PhotoFormNav} />
            <ProtectedRoute path='/explore' component={ExploreNavContainer} />
            <ProtectedRoute path='/photos/:display_name' component={UserNavContainer} />
            <ProtectedRoute path="/" component={LoggedInHomepageNavContainer} />
          </Switch>
          <Switch>
            <ProtectedRoute path='/photos/upload/new' component={CreatePhotoFormContainer} />
            <ProtectedRoute path='/photos/upload' component={UploadIndexContainer} />
            <ProtectedRoute path='/photos/:display_name' component={PhotoIndexContainer} />
            <ProtectedRoute path='/' component={ActivityPhotosContainer} />
          </Switch>
      </div>
    );
  }
}

export default App;

