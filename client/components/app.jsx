import React from 'react';
import Header from './header';
import CreateAccount from './create-account';
import SignIn from './sign-in';
import DefaultPage from './default-page';
import ActivityFilter from './activity-filter';
import ActivityList from './activity-list';
import ActivityDetail from './activity-detail';
import ProfilePage from './profile-page';
import StaticActivity from './static-activity';
import UpcomingOrPastActivities from './upcoming-past-activities';
import ConfirmActivity from './confirm-page';
import AttendeesList from './attendees-list';
import MessageFriend from './message-friend';
import FriendList from './friend-list';
import AccountSetting from './account-setting';

import {
  withRouter,
  Switch,
  Route
} from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activityData: {},
      user: null,
      usersAttending: [],
      static: null,
      zip: null,
      filter: {},
      fetchingUser: true,
      points: 0
    };
    this.setZip = this.setZip.bind(this);
    this.setFilter = this.setFilter.bind(this);
    this.fetchUser = this.fetchUser.bind(this);
    this.onSignInSuccess = this.onSignInSuccess.bind(this);
    this.createUser = this.createUser.bind(this);
    this.fetchDetail = this.fetchDetail.bind(this);
    this.reserveConfirmAndCancel = this.reserveConfirmAndCancel.bind(this);
    this.pointsTransaction = this.pointsTransaction.bind(this);
    this.getAttendees = this.getAttendees.bind(this);
    this.signOut = this.signOut.bind(this);
  }

  setFilter(filterObject) {
    this.setState({
      filter: filterObject
    });
  }

  setZip(zipcode) {
    this.setState({
      zip: zipcode
    });
  }

  fetchDetail(activityId) {
    fetch(`/api/activity-details?${activityId}`)
      .then(response => response.json())
      .then(activityDetails => this.setState({ activityData: activityDetails }))
      .catch(error => console.error('Fetch error: ', error));
  }

  fetchUser() {
    fetch('/api/users')
      .then(results => results.json())
      .then(user => { this.setState({ user, fetchingUser: false }); this.getPoints(user.userId); })
      .catch(error => console.error('There was an error:', error.message));

  }

  getAttendees(activityId) {
    fetch(`/api/reservations?${activityId}`)
      .then(response => response.json())
      .then(usersAttending => this.setState({ usersAttending }))
      .catch(error => console.error('Error:', error));
  }

  onSignInSuccess(user) {
    this.setState({ user });
  }

  signOut() {
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    };
    this.setState({ user: null });
    fetch('/api/users', config);
  }

  fileUpload(event) {
    this.setState({ isLoading: true });
    const files = Array.from(event.target.files);
    const formData = new FormData();

    files.forEach((file, i) => {
      formData.append(i, file);
    });

    fetch('api/image-upload', {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(images => {
        this.setState({
          isLoading: false,
          images
        });
      });
  }

  componentDidMount() {
    this.fetchUser();
  }

  getPoints(userId) {
    fetch(`/api/points?${userId}`)
      .then(response => response.json())
      .then(data => {
        const points = data.reduce((total, value) => total + value.value, 0);
        this.setState({ points });
      });
  }

  createUser({ firstName, lastName, email, image, password, userUpload }) {
    event.preventDefault();
    const config = {
      method: 'POST',
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        image,
        password,
        userUpload
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    };
    fetch('/api/signup', config)
      .then(results => results.json())
      .then(data => data)
      .catch(error => console.error('There was an error:', error.message));
  }

  reserveConfirmAndCancel(activityId) {
    const config = {
      method: 'POST',
      body: JSON.stringify(activityId),
      headers: {
        'Content-Type': 'application/json'
      }
    };
    fetch('/api/reservations', config)
      .catch(message => console.error('There was an error: ', message));
  }

  pointsTransaction({ transactionType, activityId }) {
    const config = {
      method: 'POST',
      body: JSON.stringify({ transactionType, activityId }),
      headers: {
        'Content-Type': 'application/json'
      }
    };
    fetch('/api/points', config).then(response => response.json());
    this.getPoints(`userId=${this.state.user.userId}`);
  }

  render() {
    if (this.state.fetchingUser === true) {
      return null;
    }
    return (
      <div>
        <>
          <Header signOut={this.signOut} user={this.state.user} />
          <Switch>
            <Route exact path="/" render={props => <DefaultPage {...props}
              setZip={this.setZip} />} />
            <Route exact path="/activity-filter" render={props => <ActivityFilter {...props}
              zip={this.state.zip}
              setFilter={this.setFilter} />} />
            <Route exact path="/activity-list" render={props => <ActivityList {...props}
              points={this.state.points}
              getAttendees={this.getAttendees}
              filterCriteria={this.state.filter}
              reroll={this.pointsTransaction}
              fetch={this.fetchDetail} />} />
            <Route exact path="/profile" render={props => <ProfilePage {...props}
              points={this.state.points}
              loggedInUser={this.state.user} />} />
            <Route exact path="/sign-in" render={props => <SignIn {...props}
              onSignInSuccess={this.onSignInSuccess}
              user={this.state.user} />} />
            <Route exact path="/create-an-account" render={props => <CreateAccount {...props}
              createUser={this.createUser} />} />
            <Route exact path="/upcoming-activities" render={props => <UpcomingOrPastActivities {...props}
              fetchActivity={this.fetchDetail}
              activityType={'Upcoming'} />} />
            <Route exact path="/past-activities" render={props => <UpcomingOrPastActivities {...props}
              fetchActivity={this.fetchDetail}
              activityType={'Past'} />} />
            <Route exact path="/confirmed" render={props => <ConfirmActivity {...props}
              points={this.state.points}
              attendees={this.state.usersAttending}
              activity={this.state.activityData}
              getAttendees={this.getAttendees}
              fetchDetail={this.fetchDetail}
              reserve={this.reserveConfirmAndCancel}
              transaction={this.pointsTransaction}/>} />
            <Route exact path="/activity-details" render={props => <ActivityDetail {...props}
              points={this.state.points}
              user={this.state.user}
              activity={this.state.activityData}
              fetchDetail={this.fetchDetail}
              reserve={this.reserveConfirmAndCancel}
              transaction={this.pointsTransaction} />} />
            <Route exact path="/attendees" render={props => <AttendeesList {...props}
              getAttendees={this.getAttendees}
              attendees={this.state.usersAttending} />} />
            <Route exact path="/adventures" render={props => <StaticActivity {...props} />} />
            <Route exact path="/friends" render={props => <FriendList {...props}
              user={this.state.user} />} />
            <Route exact path="/messages" render={props => <MessageFriend {...props}
              user={this.state.user} />} />
            <Route exact path="/account-settings" render={props => <AccountSetting {...props}
              fetchUser={this.fetchUser}
              user={this.state.user} />} />
          </Switch>
        </>
      </div>
    );
  }
}

export default withRouter(App);
