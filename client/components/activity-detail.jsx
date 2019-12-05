import React from 'react';
import CancelModal from './cancel-modal';

class ActivityDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({
      showModal: !this.state.showModal
    });
  }

  render() {
    const activity = this.props.activity;
    const background = {
      backgroundImage: `linear-gradient(#801d8080, #ffc0cb80), url(/assets/images/activity/${activity.image})`
    };
    const confirmButton = (
      <>
        <button
          className="spon-button rounded text-white mt-0"
          onClick={() => {
            const activityId = activity.activityId;
            this.props.reserve({ activityId });
            this.props.history.push('/activity-details/confirmed');
          }}>
          Confirm
        </button>
        <button
          className="spon-button-alt rounded mt-0"
          onClick={() => {
            this.props.history.push('/activity-list');
          }}>
          Back
        </button>
      </>
    );

    const cancelButton = (
      <>
        <button
          className="spon-button rounded text-white mt-0"
          onClick={this.openModal}
        >
          Cancel
        </button>
        {this.state.showModal ? (
          <CancelModal
            cancel={this.props.reserve}
            activityId={activity.activityId}
          />
        ) : null}
        <button
          className="spon-button-alt rounded mt-0"
        >
          Back
        </button>
      </>
    );

    const backToPastActivitiesButton = (
      <button
        className="spon-button-alt rounded mt-0 mx-auto"
      >
        Back
      </button>
    );

    let whichButton =
      this.props.view === 'activityDetail' ? confirmButton : cancelButton;
    if (this.props.view === 'activityDetailPast') {
      whichButton = backToPastActivitiesButton;
    }

    return (
      <>
        <div className="top-banner d-flex" style={background}>
          <div className="m-auto p-3">
            <h2 className="text-center text-white">{activity.activity}</h2>
          </div>
        </div>
        <div className="container my-5 mx-auto">
          <div className="p-2 border rounded mb-3">
            <p className="mb-2">
              <span className="bold-text">Location: </span>
              {activity.location}
            </p>
            <p className="mb-2">
              <span className="bold-text">Time: </span>
              {activity.dateTime}
            </p>
            <p className="mb-2">
              <span className="bold-text">Cost: </span>${activity.cost}
            </p>
            <p className="mb-0">
              <span className="user-count text-white rounded d-inline-flex justify-content-center align-items-center">
                {this.props.attendees.length}
              </span>{' '}
              Users are joining in
            </p>
          </div>
          <div className="activity-description">
            <p>
              <small>
                <span className="bold-text">Description: </span>
                {activity.description}
              </small>
            </p>
          </div>
        </div>
        <div className="container button-container calc-button-50 p-3 fixed-bottom">
          {whichButton}
        </div>
      </>
    );
  }
}

export default ActivityDetail;
