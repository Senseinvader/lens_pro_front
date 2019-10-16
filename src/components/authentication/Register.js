import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';
import {handleRegister, checkEmail, checkPassword, checkPasswordsMatch, onInputChange} from '../../store/actions/authActions';

class Register extends Component {

  componentDidMount() {
    this.props.logOut();
  }
  

  submitForm = () => e => {
    e.preventDefault();
    this.props.submitForm();
  }

  render() {
    const {name, email, password, errorMessage, repeatedPassword, checkEmail, checkPassword, checkPasswordsMatch, onInputChange} = this.props;

    if(localStorage.getItem('isLoggedIn')) {
      return <Redirect to='work'/>
    }
    return (
      <div className="login-container">
        <div className="form-container">
          <form onSubmit={this.submitForm()}>
            <div className="form-group ">
              <label htmlFor="emailInput">Name</label>
              <input
                type="name"
                value={name}
                className="form-control form-control-lg"
                id="nameInput"
                onChange={(e)=>onInputChange(e)}/>
            </div>
            <div className="form-group ">
              <label htmlFor="emailInput">Email address</label>
              <input
                type="email"
                value={email}
                className="form-control form-control-lg"
                id="emailInput"
                onBlur={checkEmail}
                onChange={(e)=>onInputChange(e)}/>
            </div>
            <div className="form-group">
              <label htmlFor="passwordInput">Password</label>
              <input
                type="password"
                value={password}
                className="form-control form-control-lg"
                id="passwordInput"
                onBlur={checkPassword}
                onChange={(e)=>onInputChange(e)}/>
            </div>
            <div className="form-group">
              <label htmlFor="repeatPasswordInput">Repeat password</label>
              <input
                type="password"
                value={repeatedPassword}
                className="form-control form-control-lg"
                id="repeatedPasswordInput"
                onBlur={checkPasswordsMatch}
                onChange={(e)=>onInputChange(e)}/>
            </div>
            <div className="error-message">{errorMessage}</div>
            <button type="submit" className="btn btn-info">Sign Up</button>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.authReducer.name,
    email: state.authReducer.email,
    password: state.authReducer.password,
    repeatedPassword: state.authReducer.repeatedPassword,
    isLoggedIn: state.authReducer.isLoggedIn,
    errorMessage: state.authReducer.errorMessage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onInputChange: (e) => {dispatch(onInputChange(e))},
    submitForm: () => {dispatch(handleRegister())},
    checkEmail: (email) => {dispatch(checkEmail(email))},
    checkPassword: (password) => {dispatch(checkPassword(password))},
    checkPasswordsMatch: (password, repeatedPassword) => {dispatch(checkPasswordsMatch(password, repeatedPassword))},
    logOut: () => {dispatch({type: 'USER_LOGGED_OUT'})}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);