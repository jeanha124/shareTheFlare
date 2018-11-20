import React from 'react';
import { Link } from 'react-router-dom';
import MainNav from '../main_tools/main_nav_container';
import Footer from '../main_tools/footer';
import EditPhoto from './edit_photo_container';

class PhotoShow extends React.Component {
  constructor(props){
    super(props);
    this.currentUser = this.props.currentUser;
  }
  componentDidMount(){
    this.props.receivePhoto(parseInt(this.props.match.params.photoId));
  }
  render(){
      return (
        <React.Fragment>
        <MainNav />
        <div className="pic-container">
          <Link to={`/photos/~/${this.currentUser.display_name}`} className="back"><i className="fas fa-arrow-left"></i> Back to Photostream</Link>
          <img className='superfun-image'src={`${this.props.photo.photoUrl}`} />
          <i class="fas fa-edit" onClick={<EditPhoto />}></i>
        </div>
        <content>
          <div>
            <img className="avatar" src="https://s3.amazonaws.com/share-the-flare-dev/shareTheFlare.png"/>
            <span>{this.props.photo.title}</span>
            <span>{this.props.photo.description}</span>
          </div>
        </content>
        <Footer />
      </React.Fragment>
    );
  }
}

export default PhotoShow;