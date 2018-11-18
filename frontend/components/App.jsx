import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './../modals/modal';
import { Switch, Route } from 'react-router-dom';
import Splash from './splash/splash_container';
// import HomepageContainer from './homepage/homepage_container';
import Upload from './photos/upload_container';
import Homepage from './homepage/homepage_container';
import Explore from './homepage/explore_container';
import PhotoIndex from './photos/photo_index_container';
import PhotoShow from './photos/photo_show_container';
import UserNavContainer from './users/user_nav_container';


import PhotoFormNav2 from './photos/photo_form_nav2';
import PhotoShowContainer from './photos/photo_show_container';

class App extends React.Component {
  render () {
    const path = window.location.hash;
    return (
      <div className="main-container">
        <Modal />
        <AuthRoute exact path='/' component={Splash} />
        <ProtectedRoute exact path='/' component={Homepage} />
        <Route exact path='/explore' component={Explore} />
        <Route path='/photos/upload' component={Upload} />
        <Route exact path='/photos/~/:display_name' component={PhotoIndex} />
        <Route exact path='/photos/~/:display_name/:photoId' component={PhotoShow} />
      </div>
    );
  }
}

export default App;

{/* <ProtectedRoute exact path='/photos/upload' component={Upload} /> */}

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