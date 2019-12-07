import React from 'react';
import Attendee from './attendee';

class AttendeesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      attendees: []
    };
  }

  componentDidMount() {
    const searchParams = new URLSearchParams(window.location.search);
    this.getAttendees(searchParams.toString());
  }

  render() {
    const attendees = this.state.attendees.map(attendee =>
      <Attendee
        viewProfile={this.props.history.push}
        key={attendee.userId}
        userId={attendee.userId}
        firstName={attendee.firstName}
        lastName={attendee.lastName}
        image={attendee.image} />
    );
    return (
      <div className="container my-5">
        <h4 className="d-flex justify-content-center">Attendees</h4>
        <div className="message-container">{attendees}</div>
        <div className="button-container fixed-bottom p-3">
          <button
            className="spon-button-alt rounded mt-0 w-100"
            onClick={() => this.props.history.goBack()}
          >
            Back
          </button>
        </div>
      </div>
    );
  }

  getAttendees(activityId) {
    fetch(`/api/reservations?${activityId}`)
      .then(response => response.json())
      .then(attendees => this.setState({ attendees }))
      .catch(error => console.error('Error:', error));
  }
}

export default AttendeesList;
