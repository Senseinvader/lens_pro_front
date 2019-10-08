import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {

  navContent = () => {
    return (
      <Fragment>
      <ul>
        <li><Link to={"/work"}>Work</Link></li>
        <li><Link to={"/blog"}>Blog</Link></li>
        <li><Link to={"/about"}>About</Link></li>
      </ul>
      <div className="logout-button">
        <button type="button" onClick={this.props.logOut} className="btn btn-info">Logout</button>
      </div>
      </Fragment>
    )
  }

  render() {
    const {isLoggedIn} = this.props;
    return (
      <nav className="nav-container">
        <div className="nav-section">
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