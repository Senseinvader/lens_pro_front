import React, { Component } from 'react';
import {blogs} from '../helpers/blogs';

export default class Blog extends Component {

  render() {
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
      </div>
    )
  }
}
