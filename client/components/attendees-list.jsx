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
        <div className="position-relative">
          <div className="back-chevron rounded border d-flex position-absolute" onClick={() => this.props.history.goBack()}>
            <i className="fas fa-chevron-left m-auto"></i>
          </div>
          <h4 className="d-flex justify-content-center">Attendees</h4>
        </div>
        <div className="message-container">{attendees}</div>
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
