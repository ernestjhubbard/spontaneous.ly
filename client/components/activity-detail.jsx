import React from 'react';

class ActivityDetail extends React.Component {
  render() {
    return (
      <>
        <div className="activity-top-banner">
          <div className="text-center text-white">Activity Name</div>
        </div>

        <div className="activity-detail-container mx-auto">
          <div className="activity-detail mt-4">
            <div className="activity-text">
              <strong>Location: </strong>Laguna Beach
            </div>
            <div className="activity-text">
              <strong>Time: </strong>12/05/2019 @ 5:00PM PST
            </div>
            <div className="activity-text">
              <strong>Cost: </strong>$$
            </div>
            <div className="activity-text">5 Users are joining in</div>
          </div>
          <div className="activity-description">
            <strong>Description: </strong>Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ultrices gravida dictum fusce ut.
            Interdum velit laoreet id donec ultrices.
          </div>
          <div className="button-container">
            <button className="confirm-button text-white">Confirm</button>
            <button className="back-button ml-4">Back</button>
          </div>
        </div>
      </>
    );
  }
}

export default ActivityDetail;
