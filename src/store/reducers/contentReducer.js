const initState = {
  posts: [],
};

const contentReducer = (state = initState, action) => {
  switch(action.type) {
    case 'POSTS_FETCHED':
      return {...state, posts: action.payload};
    default:
      return state;
  }
}

export default contentReducer;