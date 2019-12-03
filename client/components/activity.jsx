import React from 'react';

function Activity(props) {
  const activityInfo = props.activityData;

  return (
    <div className="row border rounded m-3">
      <div className="activity-thumbnail border rounded m-1" style={{ backgroundImage: `url(assets/images/activity/${activityInfo.image}` }}></div>
      <div className="m-3">
        <div className="">{activityInfo.activity}</div>
        <div className="text-muted">{activityInfo.dateTime}</div>
        <div className="">
          <p className="mb-0">
            <small>
              <span className="points d-inline-flex justify-content-center align-items-center mr-2">{activityInfo.points}</span>
            Spontaneity Points
            </small>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Activity;
