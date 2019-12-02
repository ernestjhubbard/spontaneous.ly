import React from 'react';

class ConfirmActivity extends React.Component {

  render() {
    return (
      <>
        <div className="confirmation-container mx-auto">
          <h2>Your Reservation is confirmed</h2>
          <h6>The event organizer has been notified of your reservation.</h6>
        </div>

        <div className="confirm-info mx-auto">
          <div className="activity-text">
            <span className="font-weight-bold">Location: </span>Laguna Beach
          </div>
          <div className="activity-text">
            <span className="font-weight-bold">Time: </span>MM/DD/YY @ HH:MM
          </div>
          <div className="activity-text">
            <span className="font-weight-bold">Cost: $</span>XX
          </div>
          <div className="activity-text">
            <span className="font-weight-bold">Spontaneity Points: </span>XX
          </div>
        </div>

        <div className="button-container mx-auto">
          <button className="back-home-button">Back to Home</button>
          <button className="cancel-button text-muted">Cancel Reservation</button>
        </div>
      </>
    );
  }
}

export default ConfirmActivity;
