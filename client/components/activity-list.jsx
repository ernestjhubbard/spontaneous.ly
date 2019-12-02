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
        <div className="top-banner d-flex">
          <div className="m-auto p-3">
            <h2 className="text-center text-white">Adventures in Your Area</h2>
            <p className="text-center text-white">Irvine, CA</p>
          </div>
        </div>
        <div className="container-fluid my-5">
          <Carousel />
        </div>
      </div>
    );
  }
}

export default ActivityList;
