const initState = {
  isLoggedIn: false,
  name: '',
  email: '',
  password: '',
  repeatedPassword: '',
  errorMessage: '',
  emailValidated: false,
  passwordValidated: false,
  passwordsMatch: false,
  user: null,
}


const authReducer = (state = initState, action) => {
  switch(action.type) {
    case 'USER_LOGGED_IN':
      return {...state, isLoggedIn: true, email: '', password: '', errorMessage: '', user: action.payload};
    case 'USER_SIGNED_IN':
      return {...state, isLoggedIn: true, name: '', repeatedPassword: '', email: '', password: '', errorMessage: '', user: action.payload};
    case 'USER_LOGGED_OUT':
      return {...state, isLoggedIn: false, name: '', email: '', password: '', repeatedPassword: '', emailValidated: false, passwordValidated: false, passwordsMatch: false, user: null, errorMessage: ''};
    case 'NAME_CHANGED':
      return {...state, name: action.payload};
    case 'EMAIL_CHANGED':
      return {...state, email: action.payload};
    case 'PASSWORD_CHANGED':
      return {...state, password: action.payload};
    case 'REPEATED_PASSWORD_CHANGED':
      return {...state, repeatedPassword: action.payload};    
    case 'ERROR_MESSAGE_SHOWN':
      return {...state, errorMessage: action.payload};
    case 'EMAIL_VALIDATED':
      return {...state, emailValidated: true};
    case 'PASSWORD_VALIDATED':
      return {...state, passwordValidated: true};
    case 'PASSWORDS_MATCH':
      return {...state, passwordsMatch: true};
    default:
      return state;
  }
}

export default authReducer;