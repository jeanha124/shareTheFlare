import React from 'react';
import { Link } from 'react-router-dom';

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
            <Link to='/'><h1 className="photo-logo">Share the Flare</h1></Link>
            <Link to={`/photos/${this.currentUser.display_name}`}><li className="photostream-photo">Your Photostream</li></Link>
            <li className="dUser">Demo User</li>
          </ul>
        </nav>
        <div className="content-content">
          <div className="add-content">
            <div className="add-content-content">
              <button id="add1" id="content-upload">
                <Link to='/photos/upload/new'>
                  Choose photos and videos to upload
                </Link>
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    ); 
  }
}

export default Upload;