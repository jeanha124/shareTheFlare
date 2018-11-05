import React from 'react';
import { Link, Route, Switch, withRouter } from 'react-router-dom';
import Homepage from '../homepage/homepage_container';
import Footer from '../main_tools/footer';
import MainNav from '../main_tools/main_nav_container';
import Explore from '../homepage/explore_container';
import PhotoIndex from '../photos/photo_index_container';
import PhotoShow from '../photos/photo_show_container';

class Splash extends React.Component {
  constructor (props){
    super(props);
  }
  render (){
    const sessionLinks = () => (
    <React.Fragment>
      <nav className="splash-auth">
        <Link to='/'><h1 className="logo">Share The Flare</h1></Link>
        <button className="login" onClick= { () => this.props.openModal('login') }>Login</button>
        <button className="signup" onClick= { () => this.props.openModal('signup') }>Signup</button>
      </nav>
      <div className="launch-body">
        <div className="content">
          <h1 className="content-h1">Find your inspiration.</h1>
          <h2 className="content-h2">Join the Share the Flare community, home to tens of billions of photos and 2 million groups.</h2>
          <button className='signup-2' onClick={() => this.props.openModal('signup')}>Sign Up</button>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
  const mainNav = () => (
    <React.Fragment>
      <MainNav />
      <Route exact path='/explore' component={Explore} />
      <Route exact path='/photos/:display_name' component={PhotoIndex} />
      <Route exact path='/photos/:display_name/:photoId' component={PhotoShow} />
      <Route exact path='/' component={Homepage} />
      <Footer />
    </React.Fragment>
  );

  return (
    this.props.currentUser ? mainNav() : sessionLinks()
    );
  }
}


export default Splash;
  
 
  
  // <Switch>
  // <Route path='/' component={HomepageContainer} />
      // </Switch>
  /*<nav className="sub-nav">
  <h1 className="activity">All Activity</h1>
  </nav>*/
  
  //<input type="text" placeholder="Photos" className="search"/> 