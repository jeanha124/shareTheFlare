import React from 'react';
import PhotoIndexItem from './photo_index_item';
import { Link } from 'react-router-dom';

class PhotoIndex extends React.Component {
  render() {
    const photos = this.props.photos.map(photo => {
      return <PhotoIndexItem key={photo.id} photo={photo} />
    });
    return (
      <div>
        <ul>{photos}</ul>
        <Link to={'/photos/upload'}>New Photo</Link>
      </div>
    );
  }
}

export default PhotoIndex;