import React from 'react';

const Greeting = props => {

  const sessionLinks = () => (
    <nav className="login-signup">
      <button className="login"
      onClick= {
        () => props.openModal('login')
      }>Login</button>
      <button className="signup"
       onClick= {
        () => props.openModal('signup')
      }>Signup</button>
    </nav>
  );

  const personalGreeting = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Hi, {props.currentUser.display_name}!</h2>
      <button className="header-button" onClick={props.logout}>Log Out</button>
    </hgroup>
  );

  return (
    props.currentUser ? personalGreeting() : sessionLinks()
  );
};

export default Greeting;