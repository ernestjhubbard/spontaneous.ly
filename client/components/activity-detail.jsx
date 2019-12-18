import React from 'react';
import CancelModal from './cancel-modal';
import ActivityDetailButtons from './activity-detail-buttons';
import { Link } from 'react-router-dom';

class ActivityDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      activityData: '',
      usersAttending: null,
      isConfirmed: false,
      isRetrieving: true
    };
    this.changeModal = this.changeModal.bind(this);
    this.checkUTC = this.checkUTC.bind(this);
    this.checkIfConfirmed = this.checkIfConfirmed.bind(this);
  }

  componentDidMount() {
    const activityParams = new URLSearchParams(window.location.search);
    fetch(`/api/activity-details?${activityParams.toString()}`)
      .then(response => response.json())
      .then(activityDetails => this.setState({ activityData: activityDetails }))
      .catch(error => console.error('Fetch error: ', error));

    fetch(`/api/reservations?${activityParams.toString()}`)
      .then(response => response.json())
      .then(attendees => {
        this.setState({ usersAttending: attendees, isRetrieving: false });
        if (this.props.user) {
          this.checkIfConfirmed(this.props.user.userId);
        }
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
    if (this.state.isRetrieving === true) {
      return null;
    }
    const isConfirmed = this.state.isConfirmed;
    let routePath = null;
    const activity = this.state.activityData;
    const background = {
      backgroundImage: `linear-gradient(#801d8080, #ffc0cb80), url(/assets/images/activity/${activity.image})`
    };
    const isUpcoming = this.checkUTC(this.state.activityData.dateTime);
    const showModal = this.state.showModal;
    if (isConfirmed) {
      routePath = `/attendees?activityId=${activity.activityId}`;
    }

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
            <p className="mb-0 text-body">
              <AttendeeList
                isConfirmed={isConfirmed}
                routePath={routePath}
                usersAttending={this.state.usersAttending}/>
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
          <ActivityDetailButtons {...this.props}
            transaction={this.props.transaction}
            user={this.props.user}
            points={this.props.points}
            isConfirmed={this.state.isConfirmed}
            changeModal={this.changeModal}
            activityId={this.state.activityData.activityId}
            cancel={this.props.reserve}
            isUpcoming={isUpcoming}/>
          {showModal ? <CancelModal {...this.props}
            points={this.props.points}
            activityId={this.state.activityData.activityId}
            changeModal={this.changeModal}
            cancel={this.props.reserve}/> : null}
        </div>
      </div>
    );
  }
}

export default ActivityDetail;

function AttendeeList(props) {
  if (props.isConfirmed) {
    return (
      <Link to={props.routePath}>
        <span className="user-count text-white rounded d-inline-flex justify-content-center align-items-center">
          {props.usersAttending.length}
        </span> Users are joining in
      </Link>
    );
  }
  return (
    <>
      <span className="user-count text-white rounded d-inline-flex justify-content-center align-items-center">
        {props.usersAttending.length}
      </span> Users are joining in
    </>
  );
}
