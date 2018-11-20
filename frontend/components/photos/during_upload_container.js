import { connect } from 'react-redux';
import { createPhoto } from '../../actions/photo_actions';
import DuringUpload from './during_upload';

const msp = state => {
  const photo = {
    title: '',
    description: '',
    currentUserId: state.entities.users[state.session.id].id,
    photoUrl: null,
    photoFile: null,
  };
  const formType = 'Create Photo';
  return {
    photo,
    formType
  };
};

const mdp = dispatch => {
  return {
    action: photo => dispatch(createPhoto(photo))
  };
};

export default connect(msp, mdp)(DuringUpload);