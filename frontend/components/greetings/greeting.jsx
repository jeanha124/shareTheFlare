import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {

  render(){
    if (this.props.currentUser){
        return (
          <div>
            <h1>Welcome {this.props.currentUser.display_name}!!</h1>
            <button onClick={this.props.logout}>Log Out</button>
          </div>
        );
    }
  }
}

export default Greeting;