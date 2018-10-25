import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import HomepageContainer from '../homepage/homepage_container';

const Splash = props => {

  const sessionLinks = () => (
    <React.Fragment>
      <nav className="splash-auth">
        <Link to='/'><h1 className="logo">Share The Flare</h1></Link>
        <button className="login" onClick= { () => props.openModal('login') }>Login</button>
        <button className="signup" onClick= { () => props.openModal('signup') }>Signup</button>
      </nav>
      <div className="launch-body">
        <div className="content">
          <h1 className="content-h1">Find your inspiration.</h1>
          <h2 className="content-h2">Join the Share the Flare community, home to tens of billions of photos and 2 million groups.</h2>
          <button className='signup-2' onClick={() => props.openModal('signup')}>Sign Up</button>
      
        </div>
        <div className="empty"></div>
        <ul className="footer">
          <li className="footer-a"><a href="https://github.com/jeanha124">Github</a></li>
          <li className="footer-b"><a href="https://www.linkedin.com/in/jeanha124/">LinkedIn</a></li>
          <li className="footer-c"><a href="https://www.jeanwooha.me">Porfolio</a></li>
          <li className="footer-a"></li>
        </ul>
      </div>
    </React.Fragment>
  );
  
  const mainNav = () => (
    <React.Fragment>
      <nav className="left-nav">
        <Link to='/'><h1 className="main-logo">Share The Flare</h1></Link>
        <Link to={`/photos/${props.currentUser.display_name}`}><h2 className="you">You</h2></Link>
        <Link to='/explore'><h2 className="explore">Explore</h2></Link>
        <input className="main-search" type="text" placeholder="Photos..." ></input>
        <Link to='/photos/upload'><i className="fas fa-cloud-upload-alt cloud"></i></Link>
        <Link to='/account'><img className="prof-img" alt={props.currentUser.display_name}/></Link>
        <button className="header-btn" onClick={props.logout}>Log Out</button>
      </nav>
    </React.Fragment>
  );
  
  return (
    props.currentUser ? mainNav() : sessionLinks()
    );
  };
  
  export default Splash;
  
  
  // <Switch>
  // <Route path='/' component={HomepageContainer} />
      // </Switch>
  /*<nav className="sub-nav">
  <h1 className="activity">All Activity</h1>
  </nav>*/
  
  //<input type="text" placeholder="Photos" className="search"/> 