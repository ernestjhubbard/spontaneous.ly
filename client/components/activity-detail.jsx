import React from 'react';
import CancelModal from './cancel-modal';

class ActivityDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      activityData: '',
      usersAttending: '',
      isConfirmed: false
    };
    this.changeModal = this.changeModal.bind(this);
    this.checkUTC = this.checkUTC.bind(this);
    this.checkIfConfirmed = this.checkIfConfirmed.bind(this);
  }

  componentDidMount() {
    const config = {
      method: 'GET'
    };
    fetch(`/api/activity-details?activityId=${this.props.match.params.id}`, config)
      .then(response => response.json())
      .then(activityDetails => this.setState({ activityData: activityDetails }))
      .catch(error => console.error('Fetch error: ', error));

    fetch(`/api/reservations?activity=${this.props.match.params.id}`, config)
      .then(response => response.json())
      .then(attendees => {
        this.setState({ usersAttending: attendees });
        this.checkIfConfirmed(this.props.user.userId);
      })
      .catch(error => console.error('Error', error.message));
  }

  changeModal() {
    this.setState({
      showModal: !this.state.showModal
    });
  }

  checkUTC(datetimeString) {
    let dateArray = [];
    let eventUtc = 0;
    const date = new Date();
    const currentDate = [date.getFullYear(), (date.getMonth() + 1), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds()];
    let currentUtc = 0;
    if (datetimeString !== undefined) {
      const splitDate = datetimeString.split(' ').join(':').split(':').join('-').split('-');
      dateArray = splitDate.map(dateItem => parseInt(dateItem));
      eventUtc = Date.UTC(dateArray[0], dateArray[1], dateArray[2], dateArray[3], dateArray[4], dateArray[5]);
      currentUtc = Date.UTC(currentDate[0], currentDate[1], currentDate[2], currentDate[3], currentDate[4], currentDate[5]);
    }
    return (currentUtc <= eventUtc);
  }

  checkIfConfirmed(loggedInUserId) {
    for (let loopIndex = 0; loopIndex < this.state.usersAttending.length; loopIndex++) {
      if (this.state.usersAttending[loopIndex].userId === loggedInUserId) {
        this.setState({ isConfirmed: true });
      }
    }
  }

  render() {
    const activity = this.state.activityData;
    const background = {
      backgroundImage: `linear-gradient(#801d8080, #ffc0cb80), url(/assets/images/activity/${activity.image})`
    };

    const isUpcoming = this.checkUTC(this.state.activityData.dateTime);
    const showModal = this.state.showModal;

    return (
      <div>
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
                {this.state.usersAttending.length}
              </span> Users are joining in
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
        <div className="fade-in">
          {isUpcoming ? <DynamicReserveOrCancel {...this.props}
            isConfirmed={this.state.isConfirmed}
            changeModal={this.changeModal}
            activityId={this.props.match.params.id} /> : <BackToPastActivitiesButton {...this.props} />}
          {showModal ? <CancelModal {...this.props}
            activityId={this.props.match.params.id}
            changeModal={this.changeModal}
            cancel={this.props.reserve}/> : null}
        </div>
      </div>
    );
  }
}

export default ActivityDetail;

function DynamicReserveOrCancel(props) {
  return (
    <div className="container button-container calc-button-50 p-3 fixed-bottom">
      <ConfirmOrCancelButton isConfirmed={props.isConfirmed} {...props} />
      <button
        className="spon-button-alt rounded mt-0"
        onClick={() => {
          props.history.goBack();
        }}>
            Back
      </button>
    </div>
  );
}

function ConfirmOrCancelButton(props) {
  if (props.isConfirmed) {
    return (
      <button
        className="spon-link-cancel rounded mt-0"
        onClick={() => {
          props.changeModal();
        }}>
        Cancel
      </button>
    );
  }
  return (
    <button
      className="spon-button rounded text-white mt-0"
      onClick={() => {
        props.reserve({ activityId: props.activityId });
        props.history.push(`/activity-details/${props.activityId}/confirmed`);
      }}>
      Confirm
    </button>
  );
}

function BackToPastActivitiesButton(props) {
  return (
    <div className="container button-container p-3 fixed-bottom">
      <button
        className="spon-button-alt rounded w-100 mt-0 mx-auto"
        onClick={() => props.history.goBack()}>
        Back
      </button>
    </div>
  );
}
