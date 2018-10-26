import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SplashContainer from './splash/splash_container';
import Modal from './../modals/modal';
// import HomepageContainer from './homepage/homepage_container';
import Upload from './photos/upload_container';
import UploadIndexContainer from './photos/upload_index_container';
import UserNavContainer from './users/user_nav_container';
import PhotoIndexContainer from './photos/photo_index_container';
import CreatePhotoFormContainer from './photos/create_photo_form_container';
import PhotoFormNav2 from './photos/photo_form_nav2';
import PhotoFormNav from './photos/photo_form_nav';
import PhotoShowContainer from './photos/photo_show_container';

class App extends React.Component {
  render () {
    return (
      <div className="main-container">
        <Modal />

        <AuthRoute path='/' component={SplashContainer} />
        <ProtectedRoute path='/photos/upload' component={Upload} />
        <ProtectedRoute exact path='/' component={SplashContainer} />
      </div>
    );
  }
}

export default App;


{/* <Modal />
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
    <ProtectedRoute exact path='/photos/:display_name' component={UserNavContainer} />
    <ProtectedRoute exact path="/" component={LoggedInHomepageNavContainer} />
  </Switch>
  <Switch>
    <ProtectedRoute path='/photos/upload/new' component={CreatePhotoFormContainer} />
    <ProtectedRoute path='/photos/upload' component={UploadIndexContainer} />
    <ProtectedRoute path='/photos/:display_name/:id' component={PhotoShowContainer} />
    <ProtectedRoute path='/photos/:display_name' component={PhotoIndexContainer} />

    <ProtectedRoute path='/' component={ActivityPhotosContainer} />
  </Switch> */}