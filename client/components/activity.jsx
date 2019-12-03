import React from 'react';

function Activity(props) {
  const activityInfo = props.activityData;
  const dateTime = activityInfo.dateTime;
  const separationIndex = dateTime.indexOf(' ');
  const timeIndex = dateTime.lastIndexOf(':');
  let date = dateTime.slice(2, separationIndex);
  date = formatDate(date);
  let time = dateTime.slice(separationIndex + 1, timeIndex);
  time = formatTime(time);

  return (
    <div className="row border rounded m-3">
      <div className="activity-thumbnail border rounded m-1" style={{ backgroundImage: `url(assets/images/activity/${activityInfo.image}` }}></div>
      <div className="m-3">
        <div className="bold-text">{activityInfo.activity}</div>
        <div className="text-muted">{date + ' ' + time}</div>
        <p className="mb-0">
          <small className="bold-text">
            <span className="points d-inline-flex justify-content-center align-items-center mr-2">{activityInfo.points}</span>
            Spontaneity Points
          </small>
        </p>
      </div>
    </div>
  );
}

function formatDate(string) {
  let newDate = string.split('-').reverse().join('').split(' ').reverse().join(' ');
  newDate = [newDate.slice(0, 2), '/', newDate.slice(2, 4), '/', newDate.slice(4, 6)].join('');
  return newDate;
}

function formatTime(string) {
  let hour = parseInt(string[0] + string[1]);
  const minuteIndex = string.indexOf(':');
  let timeString;
  if (hour < 12) {
    timeString = string + 'AM';
  } else if (hour === 12 || hour > 12) {
    hour = hour - 12;
    timeString = hour + string.slice(minuteIndex, string.length) + 'PM';
  }
  return timeString;
}

export default Activity;
