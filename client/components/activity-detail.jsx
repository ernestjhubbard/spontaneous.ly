import React from 'react';
import { Link } from 'react-router-dom';
// import CancelModal from './cancel-modal';

class ActivityDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      activityData: '',
      usersAttending: 0
    };
    this.openModal = this.openModal.bind(this);
    this.checkUTC = this.checkUTC.bind(this);
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
      .then(attendees => this.setState({ usersAttending: attendees.length }))
      .catch(error => console.error('Error', error.message));
  }

  openModal() {
    this.setState({
      showModal: !this.state.showModal
    });
  }

  checkUTC(datetimeString) {
    let dateArray = [];
    if (datetimeString !== undefined) {
      const splitBySpace = datetimeString.split(' ');
      const joinedByColon = splitBySpace.join(':');
      const splitByColon = joinedByColon.split(':');
      const joinedByDash = splitByColon.join('-');
      const splitByDash = joinedByDash.split('-');
      dateArray = splitByDash.map(dateItem => parseInt(dateItem));
    }
    const utcTime = Date.UTC(dateArray[0], dateArray[1], dateArray[2], dateArray[3], dateArray[4], dateArray[5]);
    return (Date.now() < utcTime);
  }

  // getAttendees(activityId) {
  //   const config = {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   };
  //   fetch(`/api/reservations?activity=${activityId}`, config)
  //     .then(response => response.json())
  //     .then(attendees => console.log(attendees))
  //     .catch(error => console.error('Error', error.message));
  // }

  render() {
    const activity = this.state.activityData;
    const background = {
      backgroundImage: `linear-gradient(#801d8080, #ffc0cb80), url(/assets/images/activity/${activity.image})`
    };
    const isUpcoming = this.checkUTC(this.state.activityData.dateTime);
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
                {this.state.usersAttending}
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
        {isUpcoming ? <ConfirmOrCancel {...this.props} /> : <BackToPastActivitiesButton />}
      </>
    );
  }
}

export default ActivityDetail;

function ConfirmOrCancel() {

  return (
    <div className="container button-container calc-button-50 p-3 fixed-bottom">
      <button
        className="spon-button rounded text-white mt-0"
        onClick={() => {
          const activityId = this.state.activityData.activityId;
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
    </div>

  );
}

// function CancelButtons() {
//   return (
//     <>
//       <button
//         className="spon-button rounded text-white mt-0"
//         onClick={this.openModal}>
//       Cancel
//       </button>
//       {this.state.showModal ? (
//         <CancelModal
//           cancel={this.props.cancel}
//           activityId={this.props.activity.activityId}
//         />
//       ) : null}
//       <button
//         className="spon-button-alt rounded mt-0">
//       Back
//       </button>

//     </>
//   );
// }

function BackToPastActivitiesButton() {
  return (
    <div className="container button-container p-3 fixed-bottom">
      <Link to="/profile/past-activities">
        <button
          className="spon-button-alt rounded w-100 mt-0 mx-auto"
        >
    Back
        </button>
      </Link>
    </div>
  );
}

// function whichButton() {
//   this.props.view === 'activityDetail' ? confirmButton : cancelButton;
//   if (this.props.view === 'activityDetailPast') {
//     whichButton = backToPastActivitiesButton;
//   }
// }
