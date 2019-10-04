import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {

  render() {
    const {isLoggedIn} = this.props;
    return (
      <nav className="nav-container">
        <div className="nav-section">
          {isLoggedIn 
            ? 
            (<ul>
              <li><Link to={"/work"}>Work</Link></li>
              <li><Link to={"/blog"}>Blog</Link></li>
              <li><Link to={"/about"}>About</Link></li>
          </ul>)
          : 
          (<div className="login">
            <button onClick={this.loginHandler}>Login</button>
          </div>)
        }
        </div>
      </nav>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.loginReducer.isLoggedIn
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);