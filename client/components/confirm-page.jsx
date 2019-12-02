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
            <p className="font-weight-bold">
              <span className="bold-text">Location: </span>Laguna Beach
            </p>
          </div>
          <div className="activity-text">
            <span className="bold-text">Time: </span>MM/DD/YY @ HH:MM
          </div>
          <div className="activity-text">
            <span className="bold-text">Cost: </span>$XX
          </div>
          <div className="activity-text">
            <span className="bold-text">Spontaneity Points: </span>XX
          </div>
        </div>

        <div className="button-container mx-auto">
          <button className="back-home-button" onClick={() => this.props.setView('home')}>Back to Home</button>
          <button className="cancel-button text-muted">
            Cancel Reservation
          </button>
        </div>
      </>
    );
  }
}

export default ConfirmActivity;
