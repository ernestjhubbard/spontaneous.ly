import React from 'react';

class ConfirmActivity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.cancelActivity = this.cancelActivity.bind(this);
  }

  componentDidMount() {
    this.cancelActivity();
  }

  cancelActivity({ activityId }) {
    const config = {
      method: 'POST',
      body: JSON.stringify({ activityId }),
      headers: {
        'Content-Type': 'application/json'
      }
    };
    fetch('/api/reservations', config)
      .then(results => results.json())
      .then();
  }

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

        <div className="modal hidden">
          <div className="modal-content">
            <h1>Are you sure you want to cancel your reservation?</h1>
            <h5>Cancelling costs you <span className="font-color">50</span> Spontaneity Points</h5>
            <button className="cancel-confirm-button">Confirm</button>
            <button className="cancel-back-button">Back</button>
          </div>
        </div>
      </>
    );
  }
}

export default ConfirmActivity;
