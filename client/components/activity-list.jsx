import React from 'react';
import Carousel from './carousel';

class ActivityList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activities: []
    };
    this.getAllActivities = this.getAllActivities.bind(this);
  }

  componentDidMount() {
    this.getAllActivities();
  }

  getAllActivities() {
    fetch('api/all-activities')
      .then(response => response.json())
      .then(activityList => {
        const listedActivities = this.state.activities.concat(activityList);
        this.setState({ activities: listedActivities });
      })
      .catch(error => console.error('Fetch error: ', error));

  }

  render() {
    var activityCard = this.state.activities.map(activity => {
      return (
        <Carousel key={activity.activityId} id={activity.activityId} image={activity.image} name={activity.activity} />
      );
    });
    return (
      <div className="container">
        <div className="top-banner">
          <div className="gradient-bg"/>
          <div className="banner-text text">Adventures in Your Area</div>
          <div className="location-text text">Irvine, CA</div>
        </div>
        <div>
          {activityCard}
        </div>
      </div>
    );
  }
}

export default ActivityList;
