import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import { uploadBlogPost, redirectTo } from '../../store/actions/contentActions';

class NewPostReview extends Component {

  uploadBlogPost = () => {
    this.props.uploadBlogPost();
    redirectTo('/blog');
  }

  render() {
    const {newPostTitle, newPostContent} = this.props;
    return (
      <Fragment>
        <div className="card mx-auto mt-4"> 
          <div className="card-body">
            <h3 className="card-title">{newPostTitle}</h3>
            <p className="card-text">{newPostContent}</p>
          </div>
        </div>
        <div className="post-buttons-container">
          <button className="btn btn-outline-primary">Cancel</button>
          <button className="btn btn-primary" onClick={this.uploadBlogPost}>Post</button>
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    newPostTitle: state.contentReducer.newPostTitle,
    newPostContent: state.contentReducer.newPostContent
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    uploadBlogPost: () => {dispatch(uploadBlogPost())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPostReview);