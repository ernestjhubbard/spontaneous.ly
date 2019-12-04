import React from 'react';
import Activity from './activity';

class UpcomingOrPastActivities extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activities: [] };
  }

  fetchActivities() {
    const conf = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    };
    fetch(`/api/upcoming-past-activities?activityType=${this.props.activityType}`, conf)
      .then(results => results.json())
      .then(activities => this.setState({ activities }))
      .catch(error => console.error('There was an error:', error.message));
  }

  componentDidMount() {
    this.fetchActivities();
  }

  componentDidUpdate(prevType) {
    if (this.props.activityType !== prevType.activityType) {
      this.fetchActivities();
    }
  }

  render() {
    const activities = this.state.activities;
    return (
      <div className="container">
        <h4 className="bold-text d-flex justify-content-center m-3 overflow-auto">{`${this.props.activityType}`} Adventures</h4>
        <div>
          {activities.map(activityInfo =>
            <Activity
              key={activityInfo.activityId}
              activityId={activityInfo.activityId}
              activityData={activityInfo}
              fetchActivity={this.props.fetchActivity}
              setView={this.props.setView}
              activityType={this.props.activityType}/>) }
        </div>
      </div>
    );
  }
}

export default UpcomingOrPastActivities;
