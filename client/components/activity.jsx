import React from 'react';

function Activity(props) {
  const activityInfo = props.activityData;
  return (
    <div className="row border rounded m-3">
      <div className="activity-thumbnail border rounded m-1" style={{ backgroundImage: `url(assets/images/activity/${activityInfo.image}` }}></div>
      <div className="">
        <div className="">{activityInfo.activity}</div>
        <div className="">{activityInfo.dateTime}</div>
        <div className="">{activityInfo.points} Spontaneity Points</div>
      </div>
    </div>
  );
}

export default Activity;
