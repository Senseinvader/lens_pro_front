const initState = {
  isLoggedIn: true,
  email: '',
  password: ''
}


const loginReducer = (state = initState, action) => {
  switch(action.type) {
    case 'USER_LOGGED_IN':
      return {...state, isLoggedIn: true, email: '', password: ''};
    default:
      return state;
  }
}

export default loginReducer;