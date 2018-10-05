import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import { login, receiveErrors, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';
import React from 'react';

const mapStateToProps = state => {
  return {
    formType: 'login',
    errors: state.errors.session,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: user => dispatch(login(user)).fail((errors) => dispatch(receiveErrors(errors.responseJSON))),
    clearModalErrors: () => dispatch(clearErrors()),
    otherForm: (
      <button onClick={() => dispatch(openModal('signup'))}>Signup</button>
    ),
    closeModal: () => dispatch(closeModal())  
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);