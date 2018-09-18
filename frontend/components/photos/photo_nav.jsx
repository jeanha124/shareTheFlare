import React from 'react';
import { Link } from 'react-router-dom';

class PhotoNav extends React.Component {
  render(){
    return (
      <nav className="photo-nav">
        <ul className="photo-nav-ul">
          <Link to='/'><h1 className="photo-logo">Share the Flare</h1></Link>
          <li className="photostream-photo">Your Photostream</li>
          <li className="dUser">Demo User</li>
        </ul>
      </nav>
    );
  }
};

export default PhotoNav;