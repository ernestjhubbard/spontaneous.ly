import React from 'react';
import MenuNav from './menu-nav.jsx';
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <div className="header-bar d-flex position-static">
      <Link to="/">
        <img className="logo-alone"
          src="assets/images/logo-alone.png" />
      </Link>
      <MenuNav setView={props.setView} currentView={props.currentView} user={props.user} />
    </div>
  );
}

export default Header;
