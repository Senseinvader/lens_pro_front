import axios from 'axios';

export const fetchBlogPosts = () => async (dispatch) => {
  try {
    const res = await axios({
      url: 'http://localhost:3000/blogs',
      method: 'GET',
      withCredentials: true
    });
    console.log(res.data);
    dispatch({type: 'POSTS_FETCHED', payload: res.data.posts})
  } catch (err) {
    
  }


}