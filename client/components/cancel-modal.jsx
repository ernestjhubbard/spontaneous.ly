import React from 'react';
import { Link } from 'react-router-dom';

class CancelModal extends React.Component {

  render() {
    return (
      <div className="confirm-cancel-modal container">
        <div className="inner-modal text-center p-3 rounded">
          <h3 className="mb-3">
            Are you sure you want to cancel your reservation?
          </h3>
          <h5>
            Cancelling costs you <span className="font-color">50</span>{' '}
            Spontaneity Points
          </h5>
          <div className="calc-button-50">
            <Link to="/">
              <button
                className="spon-button-cancel rounded"
                onClick={() => {
                  const activityId = this.props.activityId;
                  this.props.cancel({ activityId });
                  this.props.closeModal();
                  this.props.history.push('/');
                }}
              >
                Confirm
              </button>
            </Link>
            <Link to="/">
              <button
                className="spon-button text-white rounded"
              >
                Back
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default CancelModal;
