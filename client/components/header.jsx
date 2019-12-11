import React from 'react';
import MenuNav from './menu-nav.jsx';
import { Link } from 'react-router-dom';

function Header(props) {
  const currentUrl = new URL(window.location.href);
  const currentPage = currentUrl.pathname;

  const unclickable = (
    <div className="header-bar d-flex sticky-top">
      <img className="logo-alone"
        src="assets/images/logo-alone.png" />
    </div>
  );

  const clickable = (
    <div className="header-bar d-flex sticky-top">
      <Link to="/">
        <img className="logo-alone"
          src="assets/images/logo-alone.png" />
      </Link>
      <MenuNav signOut={props.signOut} currentView={props.currentView} user={props.user} />
    </div>
  );

  return (currentPage === '/activity-list' || currentPage === '/activity-details') ? unclickable : clickable;
}

export default Header;
