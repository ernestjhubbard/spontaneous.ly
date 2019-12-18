import React from 'react';

class CancelModal extends React.Component {
  render() {
    const cancelText = (
      <>
        <h3 className="mb-3">
          Are you sure you want to cancel your reservation?
        </h3>
        <h5>
          Cancelling costs you <span className="font-color">50</span>{' '}
          Spontaneity Points
        </h5>
      </>
    );
    const cancelButton = (
      <>
        <button
          className="spon-button-cancel rounded"
          onClick={() => {
            this.props.cancel({ activityId: this.props.activityId });
            this.props.history.push('/');
            this.props.transaction({ transactionType: 'cancellation', activityId: this.props.activityId });
          }}>Confirm</button>
        <button className="spon-button text-white rounded" onClick={() => {
          this.props.changeModal();
        }}>Back</button>
      </>
    );
    return (
      <div className="confirm-cancel-modal container-fluid">
        <div className="inner-modal text-center p-3 rounded">
          {this.props.points - 50 <= 0 ? <h3>You do not have enough points available to cancel your reservation.</h3> : cancelText}
          <div className="calc-button-50">
            {this.props.points - 50 <= 0
              ? <button className="spon-button text-white rounded w-100" onClick={() => {
                this.props.changeModal();
              }}>Back</button>
              : cancelButton}
          </div>
        </div>
      </div>
    );
  }
}

export default CancelModal;
