import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import BeforeUpload from './before_upload';
import DuringUpload from './during_upload_container';
import Footer from '../main_tools/footer';

class Upload extends React.Component {
  constructor (props){
    super(props);
    this.state = this.props.photo;
    this.currentUser = this.props.currentUser;
  }
  
  render(){
    return (
      <React.Fragment>
        <nav className="photo-nav">
          <ul className="photo-nav-ul">
            <li><Link to='/'><h1 className="photo-logo">Share the Flare</h1></Link></li>
            <li><Link to={`/photos/${this.currentUser.display_name}`}><span className="photostream-photo">Your Photostream</span></Link></li>
          </ul>
          <div className="dUser">Demo User</div>
        </nav>
        <Switch>
          <Route exact path='/photos/upload' component={BeforeUpload} />
          <Route path='/photos/upload/new' component={DuringUpload} />
        </Switch>
        <Footer />
      </React.Fragment>
    ); 
  }
}

export default Upload;