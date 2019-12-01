import React from 'react';

export default function Message(props) {
  return (
    <div className="row my-3 w-100 d-flex justify-content-evenly">
      <div className="col-2 friend-image rounded-circle p-0 mr-4"></div>
      <button className="friend-button border rounded my-0 mx-1">{props.message}</button>
      <div className="col-2 send-message"></div>
    </div>
  );
}
