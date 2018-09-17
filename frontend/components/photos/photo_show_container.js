import { connect } from 'react-redux';
import PhotoShow from './photo_show';
import { receivePhoto } from '../../actions/photo_actions';

const msp = (state, ownProps) => {
  return {
    photo: state.entities.photos[ownProps.match.params.photoId]
  };
};

const mdp = dispatch => {
  return {
    receivePhoto: id => dispatch(receivePhoto(id))
  };
};

export default connect(msp, mdp)(PhotoShow);