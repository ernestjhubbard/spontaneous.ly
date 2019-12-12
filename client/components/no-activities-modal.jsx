import React from 'react';

class NoActivitiesModal extends React.Component {
  render() {
    return (
      <div className="confirm-cancel-modal container-fluid">
        <div className="inner-modal text-center p-3 rounded fade-in">
          <h3 className="mb-3">
            There were no activities that matched your criteria.
          </h3>
          <h5>
            Please adjust your search, and try again!
          </h5>
          <button
            className="spon-button text-white rounded w-100"
            onClick={() => {
              this.props.history.push('/activity-filter');
            }}>Back</button>
        </div>
      </div>
    );
  }
}

export default NoActivitiesModal;
