import { connect } from 'react-redux';
import LoggedInHomepageNav from './logged_in_homepage_nav';
import { logout } from '../../actions/session_actions';

const msp = state => {
  return {
    currentUser: state.entities.users[state.session.id],
    navType: 'activity'
  };
};

const mdp = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};


export default connect(msp, mdp)(LoggedInHomepageNav);