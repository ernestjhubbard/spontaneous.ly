import React from 'react';
import MenuNav from './menu-nav.jsx';

function Header(props) {
  return (
    <div className="header-bar d-flex position-static">
      <img className="logo-alone mt-3 ml-4"
        src="assets/images/logo-alone.png"
        onClick={() => props.setView('home')}/>
      <MenuNav/>
    </div>
  );
}

export default Header;