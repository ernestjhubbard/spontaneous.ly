import React from 'react';

export default function Friend(props) {
  const friendImage = {
    backgroundImage: `url("/assets/images/users/${props.image}")`
  };
  const userId = props.user;
  const recipientId = props.recipientId;
  const senderId = props.senderId;
  let button;
  const acceptReject = (
    <><i
      className="far fa-check-circle fa-2x adventure-card m-auto"
      onClick={() => props.acceptRequest({ recipientId })}
    />
    <i
      className="far fa-times-circle fa-2x adventure-card m-auto text-muted"
      onClick={() => props.denyRequest({ recipientId })}
    /></>
  );
  if (props.isAccepted === 1) {
    button = (
      <i
        className="fas fa-paper-plane fa-2x adventure-card m-auto"
        onClick={() =>
          props.pushMessage(`/messages/friend?userId=${recipientId}`)
        }
      />
    );
  } else {
    button = userId === senderId ? 'PENDING' : acceptReject;
  }
  return (
    <div className="d-flex justify-content-between my-3">
      <div className="friend-image rounded-circle p-0 mr-3" style={friendImage}></div>
      <button className="friend-button friend-name border rounded my-0"
        onClick={() =>
          props.pushMessage(`/profile?userId=${recipientId}`)}>
        {props.firstName} {props.lastName}
      </button>
      <div className="send-message d-flex ml-3">
        {button}
      </div>
    </div>
  );
}
