import React from 'react';
import { Link } from 'react-router-dom';
import MainNav from '../main_tools/main_nav_container';
import Footer from '../main_tools/footer';

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
      <React.Fragment>
        <MainNav />
        <div className="pic-container">
          <Link to={`/photos/~/${this.currentUser.display_name}`} className="back"><i className="fas fa-arrow-left"></i>Back to Photostream</Link>
          <img className='superfun-image'src={`${this.photo.photoUrl}`} />
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default PhotoShow;