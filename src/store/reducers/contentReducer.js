const initState = {
  posts: [],
  newPostTitle: '',
  newPostContent: ''
};

const contentReducer = (state = initState, action) => {
  switch(action.type) {
    case 'POSTS_FETCHED':
      return {...state, posts: action.payload};
    case 'POST_TITLE_CHANGED':
      return {...state, newPostTitle: action.payload};
    case 'POST_CONTENT_CHANGED':
      return {...state, newPostContent: action.payload};
    default:
      return state;
  }
}

export default contentReducer;