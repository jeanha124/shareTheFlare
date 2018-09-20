import React from 'react';

class LoggedInHomePageNav extends React.Component {
  render(){
    if (this.props.navType === 'activity') {
      return (
        <nav className="sub-nav">
          <h1 className="activity">All Activity</h1>
        </nav>
      );
    } else if (this.props.navType === 'explore') {
      return (
        <nav className="sub-nav">
          <h1 className="explore1">Explore</h1>
        </nav>
      );
    } else if (this.props.navType === 'you'){
      return (
        <ul className="profile-nav">
            <li id="about">About</li>
            <li id="photostream">Photostream</li>
            <li id="albums">Albums</li>
            <li id="faves">Faves</li>
        </ul>
      );
    }
  }
};

export default LoggedInHomePageNav;