import { connect } from 'react-redux';
import PhotoShow from './photo_show';
import { fetchPhoto, updatePhoto, deletePhoto } from '../../actions/photo_actions';

const msp = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    photo: state.entities.photos[ownProps.match.params.photoId]
  };
};

const mdp = dispatch => {
  return {
    receivePhoto: id => dispatch(fetchPhoto(id)),
    updatePhoto: photo => dispatch(updatePhoto(photo)),
    deletePhoto: id => dispatch(deletePhoto(id)) 
  };
};

export default connect(msp, mdp)(PhotoShow);