import React from 'react';
import { Link } from 'react-router-dom';
import GreetingContainer from './greeting_container';
import Fade from './../fade';
import { openModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';


    class Launch extends React.Component {
      constructor(props){
        super(props);
      }
      render(){
        return (
          <div className="launch-body">
              
            <div className="content">
            <Fade />
              <h1 className="content-h1">Find your inspiration.</h1>
              <h2 className="content-h2">Join the Share the Flare community, home to tens of billions of photos and 2 million groups.</h2>
              <button className='signup-2' onClick={() => this.props.openModal('signup')}>Sign Up</button>
          
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

const mdp = dispatch => {
  return {
    openModal: (str) => dispatch(openModal(str))
  };
};
export default connect(null, mdp)(Launch);
