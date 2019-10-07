export const onInputChange = (e) => {
  return e.target.type === 'email' 
    ? {type: "EMAIL_CHANGED", payload: e.target.value}
    : {type: "PASSWORD_CHANGED", payload: e.target.value}
}

export const checkEmail = () => {
  return (dispatch, getState) => {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!getState().loginReducer.email) {
      dispatch(sendErrorMessage('You should provide your email'));
    } else if(!regex.test(getState().loginReducer.email)) {
      dispatch(sendErrorMessage('You should provide valid email'));
    } else {
      return({type: 'EMAIL_VALIDATED'});
    }
  }
}

export const checkPassword = () => {
  return (dispatch, getState) => {
    if(!getState().loginReducer.password) {
      dispatch(sendErrorMessage('You should provide your password'));
    } else {
      return({type: 'PASSWORD_VALIDATED'});
    }
  }
}

export const handleSubmit = () => {
  return (dispatch, getState) => {
    const {email, password} = getState().loginReducer;
    (email==='admin@mail.com' && password==='123')
    ? dispatch(handleLogin())
    : dispatch(sendErrorMessage('User with these credentials does not exist'))
  }
}

export const handleLogin =() => {
  return {type: 'USER_LOGGED_IN'};
}

export const sendErrorMessage = (message) => {
  return {type: 'ERROR_MESSAGE_SHOWN', payload: message};
}