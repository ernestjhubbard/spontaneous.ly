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
    return (
      <div className="menu-nav-bar">
        <i className="fas fa-bars hamburger" onClick={this.changeDrawer}></i>
        <div className={`menu menu-${this.checkIfOpen()}`}>
          <div className={`nav-drawer nav-${this.checkIfOpen()}`}>
            <div className="shut mb-3">
              <i className="fas fa-times close-icon" onClick={this.changeDrawer}></i>
            </div>
            <h6 className="text-center">Welcome Back</h6>
            <ul>
              <li>
                <a href="#">View Profile</a>
              </li>
              <li>
                <a href="#">Account Settings</a>
              </li>
              <li>
                <a href="#">Upcoming Adventures</a>
              </li>
              <li>
                <a href="#">Past Adventures</a>
              </li>
              <li>
                <a href="#">View Friends</a>
              </li>
              <li>
                <a href="#">Read Messages</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default MenuNav;
