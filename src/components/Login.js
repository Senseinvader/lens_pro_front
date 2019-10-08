import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {onInputChange, checkEmail, checkPassword, handleSubmit} from '../store/actions/loginActions';

class Login extends Component {

  submitForm = () => e => {
    e.preventDefault();
    this.props.submitForm();
  }

  render() {
    if(localStorage.getItem('isLoggedIn')) {
      return <Redirect to='work'/>
    }
    const {email, password, errorMessage} = this.props;
    return (
      <div className="login-container">
        <div className="form-container">
          <form onSubmit={this.submitForm()}>
            <div className="form-group ">
              <label forHtml="emailInput">Email address</label>
              <input
                type="email"
                value={email}
                className="form-control form-control-lg"
                id="emailInput"
                onBlur={this.props.checkEmail}
                onChange={(e)=>this.props.onInputChange(e)}/>
            </div>
            <div className="form-group">
              <label for="passwordInput">Email address</label>
              <input
                type="password"
                value={password}
                className="form-control form-control-lg"
                id="passwordInput"
                onBlur={this.props.checkPassword}
                onChange={(e)=>this.props.onInputChange(e)}/>
            </div>
            <div className="error-message">{errorMessage}</div>
            <button type="submit" className="btn btn-info">Login</button>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    email: state.loginReducer.email,
    password: state.loginReducer.password,
    isLoggedIn: state.loginReducer.isLoggedIn,
    errorMessage: state.loginReducer.errorMessage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onInputChange: (e) => {dispatch(onInputChange(e))},
    checkEmail: () => {dispatch(checkEmail())},
    checkPassword: () => {dispatch(checkPassword())},
    submitForm: () => {dispatch(handleSubmit())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)