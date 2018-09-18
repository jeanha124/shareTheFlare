import React from 'react';

class LoggedInHomePageNav extends React.Component {
  render(){
    if (this.props.navType === 'activity') {
      return (
        <nav className="sub-nav">
          <h1 className="activity">All Activity</h1>
        </nav>
      );
    } else {
      return (
        <nav className="sub-nav">
          <h1 className="explore1">Explore</h1>
        </nav>
      );
    }
  }
};

export default LoggedInHomePageNav;