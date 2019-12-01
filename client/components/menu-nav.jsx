import React from 'react';

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
      className="spon-button rounded text-white"
      onClick={() => this.props.setView('signIn')}>Sign In</button>;
    const createAccount = <button
      className="spon-button rounded text-white"
      onClick={() => this.props.setView('createAccount')}>Create Account</button>;
    const pageOrSignIn = viewBoolean ? 'signIn' : 'profilePage';
    return (
      <div className="menu-nav-bar">
        <i className="fas fa-bars hamburger" onClick={this.changeDrawer}></i>
        <div className={`menu menu-${this.checkIfOpen()}`}>
          <div className={`nav-drawer nav-${this.checkIfOpen()}`}>
            <div className="shut mb-3">
              <i className="fas fa-times close-icon" onClick={this.changeDrawer}></i>
            </div>
            {viewBoolean ? null : <h6 className="text-center">Welcome Back</h6>}
            <ul>
              <li onClick={() => this.props.setView(pageOrSignIn)}>
                {viewBoolean ? signIn : <a href="#">View Profile</a>}
              </li>
              <li>
                {viewBoolean ? createAccount : <a href="#">Account Settings</a>}
              </li>
              <li>
                {viewBoolean ? null : <a href="#">Upcoming Adventures</a>}
              </li>
              <li>
                {viewBoolean ? null : <a href="#">Past Adventures</a>}
              </li>
              <li>
                {viewBoolean ? null : <a href="#">View Friends</a>}
              </li>
              <li>
                {viewBoolean ? null : <a href="#">Read Messages</a>}
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default MenuNav;
