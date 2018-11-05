import React from 'react';
import { Link } from 'react-router-dom';

class PhotoShow extends React.Component {
  constructor(props){
    super(props);
    this.photo = this.props.photo;
    this.currentUser = this.props.currentUser;
  }
  componentDidMount(){
    this.props.receivePhoto(parseInt(this.props.match.params.photoId));
  }
  
  render(){
    return (
      <div>
        <div className="pic-container">
          <Link to={`/photos/${this.currentUser.display_name}`} className="back"><i className="fas fa-arrow-left"></i>Back to Photostream</Link>
          <img src={`${this.photo.photoUrl}`} />
        </div>
      </div>
    );
  }
}

export default PhotoShow;