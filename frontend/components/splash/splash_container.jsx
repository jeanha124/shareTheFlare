import { connect } from 'react-redux';
import Splash from './splash';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';


const msp = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id]
  };
};

const mdp = dispatch => {
  return {
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal)),
  };
};

export default withRouter(connect(msp, mdp)(Splash));