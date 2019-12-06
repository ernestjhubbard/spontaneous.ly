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
      points: 0,
      static: null,
      zip: null,
      filter: {},
      fetchingUser: true
    };
    this.setZip = this.setZip.bind(this);
    this.setFilter = this.setFilter.bind(this);
    this.fetchUser = this.fetchUser.bind(this);
    this.signIn = this.signIn.bind(this);
    this.createUser = this.createUser.bind(this);
    this.fetchDetail = this.fetchDetail.bind(this);
    this.reserveConfirmAndCancel = this.reserveConfirmAndCancel.bind(this);
    this.pointsTransaction = this.pointsTransaction.bind(this);
    this.getPoints = this.getPoints.bind(this);
    this.getAttendees = this.getAttendees.bind(this);
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
    const config = {
      method: 'GET'
    };
    fetch(`/api/activity-details?activityId=${activityId}`, config)
      .then(response => response.json())
      .then(activityDetails => this.setState({ activityData: activityDetails }))
      .catch(error => console.error('Fetch error: ', error));
  }

  fetchUser() {
    const userConfig = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    };
    fetch('/api/users', userConfig)
      .then(results => results.json())
      .then(user => this.setState({ user, fetchingUser: false }))
      .catch(error => console.error('There was an error:', error.message));

  }

  getAttendees(activityId) {
    const config = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    };
    fetch(`/api/reservations?activity=${activityId}`, config)
      .then(response => response.json())
      .then(usersAttending => this.setState({ usersAttending }))
      .catch(error => console.error('Error:', error));
  }

  signIn({ email, password }) {
    event.preventDefault();
    const config = {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    };
    fetch('/api/users', config)
      .then(results => results.json())
      .then(user => {
        if (user.error) {
          return null;
        } else {
          this.fetchUser();
          this.getPoints();
        }
      })
      .catch(error => console.error('There was an error:', error.message));
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

  reserveConfirmAndCancel({ activityId }) {
    const config = {
      method: 'POST',
      body: JSON.stringify({ activityId }),
      headers: {
        'Content-Type': 'application/json'
      }
    };
    fetch('/api/reservations', config)
      .then(response => response.json())
      .then(message => console.error(message));
  }

  getPoints() {
    const config = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    };
    fetch('/api/points', config)
      .then(response => response.json())
      .then(data => {
        const points = data.reduce((total, value) => total + value.value, 0);
        this.setState({ points });
      });
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
  }

  render() {
    if (this.state.fetchingUser === true) {
      return null;
    }
    return (
      <div>
        <>
          <Header user={this.state.user} />
          <Switch>
            <Route exact path="/" render={props => <DefaultPage {...props}
              setZip={this.setZip}
              fetchUser={this.fetchUser} />} />
            <Route exact path="/activity-filter" render={props => <ActivityFilter {...props}
              zip={this.state.zip}
              setFilter={this.setFilter} />} />
            <Route exact path="/activity-list" render={props => <ActivityList {...props}
              getAttendees={this.getAttendees}
              filterCriteria={this.state.filter}
              reroll={this.pointsTransaction}
              fetch={this.fetchDetail} />} />
            <Route exact path="/profile" render={props => <ProfilePage {...props}
              user={this.state.user}
              points={this.state.points}
              getPoints={this.getPoints} />} />
            <Route exact path="/sign-in" render={props => <SignIn {...props}
              signIn={this.signIn} />} />
            <Route exact path="/create-an-account" render={props => <CreateAccount {...props}
              createUser={this.createUser} />} />
            <Route exact path="/profile/upcoming-activities" render={props => <UpcomingOrPastActivities {...props}
              fetchActivity={this.fetchDetail}
              activityType={'Upcoming'} />} />
            <Route exact path="/profile/past-activities" render={props => <UpcomingOrPastActivities {...props}
              fetchActivity={this.fetchDetail}
              activityType={'Past'}
              getAttendees={this.getAttendees}/>} />
            <Route exact path="/activity-details/:id/confirmed" render={props => <ConfirmActivity {...props}
              attendees={this.state.usersAttending}
              activity={this.state.activityData}
              getAttendees={this.getAttendees}
              fetchDetail={this.fetchDetail}
              reserve={this.reserveConfirmAndCancel}/>} />
            <Route exact path="/activity-details/:id" render={props => <ActivityDetail {...props}
              user={this.state.user}
              activity={this.state.activityData}
              fetchDetail={this.fetchDetail}
              transaction={this.pointsTransaction}
              reserve={this.reserveConfirmAndCancel} />} />
            <Route exact path="/activity-details/:activity/attendees/" render={props => <AttendeesList {...props}
              getAttendees={this.getAttendees}
              attendees={this.state.usersAttending} />} />
            <Route exact path="/adventures/:activity" component={StaticActivity} />
            <Route exact path="/profile/friends" render={props => <FriendList {...props} />} />
            <Route exact path="/profile/friends/:friendId" render={props => <MessageFriend {...props}
              user={this.state.user} />} />
          </Switch>
        </>
      </div>
    );
  }
}

export default withRouter(App);
