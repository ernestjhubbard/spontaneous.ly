import React from 'react';
import Carousel from './carousel';

export default function ActivityList(props) {
  const rerollPoints = props.reroll;
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
        <Carousel setView={props.setView} getAttendees={props.getAttendees} fetch={props.fetch} filterCriteria={props.filterCriteria} />
        <p className="text-center">Not happy with these choices?</p>
        <p className="text-center"
          onClick={() => {
            rerollPoints(transactionType);
            props.setView('activityFilter');
          }}>
          <a href="#" className="reroll">
              Re-roll for 25 points.
          </a>
        </p>
      </div>
    </div>
  );
}
