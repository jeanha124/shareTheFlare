import React from 'react';
import PhotoIndexItem from './photo_index_item';

class PhotoIndex extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.receiveAllPhotos();
  }
  render() {
    const photos = this.props.photos.map(photo => {
      if (photo.owner_id === this.props.currentUser.id){
        return <PhotoIndexItem key={photo.id} currentUser={this.props.currentUser} photo={photo} receivePhoto = {this.props.receivePhoto}/>;
      }
    });
    return (
      <React.Fragment>
        <div className="cover">
          <img className="avatar" src="https://s3.amazonaws.com/share-the-flare-dev/shareTheFlare.png" />
            <h1 className="fullName">{`${this.props.currentUser.fname} ${this.props.currentUser.lname}`}</h1>
            <h3 className="displayname">{`${this.props.currentUser.display_name}`}</h3>
        </div>
        <ul className="profile-nav">
            <li id="about">About</li>
            <li id="photostream">Photostream</li>
            <li id="albums">Albums</li>
            <li id="faves">Faves</li>
        </ul>
        <div className="photo-div">
          <ul>{photos}</ul>
        </div>
      </React.Fragment>
    );
  }
}

export default PhotoIndex;


/*<Link to={`/photos/${this.props.currentUser.display_name}/edit`}>Edit</Link>*/