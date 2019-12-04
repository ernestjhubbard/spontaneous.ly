import React from 'react';
import CancelModal from './cancel-modal';
import { Link } from 'react-router-dom';
class ConfirmActivity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({
      showModal: !this.state.showModal
    });
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
              <span className="bold-text">Location: </span>{' '}
              {this.props.activity.location}
            </p>
          </div>
          <div className="activity-text ml-2">
            <p>
              <span className="bold-text">Time: </span>
              {this.props.activity.dateTime}
            </p>
          </div>
          <div className="activity-text ml-2">
            <p>
              <span className="bold-text">Cost: </span>${this.props.activity.cost}
            </p>
          </div>
          <div className="activity-text ml-2 mt-2">
            <p onClick={() => this.props.setView('attendeesList')}>
              <span className="bold-text">Total Guests: </span>{' '}
              <span className="point p-1">{this.props.attendees.length}</span>
            </p>
          </div>
          <div className="activity-text ml-2">
            <p>
              <span className="bold-text">Spontaneity Points: </span>
              <span className="point p-1">{this.props.activity.points}</span>
            </p>
          </div>
        </div>

        <div className="container mx-auto text-center">

          <Link to="/">
            <button className="spon-button text-white rounded w-100">Back to Home</button>
          </Link>
          <button className="cancel-button w-100 mt-2" onClick={this.openModal}>Cancel Reservation</button>
          {this.state.showModal
            ? <CancelModal
              closeModal={this.openModal}
              cancel={this.props.reserve}
              activityId={this.props.activity.activityId} />
            : null}
        </div>
      </>
    );
  }
}

export default ConfirmActivity;
