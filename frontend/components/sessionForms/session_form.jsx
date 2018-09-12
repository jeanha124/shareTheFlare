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
  }
  update(field){
    return e => this.setState({ [field]: e.currentTarget.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
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
    if (this.props.formType === 'signup'){
      return (
        <div className="login-form-container">
          <form onSubmit={this.handleSubmit} className="login-form-box">
            Welcome to Share the Flare!
            <br />
            Sign Up
            { this.renderErrors() }
            <div className="login-form">
              <br />
                <input type="text"
                placeholder="First Name"
                value={this.state.fname}
                onChange={this.update('fname')}
                className="login-input"
                />
                <input type="text"
                placeholder = "Last Name"
                value={this.state.lname}
                onChange={this.update('lname')}
                className="login-input"
                />
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
                <input type="text"
                placeholder = "Display Name"
                value={this.state.display_name}
                onChange={this.update('display_name')}
                className="login-input"
                />
              <br /> 
                <input type="text"
                placeholder = "Gender: Optional"
                value={this.state.gender}
                onChange={this.update('gender')}
                className="login-input"
                />
              <br />
              <input className="session-submit" type="submit" value={this.props.formType} />
            </div>
            <br />
            <br />
            Already have an account? { this.props.navLink }
          </form>
        </div>
      );
    } else {
      return (
        <div className="login-form-container">
          <form onSubmit={this.handleSubmit} className="login-form-box">
            Welcome to Share the Flare!
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
            Don't have an account? { this.props.navLink }
          </form>
        </div>
      );

    }
  }
}

export default withRouter(SessionForm);