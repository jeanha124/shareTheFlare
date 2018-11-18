import { connect } from 'react-redux';
import { createPhoto } from '../../actions/photo_actions';
import DuringUpload from './during_upload';

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

export default connect(msp, mdp)(DuringUpload);