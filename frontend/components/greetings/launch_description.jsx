import React from 'react';
import { Link } from 'react-router-dom';

class Launch extends React.Component {

  render(){
    return (
      <div className="launch-body">
        <header className="navi-header">
          <h1 className="logo">Share The Flare</h1>
          <input type="text" placeholder="Photos" className="search"/>
          <Link to={`/login`} className="login">Log In</Link>
          <Link to={`/signup`} className="signup">Sign Up</Link> 
        </header>
        <div className="content">
            <h1>Find your inspiration.</h1>
            <br />
            <h2>Join the Share the Flare community, home to tens of billions</h2> 
            <h2>of photos and 2 million groups.</h2>

            <Link to={`/signup`}>Sign Up</Link>
        </div>
      </div>
    );
  }
}

export default Launch;

 