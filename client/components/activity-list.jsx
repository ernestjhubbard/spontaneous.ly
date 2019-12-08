import React from 'react';
import Carousel from './carousel';
import Footer from './footer';

export default class ActivityList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activities: []
    };
  }

  componentDidMount() {
    const searchParams = new URLSearchParams(window.location.search);
    fetch(`/api/all-activities?${searchParams.toString()}`)
      .then(response => response.json())
      .then(activityList => {
        const listedActivities = this.state.activities.concat(activityList);
        this.setState({ activities: listedActivities });
      })
      .catch(error => console.error('Fetch error: ', error));
  }

  render() {
    const rerollPoints = this.props.reroll;
    const transactionType = { transactionType: 'reroll' };
    return (
      <div>
        <div className="activity-list-hero top-banner d-flex">
          <div className="m-auto p-3">
            <h2 className="text-center text-white">Adventures in Your Area</h2>
            <p className="text-center text-white">Irvine, CA</p>
          </div>
        </div>
        <div className="container-fluid my-5">
          <Carousel {...this.props} activities={this.state.activities} getAttendees={this.props.getAttendees} />
          <p className="text-center">Not happy with these choices?</p>
          <p className="text-center">
            <a href="" className="reroll" onClick={() => {
              rerollPoints(transactionType);
              this.props.history.goBack();
            }}>
            Re-roll for 25 points.
            </a>
          </p>
        </div>
        <Footer />
      </div>
    );
  }
}
