import React from 'react';

export default function Attendee(props) {
  const attendeeImage = {
    backgroundImage: `url("/assets/images/users/${props.image}")`
  };
  return (
    <div className="d-flex my-3">
      <div
        className="friend-image rounded-circle p-0 mr-3"
        onClick={() => props.viewProfile(`/profile?userId=${props.userId}`)}
        style={attendeeImage} ></div>
      <div className="friend-button attendee-name border text-center rounded my-0">{props.firstName} {props.lastName}</div>
    </div>
  );
}
