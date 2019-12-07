import React from 'react';
import Activity from './activity';

class UpcomingOrPastActivities extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activities: [] };
  }

  fetchActivities() {
    fetch(`/api/upcoming-past-activities?activityType=${this.props.activityType}`)
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
        <div className="message-container">
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
}

export default UpcomingOrPastActivities;
