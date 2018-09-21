import React from 'react';
import PhotoIndexItem from '../photos/photo_index_item';

class ActivityPhotos extends React.Component {
  constructor(props){
    super(props);
    this.currentUser = this.props.currentUser;
  }
  componentDidMount(){
    this.props.receiveAllPhotos();
  }
  render(){
    
    const photos = this.props.photos.map(photo => {
        return <PhotoIndexItem key={photo.id} currentUser={this.currentUser} photo={photo} receivePhoto = {this.props.receivePhoto}/>;
    });
    return (
      <div className="photo-div">
        <ul>{photos}</ul>
      </div>
    );
  }
}

export default ActivityPhotos;