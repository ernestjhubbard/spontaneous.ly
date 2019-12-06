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
      <div className="container my-5">
        <h4 className="d-flex justify-content-center">
          {`${this.props.activityType}`} Adventures
        </h4>
        <div>
          {activities.map(activityInfo => (
            <Activity
              {...this.props}
              key={activityInfo.activityId}
              activityId={activityInfo.activityId}
              activityData={activityInfo}
              fetchActivity={this.props.fetchActivity}
              activityType={this.props.activityType}
            />
          ))}
        </div>
        <button
          className="spon-button-alt fixed-bottom rounded w-100"
          onClick={() => this.props.history.goBack()}
        >
          Back
        </button>
      </div>
    );
  }
}

export default UpcomingOrPastActivities;
