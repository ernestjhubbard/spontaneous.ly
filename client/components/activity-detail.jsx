import React from 'react';

class ActivityDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const activity = this.props.activity;
    const background = {
      backgroundImage: `linear-gradient(#801d8080, #ffc0cb80), url(assets/images/activity/${activity.image})`
    };
    return (
      <>
        <div className="activity-top-banner" style={background}>
          <h2 className="text-center text-white">{activity.activity}</h2>
        </div>

        <div className="activity-detail-container mx-auto">
          <div className="activity-detail mt-4">
            <div className="activity-text">
              <span className="bold-text">Location: </span>
              {activity.location}
            </div>
            <div className="activity-text">
              <span className="bold-text">Time: </span>
              {activity.dateTime}
            </div>
            <div className="activity-text">
              <span className="bold-text">Cost: $</span>
              {activity.cost}
            </div>
            <div className="activity-text">5 Users are joining in</div>
          </div>
          <div className="activity-description">
            <span className="bold-text">Description: </span>
            {activity.description}
          </div>
          <div className="button-container">
            <button
              className="confirm-button text-white"
              onClick={() => this.props.setView('confirm')}>Confirm</button>
            <button
              className="back-button ml-4"
              onClick={() => this.props.setView('activityList')}
            >
              Back
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default ActivityDetail;
