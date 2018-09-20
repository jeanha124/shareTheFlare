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
    const demoUser = {email: 'demo@email.com', password:'hunter2'};
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
    this.props.processForm(user).then(this.props.closeModal);
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
    let button, fname, lname, gender, email, password, displayName, submit, demoLog;
    fname = <input type="text"
                placeholder="First Name"
                value={ this.state.fname }
                onChange={ this.update('fname') }
                className="login-input"
                />;
    lname = <input type="text"
                placeholder = "Last Name"
                value={ this.state.lname }
                onChange={ this.update('lname') }
                className="login-input"
                />;
    email = <input type="text"
                placeholder = "Email"
                value={ this.state.email }
                onChange={ this.update('email') }
                className="login-input"
                />;
    password = <input type="password"
                placeholder = "Password"
                value={ this.state.password }
                onChange={ this.update('password') }
                className="login-input"
                />;
    displayName = <input type="text"
                placeholder = "Display Name"
                value={ this.state.display_name }
                onChange={ this.update('display_name') }
                className="login-input"
                />;
    gender = <input type="text"
                placeholder = "Gender: Optional"
                value={ this.state.gender }
                onChange={ this.update('gender') }
                className="login-input"
                />;                        
    button = this.props.otherForm;
    submit = <input className="session-submit" type="submit" value={this.props.formType} />;
    demoLog = <button id="demo" onClick={this.demoLogin}>Demo Login</button>;



    if (this.props.formType === 'signup'){
      return (
        <div className="login-form-container">
          <form onSubmit={this.handleSubmit} className="login-form-box">
            <br />
            Sign Up
            { this.renderErrors() }
            <div className="login-form">
              <br />
                {fname}
                <br />
                {lname}
                <br /> 
                {email}
                <br />
                {password}
              <br />
                {displayName}
              <br /> 
                {gender}
              <br />
              {submit}
            </div>
            <br />
            <br />
            Already have an account? <span className="link-btn">{button}</span>
          </form>
        </div>
      );
    } else {
      return (
        <div className="login-form-container">
          <form onSubmit={this.handleSubmit} className="login-form-box">
            <br />
            Log In
            { this.renderErrors() }
            <div className="login-form">
              <br />
                {email}
              <br />
                {password}
              <br />
              {submit}
            </div>
            <br />
            <br />
            Don 't have an account? <span className="link-btn">{button}</span>
            <br />
            {demoLog}
          </form>
        </div>
      );

    }
  }
}

export default withRouter(SessionForm);