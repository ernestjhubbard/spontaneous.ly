import React from 'react';
import {
  Link,
  NavLink
} from 'react-router-dom';

class MenuNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.changeDrawer = this.changeDrawer.bind(this);
    this.checkIfOpen = this.checkIfOpen.bind(this);
  }

  changeDrawer() {
    this.setState({
      open: !this.state.open
    });
  }

  checkIfOpen() {
    if (this.state.open === true) {
      return 'open';
    } else {
      return 'closed';
    }
  }

  render() {
    const view = this.props.currentView;
    const viewBoolean = view === 'signIn' || view === 'createAccount';
    const signIn =
      <Link to="/sign-in">
        <button
          className="spon-button rounded text-white w-100"
          onClick={() => this.props.setView('signIn')}>Sign In</button>
      </Link>;
    const createAccount =
      <Link to="/create-an-account">
        <button
          className="spon-button rounded text-white w-100"
          onClick={() => this.props.setView('createAccount')}>Create Account</button>
      </Link>;
    const pageOrSignIn = viewBoolean ? 'signIn' : 'profilePage';
    const firstName = this.props.user.firstName;
    const profileImage = {
      backgroundImage: `url("assets/images/users/${this.props.user.image}")`
    };
    const checkOpenState = this.checkIfOpen();
    return (
      <div className="menu-nav-bar">
        <i className="fas fa-bars hamburger" onClick={this.changeDrawer}></i>
        <div className={`menu menu-${checkOpenState}`}>
          <div className={`darkness darkness-${checkOpenState}`} onClick={this.changeDrawer}></div>
          <div className={`nav-drawer nav-${checkOpenState}`}>
            <div className="shut mb-3">
              <i className="fas fa-times close-icon" onClick={this.changeDrawer}></i>
            </div>
            {viewBoolean ? null : <div className="my-5">
              <div className="profile-user-image rounded-circle mx-auto my-3" style={profileImage}></div>
              <h6 className="text-center">Welcome Back, {`${firstName}`}</h6>
            </div>
            }
            <ul onClick={this.changeDrawer}>
              <li onClick={() => {
                this.props.setView(pageOrSignIn);
              }}>
                {viewBoolean ? signIn : <NavLink to="/profile">View Profile</NavLink>}
              </li>
              <li>
                {viewBoolean ? createAccount : <NavLink to="/profile">Account Settings</NavLink>}
              </li>
              <li>
                {viewBoolean ? null : <NavLink to="/profile/upcoming-activities">Upcoming Adventures</NavLink>}
              </li>
              <li>
                {viewBoolean ? null : <NavLink to="/profile/past-activities">Past Adventures</NavLink>}
              </li>
              <li>
                {viewBoolean ? null : <NavLink to="/profile/friends">View Friends</NavLink>}
              </li>
              <li>
                {viewBoolean ? null : <NavLink to="/profile/messages">Read Messages</NavLink>}
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default MenuNav;
