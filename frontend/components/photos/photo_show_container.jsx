import { connect } from 'react-redux';
import PhotoShow from './photo_show';
import { receivePhoto, updatePhoto, deletePhoto } from '../../actions/photo_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const msp = (state, ownProps) => {
  debugger
  const photoId = parseInt(ownProps.match.params.photoId) || 0;
  return {
    currentUser: state.entities.users[state.session.id],
    photo: state.entities.photos[photoId] || {},
  };
};

const mdp = dispatch => {
  return {
    receivePhoto: id => dispatch(receivePhoto(id)),
    updatePhoto: photo => dispatch(updatePhoto(photo)),
    deletePhoto: id => dispatch(deletePhoto(id)), 
  };
};

export default connect(msp, mdp)(PhotoShow);