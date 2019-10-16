import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import {fetchBlogPosts, redirectTo} from '../../store/actions/contentActions';

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      prevY: 0,
      loading: false,
      posts: []
    }
  }

  componentDidMount() {
    // const config = {
    //   root: document.querySelector('.app-div')
    // }
    // const observer = new IntersectionObserver(
    //   this.handleObserver.bind(this),
    //   config
    // );
    // observer.observe(this.loadingRef)

    this.props.fetchBlogPosts();
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

    return (
      <Fragment>
        <div className="blogs-container">
          <div className="card">
            <div className="card-body">
              <h2>Blog</h2>
            </div>
          </div>
          { posts.map((post, i) => (
            <div key={i} className="card">
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.content}</p>
                <a href="#" className="btn btn-primary">Read</a>
              </div>
            </div>
          ))}
          <div style={loadingCSS} ref={loadingRef=>this.loadingRef = loadingRef}>
            <span style={loadingTextCSS}>Loading...</span>
          </div>
        </div>
        <div className="add-post-container">
          <button className="btn btn-danger btn-lg btn-add-post" onClick={()=>redirectTo('/blog/new')}>+</button>
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
    fetchBlogPosts: () => {dispatch(fetchBlogPosts());},

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog);