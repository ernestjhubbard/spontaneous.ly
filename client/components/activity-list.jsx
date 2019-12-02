import React from 'react';
import Carousel from './carousel';

class ActivityList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <div className="activity-list-hero top-banner d-flex">
          <div className="m-auto p-3">
            <h2 className="text-center text-white">Adventures in Your Area</h2>
            <p className="text-center text-white">Irvine, CA</p>
          </div>
        </div>
        <div className="container-fluid my-5">
          <Carousel />
        </div>
        <p className="text-center">Not happy with these choices?</p>
        <p className="text-center"><a href="#" className="reroll">Re-roll for 25 points.</a></p>
      </div>
    );
  }
}

export default ActivityList;
