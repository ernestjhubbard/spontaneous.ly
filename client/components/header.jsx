import React from 'react';
import MenuNav from './menu-nav.jsx';
import { Link } from 'react-router-dom';

function Header(props) {
  const currentUrl = new URL(window.location.href);
  const currentPage = currentUrl.pathname;
  if (currentPage === '/activity-list' || currentPage === '/activity-details') {
    return (
      <div className="header-bar d-flex sticky-top">
        <img className="logo-alone"
          src="assets/images/logo-alone.png" />
        <MenuNav signOut={props.signOut} currentView={props.currentView} user={props.user} />
      </div>
    );
  } else {
    return (
      <div className="header-bar d-flex sticky-top">
        <Link to="/">
          <img className="logo-alone"
            src="assets/images/logo-alone.png" />
        </Link>
        <MenuNav signOut={props.signOut} currentView={props.currentView} user={props.user} />
      </div>
    );
  }
}

export default Header;
