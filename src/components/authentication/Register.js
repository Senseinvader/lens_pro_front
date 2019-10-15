import React, { Component } from 'react';
import { connect } from 'react-redux';
import {handleRegister} from '../../store/actions/authActions';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: '',
      email: '',
      repeatedPassword: '',
    }
  }

  render() {
    const {name, email, repeatedPassword, password} = this.state;
    return (
      <div>
        <div className="form-container">
          <form onSubmit={this.submitForm()}>
            <div className="form-group ">
              <label htmlFor="emailInput">Name</label>
              <input
                type="name"
                value={name}
                className="form-control form-control-lg"
                id="nameInput"
                onChange={(e)=>this.props.onInputChange(e)}/>
            </div>
            <div className="form-group ">
              <label htmlFor="emailInput">Email address</label>
              <input
                type="email"
                value={email}
                className="form-control form-control-lg"
                id="emailInput"
                onBlur={this.props.checkEmail}
                onChange={(e)=>this.props.onInputChange(e)}/>
            </div>
            <div className="form-group">
              <label htmlFor="passwordInput">Password</label>
              <input
                type="password"
                value={password}
                className="form-control form-control-lg"
                id="passwordInput"
                onBlur={this.props.checkPassword}
                onChange={(e)=>this.props.onInputChange(e)}/>
            </div>
            <div className="form-group">
              <label htmlFor="passwordInput">Repeat password</label>
              <input
                type="password"
                value={repeatedPassword}
                className="form-control form-control-lg"
                id="passwordInput"
                onBlur={this.props.checkRepeatedPassword}
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
    name: state.authReducer.name,
    email: state.authReducer.email,
    password: state.authReducer.password,
    isLoggedIn: state.authReducer.isLoggedIn,
    errorMessage: state.authReducer.errorMessage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    submitForm: () => {dispatch(handleRegister())},
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);