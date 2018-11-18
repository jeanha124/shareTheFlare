import React from 'react';
import { Link } from 'react-router-dom';

const mainNav = (props) => (
  <React.Fragment>
      <nav className="left-nav">
        <div className="left">
          <Link to='/'><h1 className="main-logo">Share The Flare</h1></Link>
          <Link to={`/photos/~/${props.currentUser.display_name}`}><h2 className="you">You</h2></Link>
          <Link to='/explore'><h2 className="explore">Explore</h2></Link>
        </div>
        <div className="right">
          <input className="main-search" type="text" placeholder="Photos..." ></input>
          <Link to='/photos/upload'><i className="fas fa-cloud-upload-alt cloud"></i></Link>
          <Link to='/account'><img className="prof-img" alt={props.currentUser.display_name}/></Link>
          <button className="header-btn" onClick={props.logout}>Log Out</button>
        </div>
      </nav>
  </React.Fragment>
);

export default mainNav;