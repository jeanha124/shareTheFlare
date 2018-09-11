import { connect } from 'react-redux';
import SessionForm from './session_form';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';

const mapStateToProps = state => {
  return {
    formType: 'signup',
    navLink: <Link to="/login">Log In</Link>,
    errors: state.errors.session,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: user => dispatch(signup(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);