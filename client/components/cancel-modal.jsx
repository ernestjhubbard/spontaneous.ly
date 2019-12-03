import React from 'react';

class CancelModal extends React.Component {

  render() {
    return (
      <div className="confirm-cancel-modal">
        <div className="modal-content text-center">
          <h1>Are you sure you want to cancel your reservation?</h1>
          <h5>
            Cancelling costs you <span className="font-color">50</span>{' '}
            Spontaneity Points
          </h5>
          <button className="cancel-confirm-button">Confirm</button>
          <button className="cancel-back-button">Back</button>
        </div>
      </div>
    );
  }
}

export default CancelModal;
