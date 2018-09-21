import React from 'react';

class UserProfile extends React.Component {
  constructor(props){
    super(props);
  }
  render (){
    return (
      <div className="cover">
        <div className="user">
          <img className="avatar" />
          <h2 className="fullname">{`${this.props.currentUser.fname} ${this.props.currentUser.lname}`}</h2>
          <h3 className="disp">{`${this.props.currentUser.display_name}`}</h3>

          <h3 className="photo-length">{`${this.props.currentUser.photos.owner_id.length} Photos`}</h3>
        </div>
      </div>
    );
  }
}

export default UserProfile;