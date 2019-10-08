const initState = {
  isLoggedIn: false,
  email: '',
  password: '',
  errorMessage: ''
}


const loginReducer = (state = initState, action) => {
  switch(action.type) {
    case 'USER_LOGGED_IN':
      return {...state, isLoggedIn: true, email: '', password: '', errorMessage: ''};
    case 'USER_LOGGED_OUT':
        return {...state, isLoggedIn: false};
    case 'EMAIL_CHANGED':
      return {...state, email: action.payload};
    case 'PASSWORD_CHANGED':
      return {...state, password: action.payload};
    case 'ERROR_MESSAGE_SHOWN':
      return {...state, errorMessage: action.payload};
    default:
      return state;
  }
}

export default loginReducer;