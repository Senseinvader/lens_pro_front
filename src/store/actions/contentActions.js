import axios from 'axios';
import {URL} from '../../keys/dev';
import history from '../../helpers/history';

export const onInputChange = (e) => {
  switch(e.target.id) {
    case 'postTitle':
      return {type: "POST_TITLE_CHANGED", payload: e.target.value};
    case 'postContent':
      return {type: "POST_CONTENT_CHANGED", payload: e.target.value};
    default:
      return;
  }
}

export const fetchBlogPosts = (id) => async (dispatch) => {
  let params;
  if(id) {
    params = new URLSearchParams();
    params.append('id', id);
  }
  try {
    if(id==='myblog') {
      console.log('fetching my posts')
      const res = await axios({
        url: `${URL}/myblogs`,
        method: 'GET',
        withCredentials: true
      });
      dispatch({type: 'POSTS_FETCHED', payload: res.data.posts});
    } else {
      const res = await axios({
        url: `${URL}/blogs`,
        method: 'GET',
        withCredentials: true
      });
      dispatch({type: 'POSTS_FETCHED', payload: res.data.posts});
    }
  } catch (err) {
    dispatch({type: 'ERROR_MESSAGE_SHOWN', payload: res.message});
  }
}

export const uploadBlogPost = () => async (dispatch, getState) => {
  const { newPostTitle, newPostContent} = getState().contentReducer;
  try {
    const res = await axios({
      url: `${URL}/blogs`,
      method: 'POST',
      headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
      data: {title: newPostTitle, content: newPostContent},
      withCredentials: true
    });
    dispatch({type: 'POSTS_FETCHED', payload: res.data.posts});
    dispatch({type: 'POST_UPLOADED'});
    redirectTo('/blog/myblog');
  } catch (err) {
    dispatch({type: 'ERROR_MESSAGE_SHOWN', payload: res.message});
  }
}

export const redirectTo = (path) => {
  history.push(path);
}