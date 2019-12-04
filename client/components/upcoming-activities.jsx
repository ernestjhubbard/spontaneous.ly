import React from 'react';
import Activity from './activity';

class UpcomingActivities extends React.Component {
  constructor(props) {
    super(props);
    this.state = { upcomingActivities: [] };
  }

  componentDidMount() {
    const conf = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    };
    fetch('/api/upcoming-activities', conf)
      .then(results => results.json())
      .then(upcomingActivities => this.setState({ upcomingActivities }))
      .catch(error => console.error('There was an error:', error.message));
  }

  render() {
    const upcomingActivity = this.state.upcomingActivities;
    return (
      <div className="container my-5">
        <h4 className="bold-text d-flex justify-content-center">Upcoming Adventures</h4>
        <div>
          {upcomingActivity.map(activityInfo =>
            <Activity
              key={activityInfo.activityId}
              activityId={activityInfo.activityId}
              activityData={activityInfo}
              fetchActivity={this.props.fetchActivity}
              setView={this.props.setView} />) }
        </div>
      </div>
    );
  }
}

export default UpcomingActivities;
