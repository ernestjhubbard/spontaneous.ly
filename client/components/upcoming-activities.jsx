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
      <div className="container">
        <h3 className="d-flex justify-content-center m-3 overflow-auto">Upcoming Adventures</h3>
        <div>
          { upcomingActivity.map(activityInfo => <Activity key={activityInfo.activityId} activityData={activityInfo} />) }
        </div>
      </div>
    );
  }
}

export default UpcomingActivities;
