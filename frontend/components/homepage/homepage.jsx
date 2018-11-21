import React from 'react';
import PhotoIndexItem from '../photos/photo_index_item';
import Footer from '../main_tools/footer';
import MainNav from '../main_tools/main_nav_container';

class Homepage extends React.Component {
  constructor(props){
    super(props);
    this.currentUser = this.props.currentUser;
  }
  componentDidMount(){
    this.props.receiveAllPhotos();
  }
  render (){
    const photos = this.props.photos.map(photo => {
      return <PhotoIndexItem key={photo.id} currentUser={this.currentUser} photo={photo} receivePhoto={this.props.receivePhoto} />;
    });
   return (
    <React.Fragment>
      <MainNav />
      <nav className="sub-nav">
          <h1 className="activity">All Activity</h1>
      </nav>
      <div className="photo-div">
        <ul className="photo-index">{photos}</ul>
      </div>
      <Footer />
    </React.Fragment>
   );
  }
}

export default Homepage;
