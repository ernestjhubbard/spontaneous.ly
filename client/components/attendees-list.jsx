import React from 'react';
import Attendee from './attendee';

class AttendeesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      attendees: []
    };
  }

  render() {
    const attendees = this.props.attendees.map(attendee =>
      <Attendee key={attendee.userId} firstName={attendee.firstName} lastName={attendee.lastName} image={attendee.image} />
    );
    return (
      <div className="container">
        <h4 className="bold-text d-flex justify-content-center m-3 overflow-auto">Attendees</h4>
        <div>
          {attendees}
        </div>
      </div>
    );
  }
}

export default AttendeesList;
