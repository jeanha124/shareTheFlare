import { 
  RECEIVE_CURRENT_USER, 
  LOGOUT_CURRENT_USER 
} from './../actions/session_actions';

const _emptyUser = Object.freeze({ id: null });

const sessionReducer = (state = _emptyUser, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return { id: action.currentUser.id };
    case LOGOUT_CURRENT_USER:
      return _emptyUser;
    default:
      return state;
  }
};

export default sessionReducer;