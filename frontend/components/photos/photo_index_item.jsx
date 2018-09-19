import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class PhotoIndexItem extends React.Component {
  render(){
    const photo = this.props.photo;

    return (
      <div className="curr-photo">
        <Link to={`/photos/${photo.owner.display_name}/${photo.id}`}><img src={photo.file} /></Link>
        <div className="photo-info">
          <h1>{photo.title}</h1>
          <p>{photo.description}</p>
          <Link to={`/photos/${photo.owner.display_name}`}>{photo.owner.display_name}</Link>
        </div>
      </div>
    );
  }
};

export default withRouter(PhotoIndexItem);