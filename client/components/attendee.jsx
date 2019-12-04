import React from 'react';

export default function Attendee(props) {
  const attendeeImage = {
    backgroundImage: `url("assets/images/users/${props.image}")`
  };
  return (
    <div className="row my-3 w-100 d-flex justify-content-evenly">
      <div className="col-2 friend-image rounded-circle p-0 ml-4" style={attendeeImage}></div>
      <div className="friend-button border rounded my-0 mx-1">{props.firstName} {props.lastName}</div>
      <div className="col-2 send-message">
      </div>
    </div>
  );
}
