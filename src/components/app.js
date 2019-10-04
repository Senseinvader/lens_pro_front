import React, { Component } from 'react';
import Header from './header';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Work from './Work';
import Blog from './Blog';
import About from './About';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app-div">
          <Header/>
          <h1>Hi there!</h1>
          <Route path="/work" component={Work}/>
          <Route path="/blog" component={Blog}/>
          <Route path="/about" component={About}/>
        </div>
      </Router>
    )
  }
}

export default App;