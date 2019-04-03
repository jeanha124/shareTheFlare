import { connect } from 'react-redux';
import SessionForm from './session_form';
import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';
import { signup, receiveErrors, clearErrors } from '../../actions/session_actions';

const mapStateToProps = state => {
  return {
    formType: 'signup',
    errors: state.errors.session,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: user => dispatch(signup(user)).fail((errors) => dispatch(receiveErrors(errors.responseJSON))),
    clearModalErrors: () => dispatch(clearErrors()),
    otherForm: (
      <button className="creds" onClick={() => dispatch(openModal('login'))}>Login</button>
    ),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);

