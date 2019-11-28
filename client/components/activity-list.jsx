import React from 'react';
import Carousel from './carousel';

class ActivityList extends React.Component {

  render() {
    return (
      <div className="container">
        <div className="top-banner">
          <div className="gradient-bg"/>
          <div className="banner-text text">Adventures in Your Area</div>
          <div className="location-text text">Irvine, CA</div>
        </div>
        <div>
          <Carousel />
        </div>
      </div>
    );
  }
}

export default ActivityList;
