import React from 'react';
import Activity from './activity';

class UpcomingOrPastActivities extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activities: [] };
  }

  getSearchParams() {
    const searchParams = new URLSearchParams(window.location.search);
    return searchParams.toString();
  }

  fetchActivities(userId) {
    fetch(`/api/upcoming-past-activities?${userId}&activityType=${this.props.activityType}`)
      .then(results => results.json())
      .then(activities => this.setState({ activities }))
      .catch(error => console.error('There was an error:', error.message));
  }

  componentDidMount() {
    const params = this.getSearchParams();
    this.fetchActivities(params);
  }

  componentDidUpdate(prevType) {
    const params = this.getSearchParams();
    if (this.props.activityType !== prevType.activityType) {
      this.fetchActivities(params);
    }
  }

  render() {
    const activities = this.state.activities;
    return (
      <div className="container my-5">
        <div className="position-relative mb-3">
          <div className="back-chevron rounded border d-flex position-absolute" onClick={() => this.props.history.goBack()}>
            <i className="fas fa-chevron-left m-auto"></i>
          </div>
          <h4 className="d-flex justify-content-center">
            {`${this.props.activityType}`} Adventures
          </h4>
        </div>
        <div className="activity-container">
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
      </div>
    );
  }
}

export default UpcomingOrPastActivities;
