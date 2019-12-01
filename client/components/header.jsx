import React from 'react';
import MenuNav from './menu-nav.jsx';

function Header(props) {
  return (
    <div className="header-bar d-flex position-static">
      <img className="logo-alone"
        src="assets/images/logo-alone.png"
        onClick={() => props.setView('home')} />
      <MenuNav setView={props.setView} currentView={props.currentView} />
    </div>
  );
}

export default Header;
