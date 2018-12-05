import { connect } from 'react-redux';
import PhotoIndex from './photo_index';
import { receiveAllPhotos } from '../../actions/photo_actions';

const msp = state => {
  return {
    photos: Object.values(state.entities.photos),
    currentUser: state.entities.users[state.session.id]
  };
};

const mdp = dispatch => {
  return {
    receiveAllPhotos: () => dispatch(receiveAllPhotos()),
  };
};

export default connect(msp, mdp)(PhotoIndex);