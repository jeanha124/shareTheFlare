import React from 'react';
import PhotoIndexItem from './photo_index_item';
import { Link } from 'react-router-dom';

class PhotoIndex extends React.Component {
  render() {
    debugger
    const photos = this.props.photos.map(photo => {
      return <PhotoIndexItem key={photo.id} photo={photo} receivePhoto = {this.props.receivePhoto}/>
    });
    return (
      <div className="photo-div">
        <ul>{photos}</ul>
        <Link to={`/photos/${this.props.currentUser.display_name}/edit`}>Edit</Link>
      </div>
    );
  }
}

export default PhotoIndex;