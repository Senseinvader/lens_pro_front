import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {

  navContent = () => {
    return (
      <Fragment>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to={"/work"}>Work</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/blog"}>Blog</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/about"}>About</Link>
          </li>
        </ul>
        <div className="logout-button">
          <button type="button" onClick={this.props.logOut} className="btn btn-info">Logout</button>
        </div>
      </Fragment>
    )
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarNav">
          {this.navContent()}
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
    logOut: () => {
      localStorage.removeItem('isLoggedIn');
      dispatch({type: 'USER_LOGGED_OUT'});
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);