import { connect } from 'react-redux';
import { createPhoto } from '../../actions/photo_actions';
import UploadIndexT from './upload_index_t';

const msp = state => {
  return {
    currentUser: state.entities.users[state.session.id]
  };
};

const mdp = dispatch => {
  return {
    action: photo => dispatch(createPhoto(photo))
  };
};

export default connect(msp, mdp)(UploadIndexT);