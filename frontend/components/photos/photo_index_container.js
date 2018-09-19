import { connect } from 'react-redux';
import PhotoIndex from './photo_index';
import { fetchAllPhotos, fetchPhoto , deletePhoto } from '../../actions/photo_actions';

const msp = state => {
  return {
    photos: Object.values(state.entities.photos)
  };
};

const mdp = dispatch => {
  return {
    fetchAllPhotos: () => dispatch(fetchAllPhotos()),
    fetchPhoto: (id) => dispatch(fetchPhoto(id)),
    deletePhoto: (id) => dispatch(deletePhoto(id))
  };
};

export default connect(msp, mdp)(PhotoIndex);