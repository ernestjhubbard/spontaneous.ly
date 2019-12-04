import React from 'react';

class AttendeesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      attendees: []
    };
  }

  render() {
    return (
      <div className="container">
        <h4 className="bold-text d-flex justify-content-center m-3 overflow-auto">Attendees</h4>
        <div>
        </div>
      </div>
    );
  }
}

export default AttendeesList;
