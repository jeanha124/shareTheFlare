import { connect } from 'react-redux';
import Explore from './explore';
import { receiveAllPhotos } from '../../actions/photo_actions';

const msp = state => {
  return {
    currentUser: state.entities.users[state.session.id]
  };
};

const mdp = dispatch => {
  return {
    receiveAllPhotos: () => dispatch(receiveAllPhotos())
  };
};

export default connect(msp, mdp)(Explore);
