import React from 'react';
import {
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
    const signIn = <button
      className="spon-button rounded text-white w-100"
      onClick={() => this.props.setView('signIn')}>Sign In</button>;
    const createAccount = <button
      className="spon-button rounded text-white w-100"
      onClick={() => this.props.setView('createAccount')}>Create Account</button>;
    const pageOrSignIn = viewBoolean ? 'signIn' : 'profilePage';
    const firstName = this.props.user.firstName;
    const profileImage = {
      backgroundImage: `url("assets/images/users/${this.props.user.image}")`
    };
    return (
      <div className="menu-nav-bar">
        <i className="fas fa-bars hamburger" onClick={this.changeDrawer}></i>
        <div className={`menu menu-${this.checkIfOpen()}`}>
          <div className={`nav-drawer nav-${this.checkIfOpen()}`}>
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
                {viewBoolean ? createAccount : <NavLink to="/">Account Settings</NavLink>}
              </li>
              <li>
                {viewBoolean ? null : <NavLink to="/upcoming-activities">Upcoming Adventures</NavLink>}
              </li>
              <li>
                {viewBoolean ? null : <NavLink to="/past-activities">Past Adventures</NavLink>}
              </li>
              <li>
                {viewBoolean ? null : <NavLink to="/friends">View Friends</NavLink>}
              </li>
              <li>
                {viewBoolean ? null : <a>Read Messages</a>}
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default MenuNav;
