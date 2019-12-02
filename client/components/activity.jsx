import React from 'react';

function Activity(props) {
  const activityInfo = props.activityData;
  return (
    <div className="row border rounded m-2">
      <div className="activity-thumbnail rounded" style={{ backgroundImage: `url(assets/images/activity/${activityInfo.image}` }}></div>
      <div className="container">
        <div className="">{activityInfo.activity}</div>
        <div className="">{activityInfo.dateTime}</div>
        <div className="">{activityInfo.points} Spontaneity Points</div>
      </div>
    </div>
  );
}

export default Activity;
