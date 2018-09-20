import React from 'react';
import { Link } from 'react-router-dom';

class PhotoIndexItem extends React.Component {
  constructor(props){
    super(props);
    this.currentUser = this.props.currentUser;
    this.photo = this.props.photo;
  }
  render(){
    return (
      <div className="curr-photo">
        <Link to={`/photos/${this.currentUser.display_name}/${this.photo.id}`}><img src={this.photo.photoUrl} /></Link>
        <div className="photo-info">
          <h1>{this.photo.title}</h1>
          <p>{this.photo.description}</p>
          <Link to={`/photos/${this.currentUser.display_name}`}>{this.currentUser.display_name}</Link>
        </div>
      </div>
    );
  }
}

export default PhotoIndexItem;