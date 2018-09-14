import { connect } from 'react-redux';
import Greeting from './greeting';
import { logout, loginDemo } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';


const mapStateToProps = state => {
  return {
    currentUser: state.entities.users[state.session.id]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal)),
    loginDemo: () => dispatch(loginDemo()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);