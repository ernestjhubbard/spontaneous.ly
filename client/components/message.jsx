import React from 'react';
//
export default function Message(props) {
  const friendImage = {
    backgroundImage: `url("assets/images/users/${props.friend.image}")`
  };
  const userImage = {
    backgroundImage: `url("assets/images/users/${props.image}")`
  };
  const currentUser = props.userId;
  const friend =
    <div className="row my-3 w-100 mx-auto">
      <button className="col-9 friend-button border rounded my-0 mx-1">{props.message}</button>
      <div className="col-2 friend-image rounded-circle p-0 float-right" style={userImage}></div>
    </div>;
  const user =
    <div className="row my-3 w-100 mx-auto">
      <div className="col-2 friend-image rounded-circle p-0" style={friendImage}></div>
      <button className="col-9 friend-button border rounded my-0 mx-1">{props.message}</button>
    </div>;
  const messageView = props.recipientId === currentUser ? user : friend;

  return messageView;
}
