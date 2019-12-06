import React from 'react';

export default function Message(props) {
  const userImage = {
    backgroundImage: `url("/assets/images/users/${props.friend.image}")`
  };
  const friendImage = {
    backgroundImage: `url("/assets/images/users/${props.image}")`
  };
  const currentUser = props.userId;
  const friend =
    <div className="row my-3 w-100 mx-auto justify-content-end">
      <div className="d-flex p-2 border rounded"><p className="m-auto">{props.message}</p></div>
      <div className="friend-image rounded-circle p-0 float-right ml-3" style={friendImage}></div>
    </div>;
  const user =
    <div className="row my-3 w-100 mx-auto">
      <div className="friend-image rounded-circle p-0 mr-3" style={userImage}></div>
      <div className="d-flex p-2 border rounded"><p className="m-auto">{props.message}</p></div>
    </div>;
  const messageView = props.recipientId === currentUser ? user : friend;

  return messageView;
}
