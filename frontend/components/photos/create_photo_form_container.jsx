import { connect } from 'react-redux';
import { createPhoto } from '../../actions/photo_actions';
import PhotoUploadForm from './photo_upload_form';

const msp = state => {
  debugger
  return {
    currentUser: state.entities.users[state.session.id]
  };
};

const mdp = dispatch => {
  return {
    action: photo => dispatch(createPhoto(photo))
  };
};

export default connect(msp, mdp)(PhotoUploadForm);