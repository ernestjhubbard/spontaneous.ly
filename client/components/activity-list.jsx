import React from 'react';
import Carousel from './carousel';
import ActivityDetail from './activity-detail';

class ActivityList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'default',
      activityClicked: {}
    };
    this.setView = this.setView.bind(this);
    this.fetchDetail = this.fetchDetail.bind(this);
  }

  setView(view) {
    this.setState({ view });
  }

  render() {
    const currentView = this.state.view;
    const carousel =
      <div>
        <div className="top-banner activity-list-hero d-flex">
          <div className="m-auto p-3">
            <h2 className="text-center text-white">Adventures in Your Area</h2>
            <p className="text-center text-white">Irvine, CA</p>
          </div>
        </div>
        <div className="container-fluid my-5">
          <Carousel setView={this.setView} fetch={this.fetchDetail}/>
        </div>
      </div>;
    const view = currentView === 'default' ? carousel : <ActivityDetail setView={this.setView} activity={this.state.activityClicked}/>;
    return view;
  }

  fetchDetail({ activityId }) {
    const config = {
      method: 'POST',
      body: JSON.stringify({ activityId }),
      headers: {
        'Content-Type': 'application/json'
      }
    };
    fetch('/api/activity-details', config)
      .then(results => results.json())
      .then(data => this.setState({ activityClicked: data }));

  }

}

export default ActivityList;
