import React from 'react';

function Activity(props) {
  const activityId = props.activityId;
  const activityInfo = props.activityData;
  const dateTime = activityInfo.dateTime;
  const separationIndex = dateTime.indexOf(' ');
  const timeIndex = dateTime.lastIndexOf(':');
  let date = dateTime.slice(2, separationIndex);
  date = formatDate(date);
  let time = dateTime.slice(separationIndex + 1, timeIndex);
  time = formatTime(time);

  return (
    <div className="adventure d-flex border rounded mb-3" onClick={() => {
      props.history.push(`/activity-details?activityId=${activityId}`);
    }}>
      <div className="activity-thumbnail border rounded m-1" style={{ backgroundImage: `url(/assets/images/activity/${activityInfo.image}` }}></div>
      <div className="m-3">
        <div className="bold-text">{activityInfo.activity}</div>
        <div className="text-muted"><small>{date + ', ' + time}</small></div>
        <p className="mb-0 mt-1">
          <small>
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
  const monthDateIndex = newDate.lastIndexOf('/');
  let monthDate = newDate.slice(0, monthDateIndex);
  monthDate = monthDate.split('/').reverse().join('').split(' ').reverse().join(' ');
  newDate = [monthDate.slice(0, 2), '/', monthDate.slice(2, 4), '/', newDate.slice(6, 8)].join('');
  return newDate;
}

function formatTime(string) {
  let hour = parseInt(string[0] + string[1]);
  const minuteIndex = string.indexOf(':');
  let timeString;
  if (hour < 12) {
    timeString = string + 'AM';
  } else if (hour >= 12) {
    if (hour > 12) {
      hour = hour - 12;
    }
    timeString = hour + string.slice(minuteIndex, string.length) + 'PM';
  }
  return timeString;
}

export default Activity;
