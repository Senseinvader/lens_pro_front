import React, { Component } from 'react';
import {connect} from 'react-redux';
import {sendErrorMessage} from '../../store/actions/authActions';
import {redirectTo, onInputChange} from '../../store/actions/contentActions';

class NewPost extends Component {

  submitForm = () => e => {
    const {newPostTitle, newPostContent, sendErrorMessage} = this.props;
    e.preventDefault();
    if(newPostTitle && newPostContent) redirectTo('/post/new/review');
    else sendErrorMessage('Please fill all fields');
  }

  checkNonEmpty = () => e => {  
    if(!e.target.value) {
      this.props.sendErrorMessage('Please fill all fields');
    } else {
      this.props.sendErrorMessage('');
    }
  }

  render() {
    const {newPostTitle, newPostContent, onInputChange, errorMessage} = this.props;

    return (
      <div className="new-post-container mt-2">
        <h2>Create a New Post</h2>
        <div className="form-container">
          <form onSubmit={this.submitForm()}>
            <div className="form-group ">
              <label htmlFor="postTitle">Post Title</label>
              <input
                type="text"
                value={newPostTitle}
                className="form-control form-control-lg"
                id="postTitle"
                onBlur={this.checkNonEmpty()}
                onChange={(e)=>onInputChange(e)}/>
            </div>
            <div className="form-group">
              <label htmlFor="postContent">Post Content</label>
              <textarea
                type="text"
                rows="10"
                value={newPostContent}
                className="form-control form-control-lg"
                id="postContent"
                onBlur={this.checkNonEmpty()}
                onChange={(e)=>onInputChange(e)}/>
            </div>
            <div className="error-message">{errorMessage}</div>
            <button type="submit" className="btn btn-info">Upload Post</button>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    errorMessage: state.authReducer.errorMessage,
    newPostTitle: state.contentReducer.newPostTitle,
    newPostContent: state.contentReducer.newPostContent
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendErrorMessage: (message) => {dispatch(sendErrorMessage(message))},
    onInputChange: (e) => {dispatch(onInputChange(e))},
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPost);
