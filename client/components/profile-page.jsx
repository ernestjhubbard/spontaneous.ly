import React from 'react';

export default function ProfilePage(props) {
  return (
    <div>
      <div className="profile-center container mx-2 my-5">
        <div className="user-info container h-50 d-flex flex-wrap justify-content-around">
          <div className="user-image w-50 h-75 menu-open rounded-circle"></div>
          <h4>Lorem Ipsum</h4>
        </div>
        <div className="points-container bg-primary h-50 container d-flex flex-wrap justify-content-around">
          <h4 className="bg-warning">Spontaneity Points</h4>
          <h2 className="bg-danger">POINTS GO HERE</h2>
        </div>
        <div className="profile-footer">

        </div>
      </div>
    </div>
  );
}
