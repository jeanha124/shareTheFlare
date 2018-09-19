import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = props => {

  const sessionLinks = () => (
    <nav className="login-signup">
      <Link to='/'><h1 className="logo">Share The Flare</h1></Link>
      <input type="text" placeholder="Photos" className="search"/> 
      <button className="login" onClick= { () => props.openModal('login') }>Login</button>
      <button className="signup" onClick= { () => props.openModal('signup') }>Signup</button>
    </nav>
  );

  const mainNav = () => (
    <header className="main-nav">
      <nav className="left-nav">
        <Link to='/'><h1 className="main-logo">Share The Flare</h1></Link>
        <Link to={`/photos/${props.currentUser.display_name}`}><h2 className="you">You</h2></Link>
        <Link to='/explore'><h2 className="explore">Explore</h2></Link>
        <input className="main-search" type="text" placeholder="Photos..." ></input>
        <Link to='/photos/upload'><i className="fas fa-cloud-upload-alt cloud"></i></Link>
        <Link to='/account'><img className="prof-img" alt={props.currentUser.display_name}/></Link>
        <button className="header-btn" onClick={props.logout}>Log Out</button>
      </nav>
      <ul className="you-drop">
        <li>About</li>
        <li>Photostream</li>
        <li>Albums</li>
      </ul>
    </header>
  );

  return (
    props.currentUser ? mainNav() : sessionLinks()
  );
};

export default Greeting;


 /*<nav className="sub-nav">
        <h1 className="activity">All Activity</h1>
      </nav>*/
