import axios from 'axios';
import {URL} from '../../keys/dev';
import history from '../../helpers/history';

export const fetchBlogPosts = () => async (dispatch) => {
  try {
    const res = await axios({
      url: `${URL}/blogs`,
      method: 'GET',
      withCredentials: true
    });
    console.log(res.data);
    dispatch({type: 'POSTS_FETCHED', payload: res.data.posts});
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
  } catch (err) {
    dispatch({type: 'ERROR_MESSAGE_SHOWN', payload: res.message});
  }
}

export const redirectTo = (path) => {
  history.push(path);
}