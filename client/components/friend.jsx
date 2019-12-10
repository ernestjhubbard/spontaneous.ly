import React from 'react';

export default function Friend(props) {
  const friendImage = {
    backgroundImage: `url("/assets/images/users/${props.image}")`
  };
  return (
    <div className="d-flex justify-content-between my-3">
      <div className="friend-image rounded-circle p-0 mr-3" style={friendImage}></div>
      <button className="friend-button friend-name border rounded my-0">{props.firstName} {props.lastName}</button>
      <div className="send-message d-flex ml-3">
        <i
          className="fas fa-paper-plane fa-2x adventure-card m-auto"
          onClick={() => props.pushMessage(`/messages/friend?friendId=${props.recipientId}`)} />
      </div>
    </div>
  );
}
