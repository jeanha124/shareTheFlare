import { connect } from 'react-redux';
import PhotoShow from './photo_show';
import { receivePhoto, updatePhoto, deletePhoto } from '../../actions/photo_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const msp = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    photo: state.entities.photos[ownProps.match.params.photoId]
  };
};

const mdp = dispatch => {
  return {
    receivePhoto: id => dispatch(receivePhoto(id)),
    updatePhoto: photo => dispatch(updatePhoto(photo)),
    deletePhoto: id => dispatch(deletePhoto(id)), 
    openModal: () => dispatch(openModal('photo')),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(msp, mdp)(PhotoShow);