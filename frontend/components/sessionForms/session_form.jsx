import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      email: '', 
      password: '',
      fname: '',
      lname: '',
      display_name: '',
      gender: '',  
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }
  update(field){
    return e => this.setState({ [field]: e.target.value });
  }

  demoLogin(e) {
    e.preventDefault();
    const demoUser = {email: 'demo@email.com', password:'password123'};
    if (this.props.formType === 'login'){
      this.props.processForm(demoUser).then(this.props.closeModal);
    } else {
      this.props.demoLogin(demoUser).then(this.props.closeModal);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    let user;
    if (this.props.formType === 'signup'){
      user = Object.assign({}, this.state);
    } else {
      user = Object.assign({}, {email: this.state.email}, {password: this.state.password});
    }
    this.props.processForm(user).then(this.props);
  }
  renderErrors() {
    return (
      <ul>
        { this.props.errors.map((error, i) => (
          <li key={ `error-${i}` }>
            { error }
          </li>
        )) }
      </ul>
    );
  }
  render() {
    let button;
    if (this.props.formType === 'signup'){

      button = this.props.otherForm;
      return (
        <div className="login-form-container">
          <form onSubmit={(e) => this.handleSubmit(e) } className="login-form-box">
            <br />
            Sign Up
            { this.renderErrors() }
            <div className="login-form">
              <br />
                <input type="text"
                placeholder="First Name"
                value={ this.state.fname }
                onChange={ this.update('fname') }
                className="login-input"
                />
                <input type="text"
                placeholder = "Last Name"
                value={ this.state.lname }
                onChange={ this.update('lname') }
                className="login-input"
                />
              <br /> 
                <input type="text"
                placeholder = "Email"
                value={ this.state.email }
                onChange={ this.update('email') }
                className="login-input"
                />
              <br />
                <input type="password"
                placeholder = "Password"
                value={ this.state.password }
                onChange={ this.update('password') }
                className="login-input"
                />
              <br />
                <input type="text"
                placeholder = "Display Name"
                value={ this.state.display_name }
                onChange={ this.update('display_name') }
                className="login-input"
                />
              <br /> 
                <input type="text"
                placeholder = "Gender: Optional"
                value={ this.state.gender }
                onChange={ this.update('gender') }
                className="login-input"
                />
              <br />
              <input className="session-submit" type="submit" value={this.props.formType} />
            </div>
            <br />
            <br />
            Already have an account? {button}
          </form>
        </div>
      );
    } else {
      button = this.props.otherForm;
      return (
        <div className="login-form-container">
          <form onSubmit={(e) => this.handleSubmit(e)} className="login-form-box">
            <br />
            Log In
            { this.renderErrors() }
            <div className="login-form">
              <br />
                <input type="text"
                placeholder = "Email"
                value={this.state.email}
                onChange={this.update('email')}
                className="login-input"
                />
              <br />
                <input type="password"
                placeholder = "Password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
                />
              <br />
              <input className="session-submit" type="submit" value={this.props.formType} />
            </div>
            <br />
            <br />
            Don't have an account? {button}
            <br />
            <button id="demo" onClick={(e) => this.demoLogin(e)}>Demo Login</button>
          </form>
        </div>
      );

    }
  }
}

export default withRouter(SessionForm);