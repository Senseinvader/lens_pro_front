import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';
import Header from './header';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Work from './Work';
import Blog from './Blog';
import About from './About';
import Login from './Login';

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/login" component={Login}/>
        { (!this.props.isLoggedIn) 
          ? (<Redirect to="login"/>)
          : (<div className="app-div">
            <Header/>
              <h1>Hi there!</h1>
              <Route path="/work" component={Work}/>
              <Route path="/blog" component={Blog}/>
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
    isLoggedIn: state.loginReducer.isLoggedIn
  }
}

export default connect(mapStateToProps)(App);