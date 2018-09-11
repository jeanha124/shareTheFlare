import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';
import React from 'react';

const mapStateToProps = state => {
  return {
    formType: 'login',
    navLink: <Link to="/signup">Sign Up</Link>,
    errors: state.errors.session,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: user => dispatch(login(user)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);