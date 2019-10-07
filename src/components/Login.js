import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {onInputChange, checkEmail, checkPassword, handleSubmit} from '../actions/loginActions';

class Login extends Component {

  submitForm = () => e => {
    console.log('submitting')
    e.preventDefault();
    this.props.submitForm();
  }

  render() {
    if(this.props.isLoggedIn) {
      return <Redirect to='work'/>
    }
    const {email, password, errorMessage} = this.props;
    return (
      <div className="login-container">
        <div className="form-container">
          <form onSubmit={this.submitForm()}>
            <input type="email" value={email} onBlur={this.props.checkEmail} onChange={(e)=>this.props.onInputChange(e)}/>
            <input type="password" value={password} onBlur={this.props.checkPassword} onChange={(e)=>this.props.onInputChange(e)}/>
            <div className="error-message">{errorMessage}</div>
            <button type="submit">Login</button>
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