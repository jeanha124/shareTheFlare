import modalReducer from './modal_reducer';
import { combineReducers } from 'redux';

export default combineReducers({
  modal: modalReducer
});