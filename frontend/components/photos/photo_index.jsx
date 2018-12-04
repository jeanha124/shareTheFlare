import React from 'react';
import PhotoIndexItem from './photo_index_item';
import Footer from '../main_tools/footer';
import MainNav from '../main_tools/main_nav_container';

class PhotoIndex extends React.Component {
  constructor(props){
    super(props);
    // this.state = {
    //avatar: null,
    //   avatarURL : this.props.currentUser.avatar
    // };
    // this.handleFile = this.handleFile.bind(this);
  }
  componentDidMount(){
    this.props.receiveAllPhotos();
  }
  // handleFile(e, field){
  //   const file = e.currentTarget.files[0];
  //   const fileReader = new FileReader();
  //   fileReader.onloadend = () => {
  //     this.setState({[field]: file, [field + "URL"]: fileReader.result }, () => {
  //       const formData = new FormData();
  //       formData.append('user[avatar]', this.state.avatar);
  //       this.props.updateUser(formData, this.props.currentUser.id);
  //     });
  //   };
  //   if (file) {
  //     fileReader.readAsDataURL(file);
  //   }
  // }
  render() {
    const photos = this.props.photos.map(photo => {
      if (photo.owner_id === this.props.currentUser.id){
        return <PhotoIndexItem key={photo.id} currentUser={this.props.currentUser} photo={photo} receivePhoto = {this.props.receivePhoto}/>;
      }
    });
    return (
      <React.Fragment>
        <MainNav />
        <div className="cover">
        </div>
                <div className="user-profile-photo">
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
          <ul className="photo-index">{photos}</ul>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default PhotoIndex;


/*<Link to={`/photos/${this.props.currentUser.display_name}/edit`}>Edit</Link>*/
                // <img className="avatar" src={this.state.avatarURL} alt="Select an Avatar" />
                // <input type="file" style={{display: "none"}} onChange={(e) => this.handleFile(e, "avatar")} />