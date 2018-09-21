import { RECEIVE_CURRENT_USER } from './../actions/session_actions';
import { RECEIVE_ALL_USERS } from './../actions/user_actions';
import { RECEIVE_ALL_PHOTOS} from './../actions/photo_actions';
import merge from 'lodash/merge';

const usersReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, {[action.currentUser.id]: action.currentUser});
    case RECEIVE_ALL_USERS: 
      return action.users;
    default:
      return state;
  }
};

export default usersReducer;