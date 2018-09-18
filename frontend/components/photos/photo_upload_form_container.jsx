import { connect } from 'react-redux';
import PhotoUploadForm from './photo_upload_form';

const msp = state => {
  return {
    currentUser: state.entities.users[state.session.id]
  };
};

const mdp = dispatch => {

};

export default connect(msp, mdp)(PhotoUploadForm);