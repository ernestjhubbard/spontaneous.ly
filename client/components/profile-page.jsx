import React from 'react';

export default function ProfilePage(props) {
  const profileImage = {
    backgroundImage: `url("assets/images/users/${props.user.image}")`
  };
  return (
    <div>
      <div className="profile-center container mx-2 my-5">
        <div
          className="user-info container h-50 d-flex flex-wrap justify-content-around">
          <div className="user-image w-50 h-75 rounded-circle" style={profileImage}></div>
          <h3 className="font-weight-bold">{props.user.firstName} {props.user.lastName}</h3>
        </div>
        <div className="points-container h-50 container d-flex flex-wrap justify-content-around mt-3 fa-border rounded">
          <h3 className="w-100 mt-3 align-center font-weight-bold text-center">Spontaneity Points</h3>
          <h1 className="">{props.user.points}</h1>
        </div>
        <div className="profile-footer">
        </div>
      </div>
    </div>
  );
}
