import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';
import Header from './header';
import {Router, Route} from 'react-router-dom';
import history from '../helpers/history';
import Work from './content/Work';
import Blog from './content/Blog';
import NewPost from './content/NewPost';
import NewPostReview from './content/NewPostReview';
import About from './content/About';
import Login from './authentication/Login';
import Register from './authentication/Register';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/signup" component={Register}/>
        { (!localStorage.getItem('isLoggedIn')) 
          ? (<Redirect to="login"/>)
          : (<div className="app-div">
            <Header/>
              <Route path="/" render={() => (<Redirect to="/work" />)}/>
              <Route path="/work" component={Work}/>
              <Route path="/blog" exact component={Blog}/>
              <Route path={`/blog/myblog`} exact component={Blog}/>
              <Route path="/post/new" exact component={NewPost}/>
              <Route path="/post/new/review" exact component={NewPostReview}/>
              <Route path="/about" component={About}/>
            </div>
          )
        }
      </Router>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.authReducer.isLoggedIn
  }
}

export default connect(mapStateToProps)(App);