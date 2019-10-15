import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

class Header extends Component {

  navContent = () => {
    const {logOut, history} = this.props;
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
          <button type="button" onClick={()=>logOut(history)} className="btn btn-info">Logout</button>
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
    isLoggedIn: state.authReducer.isLoggedIn
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: (history) => {
      localStorage.removeItem('isLoggedIn');
      history.push('/login');
      dispatch({type: 'USER_LOGGED_OUT'});
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));