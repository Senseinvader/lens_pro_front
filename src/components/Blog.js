import React, { Component } from 'react';
import {blogs} from '../helpers/blogs';

export default class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      prevY: 0,
      loading: false,
      posts: []
    }
  }

  // componentDidMount() {
  //   const config = {
  //     root: document.querySelector('.app-div')
  //   }
  //   const observer = new IntersectionObserver(
  //     this.handleObserver.bind(this),
  //     config
  //   );
  //   observer.observe(this.loadingRef)
  // }

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
    return (
      <div className="blogs-container">
        <div className="card">
          <div className="card-body">
            <h2>Blog</h2>
          </div>
        </div>
        { blogs.map((blog, i) => (
          <div key={i} className="card">
            <div className="card-body">
              <h5 className="card-title">{blog.title}</h5>
              <p className="card-text">{blog.content}</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        ))}
        <div style={loadingCSS} ref={loadingRef=>this.loadingRef = loadingRef}>
          <span style={loadingTextCSS}>Loading...</span>
        </div>
      </div>
    )
  }
}
