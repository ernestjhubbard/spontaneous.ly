import React from 'react';
import Activity from './activity';

class PastActivities extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pastActivities: [] };
  }

  componentDidMount() {
    const conf = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    };
    fetch('/api/past-activities', conf)
      .then(results => results.json())
      .then(pastActivities => this.setState({ pastActivities }))
      .catch(error => console.error('There was an error:', error.message));
  }

  render() {
    const pastActivity = this.state.pastActivities;
    return (
      <div className="container">
        <h4 className="bold-text d-flex justify-content-center m-3 overflow-auto">Past Adventures</h4>
        <div>
          {pastActivity.map(activityInfo =>
            <Activity
              key={activityInfo.activityId}
              activityId={activityInfo.activityId}
              activityData={activityInfo}
              fetchActivity={this.props.fetchActivity}
              setView={this.props.setView} />)}
        </div>
      </div>
    );
  }
}

export default PastActivities;
