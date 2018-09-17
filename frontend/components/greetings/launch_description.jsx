import React from 'react';
import { Link } from 'react-router-dom';
import GreetingContainer from './greeting_container';
import Fade from './../fade';




// const SignUp = props => {
//   const sign = () => {
//     <div>
//       <button onClick={() => props.openModal('signup')}>Sign Up</button>
//     </div>
//   };
//   return (sign);
// };

class Launch extends React.Component {
  render(){
    return (
      <div className="launch-body">
        <header className="navi-header">
          <h1 className="logo">Share The Flare</h1>
          <input type="text" placeholder="Photos" className="search"/> 
          <GreetingContainer />
        </header>
        <div className="content">
            <h1 className="content-h1">Find your inspiration.</h1>
            <h2 className="content-h2">Join the Share the Flare community, home to tens of billions of photos and 2 million groups.</h2>
        </div>
        <div className="empty"></div>
        <ul className="footer">
          <li className="footer-p"></li>
          <li className="footer-a"></li>
          <li className="footer-a"></li>
          <li className="footer-a"></li>
        </ul>
      </div>
    );
  }
}

export default Launch;
/*<button  className="signup-2" onClick={(e) => handleSubmit(e)}>Sign Up</button>*/

 