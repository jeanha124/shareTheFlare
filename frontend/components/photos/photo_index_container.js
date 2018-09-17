import { connect } from 'react-redux';
import PhotoIndex from './photo_index';
import { receiveAllPhotos , deletePhoto } from '../../actions/photo_actions';

const msp = state => {
  return {
    photos: Object.values(state.entities.photos)
  };
};

const mdp = dispatch => {
  return {
    receiveAllPhotos: () => dispatch(receiveAllPhotos()),
    deletePhoto: id => dispatch(deletePhoto(id))
  };
};

export default connect(msp, mdp)(PhotoIndex);