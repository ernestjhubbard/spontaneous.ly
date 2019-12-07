import React from 'react';

class CancelModal extends React.Component {
  render() {
    return (
      <div className="confirm-cancel-modal container-fluid">
        <div className="inner-modal text-center p-3 rounded">
          <h3 className="mb-3">
            Are you sure you want to cancel your reservation?
          </h3>
          <h5>
            Cancelling costs you <span className="font-color">50</span>{' '}
            Spontaneity Points
          </h5>
          <div className="calc-button-50">
            <button
              className="spon-button-cancel rounded"
              onClick={() => {
                this.props.cancel({ activityId: this.props.activityId });
                this.props.history.push('/');
              }}>Confirm</button>
            <button className="spon-button text-white rounded" onClick={() => {
              this.props.changeModal();
            }}>Back</button>
          </div>
        </div>
      </div>
    );
  }
}

export default CancelModal;
