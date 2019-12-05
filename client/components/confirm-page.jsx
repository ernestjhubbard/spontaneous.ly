import React from 'react';
import CancelModal from './cancel-modal';
import {
  Link
} from 'react-router-dom';

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

  componentDidMount() {
    this.props.getAttendees(this.props.activity.activityId);
  }

  render() {
    return (
      <div className="container my-5">
        <div className="mb-3">
          <h2>Your Reservation is confirmed</h2>
          <h6>The event organizer has been notified of your reservation.</h6>
        </div>
        <div className="border rounded p-2">
          <p>
            <span className="bold-text">Location: </span>
            {this.props.activity.location}
          </p>
          <p>
            <span className="bold-text">Time: </span>
            {this.props.activity.dateTime}
          </p>
          <p>
            <span className="bold-text">Cost: </span>${this.props.activity.cost}
          </p>
          <p>
            <span className="bold-text">Total Guests: </span>{' '}
            <Link to={`/activity-details/attendees/${this.props.activity.activityId}`}>
              <span className="point p-1">{this.props.attendees.length}</span>
            </Link>
          </p>
          <p className="mb-0">
            <span className="bold-text">Spontaneity Points: </span>
            <span className="badge confirmed-badge text-white">{this.props.activity.points}</span>
          </p>
        </div>
        <div className="container mx-auto text-center fixed-bottom p-3">
          <button className="spon-button text-white rounded w-100" onClick={() => alert('This was pressed')}>Back to Home</button>
          <button className="spon-link-cancel rounded w-100" onClick={this.openModal}>Cancel Reservation</button>
        </div>
        {this.state.showModal
          ? <CancelModal {...this.props}
            closeModal={this.openModal}
            cancel={this.props.reserve}
            activityId={this.props.activity.activityId} />
          : null}
      </div>
    );
  }
}

export default ConfirmActivity;
