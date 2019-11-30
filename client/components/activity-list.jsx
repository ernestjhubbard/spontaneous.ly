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
      <div className="">
        <div className="top-banner d-flex">
          <div className="m-auto p-3">
            <h2 className="text-center text-white">Adventures in Your Area</h2>
            <p className="text-center text-white">Irvine, CA</p>
          </div>
        </div>
        <div className="container-fluid my-5">
          {activityCard}
        </div>
      </div>
    );
  }
}

export default ActivityList;
