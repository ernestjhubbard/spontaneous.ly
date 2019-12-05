import React from 'react';

export default function Friend(props) {
  const friendImage = {
    backgroundImage: `url("/assets/images/users/${props.image}")`
  };
  return (
    <div className="row my-3 w-100 d-flex justify-content-evenly">
      <div className="col-2 friend-image rounded-circle p-0 mr-4" style={friendImage}></div>
      <button className="friend-button border rounded my-0 mx-1">{props.firstName} {props.lastName}</button>
      <div className="col-2 send-message">
        <i
          className="fas fa-paper-plane fa-2x adventure-card mt-2"
          onClick={() => props.pushMessage(`/profile/friends/${props.recipientId}`)} />
      </div>
    </div>
  );
}
