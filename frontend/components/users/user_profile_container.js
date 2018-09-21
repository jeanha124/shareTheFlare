import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { receivePhoto } from '../../actions/photo_actions';

const msp = state => {
  return {
    currentUser: state.entities.users[state.session.id],
    photos: Object.values(state.photos)
  };
};

const mdp = dispatch => {
  return {
    receivePhoto: (id) => dispatch(receivePhoto(id))
  };
};

export default connect(msp, mdp)(UserProfile);