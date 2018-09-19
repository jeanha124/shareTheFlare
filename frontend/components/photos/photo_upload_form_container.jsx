import { connect } from 'react-redux';
import PhotoUploadForm from './photo_upload_form';
import { logout } from '../../actions/session_actions';

const msp = state => {
  return {
    photos: [],
    currentUser: state.entities.users[state.session.id],
  };
};

const mdp = dispatch => {
  return {
    logout: () => dispatch(logout())

  };
};

export default connect(msp, mdp)(PhotoUploadForm);