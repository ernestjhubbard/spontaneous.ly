import React from 'react';

class CancelModal extends React.Component {

  render() {
    return (
      <div className="confirm-cancel-modal">
        <div className="inner-modal text-center">
          <h1 className="mt-2">Are you sure you want to cancel your reservation?</h1>
          <h5>
            Cancelling costs you <span className="font-color">50</span>{' '}
            Spontaneity Points
          </h5>
          <button
            className="cancel-confirm-button"
            onClick={() => {
              const activityId = this.props.activityId;
              this.cancelActivity({ activityId });
              this.props.closeModal();
            }}>Confirm</button>
          <button className="cancel-back-button ml-2" onClick={this.props.closeModal}>Back</button>
        </div>
      </div>
    );
  }
}

export default CancelModal;
