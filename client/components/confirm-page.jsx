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
          <div className="activity-text ml-2 mt-2">
            <p>
              <span className="bold-text">Location: </span>Laguna Beach
            </p>
          </div>
          <div className="activity-text ml-2">
            <p>
              <span className="bold-text">Time: </span>MM/DD/YY @ HH:MM
            </p>
          </div>
          <div className="activity-text ml-2">
            <p>
              <span className="bold-text">Cost: </span>$XX
            </p>
          </div>
          <div className="activity-text ml-2">
            <p>
              <span className="bold-text">Spontaneity Points: </span>
              <span className="point p-1">XX</span>
            </p>
          </div>
        </div>

        <div className="container mx-auto text-center">
          <div
            className="back-home-button w-100"
            onClick={() => this.props.setView('home')}
          >
            Back to Home
          </div>
          <div className="cancel-button w-100 mt-2">
            Cancel Reservation
          </div>
        </div>
      </>
    );
  }
}

export default ConfirmActivity;
