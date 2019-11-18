import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import {fetchBlogPosts, redirectTo} from '../../store/actions/contentActions';

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      prevY: 0,
      loading: false,
      posts: [],
      userId: ''
    }
  }

  componentDidMount() {
    const {history} = this.props;
    // const config = {
    //   root: document.querySelector('.app-div')
    // }
    // const observer = new IntersectionObserver(
    //   this.handleObserver.bind(this),
    //   config
    // );
    // observer.observe(this.loadingRef)

    const userId = history && history.location.pathname.split('/')[2];
    this.setState({userId: userId});
    this.props.fetchBlogPosts(userId);
  }

  handleObserver(entities, observer) {
    const y = entities[0].boundingClientDirect.y;
    if(this.state.prevY > y) {
      const lastPost = this.state.posts[this.state.posts.length - 1];
      const curPage = lastPost.id;
      this.props.getBlogPosts(curPage);
      this.setState({page: curPage});
    }
    this.setState({prevY: y});
  }

  render() {
    const loadingCSS = {
      width: '80vw',
      height: '30px'
    }
    const loadingTextCSS = { display: this.state.loading ? 'block' : 'none' };
    const {posts} = this.props;
    const {userId} = this.state;

    return (
      <Fragment>
        <div className="blogs-container">
          <div className="card">
            <div className="card-body">
              <h2>{userId ? 'My Blog' : 'Blog'}</h2>
            </div>
          </div>
          { posts ? posts.map((post, i) => (
            <div key={i} className="card">
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.content}</p>
                <a href="#" className="btn btn-primary">Read</a>
              </div>
            </div>
          )) : (
            <div className="card-body">
              <p className="card-text">You don't have your posts created yet</p>
            </div>
          )}
          <div style={loadingCSS} ref={loadingRef=>this.loadingRef = loadingRef}>
            <span style={loadingTextCSS}>Loading...</span>
          </div>
        </div>
        <div className="add-post-container">
          <button className="btn btn-danger btn-lg btn-add-post" onClick={()=>redirectTo('/post/new')}>+</button>
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.contentReducer.posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBlogPosts: (id) => {dispatch(fetchBlogPosts(id));},

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Blog));