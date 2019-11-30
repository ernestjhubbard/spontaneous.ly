import React from 'react';

export default function ProfilePage(props) {
  const profileImage = {
    backgroundImage: `url("assets/images/users/${props.user.image}")`
  };
  return (
    <div className="container align-center d-flex">
      <div className="profile-center container my-5">
        <div
          className="profile-user-info container h-50 d-flex flex-wrap justify-content-around">
          <div className="profile-user-image w-50 h-75 rounded-circle" style={profileImage}></div>
          <h4 className="font-weight-bold">{props.user.firstName} {props.user.lastName}</h4>
        </div>
        <div className="profile-points-container container d-flex flex-wrap justify-content-around mt-1 fa-border rounded">
          <h4 className="w-100 font-weight-bold mt-3 align-center text-center">Spontaneity Points</h4>
          <h1 className="profile-point-value mb-4">{props.user.points}</h1>
        </div>
        <div className="profile-footer row p-2">
          <button className="my-2 mt-3 profile-button rounded text-white col-12">Upcoming Adventures</button>
          <button className="my-2 profile-button rounded text-white col-12">Past Adventures</button>
          <button className="my-2 profile-button rounded text-white col-6">Friends</button>
          <button className="my-2 profile-button rounded text-white col-6">Messages</button>
        </div>
      </div>
    </div>
  );
}
