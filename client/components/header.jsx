import React from 'react';

function Header(props) {
  return (
    <div className="header-bar sticky-top">
      <img className="logo-alone mt-3 ml-4"
        src="assets/images/logo-alone.png"
        onClick={() => props.setView('home')}/>
      <i className="menu-bar fas fa-bars float-right mt-3 mr-4"/>
    </div>
  );
}

export default Header;
