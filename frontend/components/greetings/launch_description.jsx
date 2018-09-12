import React from 'react';
import { Link } from 'react-router-dom';

class Launch extends React.Component {

  render(){
    return (
      <div className="launch-body">
        <header>
          <nav>
          <h1>Share The Flare</h1>
          <input type="text" placeholder="Photos"/>
            <div id="log-links">
              <Link to={`/login`} className="btn">Log In</Link>
              <Link to={`/signup`} className="btn" id="sign">Sign Up</Link>
            </div>
          </nav>
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

 