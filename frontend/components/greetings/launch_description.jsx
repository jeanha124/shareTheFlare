import React from 'react';
import { Link } from 'react-router-dom';

class Launch extends React.Component {

  render(){
    return (
      <div>
        <h1>Find your inspiration.</h1>
        <br />
        <h2>Join the Share the Flare community, home to tens of billions</h2> 
        <h2>of photos and 2 million groups.</h2>

        <Link to={`/signup`}>Sign Up</Link>
      </div>
    );
  }
}

export default Launch;