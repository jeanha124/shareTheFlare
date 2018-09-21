import React from 'react';
import { Link } from 'react-router-dom';

class PhotoNav extends React.Component {
  constructor(props) {
    super(props);
    this.currentUser = this.props.currentUser;
  }
  render(){
    return (
      <nav className="photo-nav">
        <ul className="photo-nav-ul">
          <Link to='/'><h1 className="photo-logo">Share the Flare</h1></Link>
          <Link to={`/photos/${this.currentUser.display_name}`}><li className="photostream-photo">Your Photostream</li></Link>
          <li className="dUser">Demo User</li>
        </ul>
      </nav>
    );
  }
}

export default PhotoNav;