import axios from 'axios';

export const onInputChange = (e) => {
  return e.target.type === 'email' 
    ? {type: "EMAIL_CHANGED", payload: e.target.value}
    : {type: "PASSWORD_CHANGED", payload: e.target.value}
}

export const checkEmail = () => {
  return (dispatch, getState) => {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!getState().authReducer.email) {
      dispatch(sendErrorMessage('You should provide your email'));
    } else if(!regex.test(getState().authReducer.email)) {
      dispatch(sendErrorMessage('You should provide valid email'));
    } else {
      return({type: 'EMAIL_VALIDATED'});
    }
  }
}

export const checkPassword = () => {
  return (dispatch, getState) => {
    if(!getState().authReducer.password) {
      dispatch(sendErrorMessage('You should provide your password'));
    } else {
      return({type: 'PASSWORD_VALIDATED'});
    }
  }
}

export const handleLogin = () => async (dispatch, getState) => {
  const {email, password} = getState().authReducer;
  try {
    const res = await axios({
      url: 'http://localhost:3000/login',
      method: 'POST',
      headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
      data: {email, password},
      withCredentials: true
    });
    console.log(res.data);
    localStorage.setItem('isLoggedIn', '1');
    dispatch({type: 'USER_LOGGED_IN', payload: res.data.user});
  } catch (err) {
    dispatch({type: 'ERROR_MESSAGE_SHOWN', payload: err.message})
  }
}

// export const handleLogin =() => {
//   return {type: 'USER_LOGGED_IN'};
// }

export const sendErrorMessage = (message) => {
  return {type: 'ERROR_MESSAGE_SHOWN', payload: message};
}