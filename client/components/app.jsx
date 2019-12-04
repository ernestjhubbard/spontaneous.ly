import React from 'react';
import Header from './header';
import CreateAccount from './create-account';
import SignIn from './sign-in';
import DefaultPage from './default-page';
import ActivityFilter from './activity-filter';
import ActivityList from './activity-list';
import ActivityDetail from './activity-detail';
import ProfilePage from './profile-page';
import FriendPage from './friend-page';
import StaticActivity from './static-activity';
import UpcomingOrPastActivities from './upcoming-past-activities';
import ConfirmActivity from './confirm-page';
import AttendeesList from './attendees-list';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'signIn',
      messages: [],
      activityClicked: {},
      user: {
        firstName: '',
        lastName: '',
        image: '',
        email: ''
      },
      usersAttending: [],
      points: 0,
      static: null,
      zip: null,
      filter: {}
    };
    this.setView = this.setView.bind(this);
    this.setZip = this.setZip.bind(this);
    this.setStatic = this.setStatic.bind(this);
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

  setView(name) {
    this.setState({
      view: name
    });
  }

  setStatic(activity) {
    this.setState({
      static: activity
    });
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

  fetchDetail({ activityId }) {
    const config = {
      method: 'POST',
      body: JSON.stringify({ activityId }),
      headers: {
        'Content-Type': 'application/json'
      }
    };
    fetch('/api/activity-details', config)
      .then(results => results.json())
      .then(data => {
        this.setState({ activityClicked: data });
      });
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
      .then(data =>
        this.setState({
          user: {
            firstName: data.firstName,
            lastName: data.lastName,
            image: data.image,
            email: data.email,
            userId: data.userId
          }
        })
      )
      .catch(error => console.error('There was an error:', error.message));
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
      .then(data => {
        if (data.error) {
          return null;
        } else {
          this.fetchUser();
          this.getPoints();
          this.setView('home');
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

  createUser({ firstName, lastName, email, image, password, userUpload }) {
    event.preventDefault();
    const config = {
      method: 'POST',
      body: JSON.stringify({ firstName, lastName, email, image, password, userUpload }),
      headers: {
        'Content-Type': 'application/json'
      }
    };
    fetch('/api/users', config)
      .then(results => results.json())
      .then(data => data)
      .catch(error => console.error('There was an error:', error.message));
    this.setView('signIn');
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
      .then(response => response.json());
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
    fetch('/api/points', config)
      .then(response => response.json());
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
      .then(data => data.map(users => this.setState({ usersAttending: this.state.usersAttending.concat(users) })));
  }

  render() {
    return (
      <div>
        <Router>
          <Header user={this.state.user} setView={this.setView} currentView={this.state.view} />
          <Switch>
            <Route exact path="/" render={props => <DefaultPage {...props}
              setZip={this.setZip}
              setView={this.setView} />}/>
            <Route exact path="/activity-filter" render={props => <ActivityFilter {...props}
              zip={this.state.zip}
              setFilter={this.setFilter}
              setView={this.setView}/>} />
            <Route exact path="/activity-list" render={props => <ActivityList {...props}
              filterCriteria={this.state.filter}
              setView={this.setView}
              fetch={this.fetchDetail}/>} />
            <Route exact path="/profile" render={props => <ProfilePage {...props}
              user={this.state.user}
              setView={this.setView}
              points={this.state.points}
              getPoints={this.getPoints}/>} />
            <Route exact path="/sign-in" render={props => <SignIn {...props}
              signIn={this.signIn}
              setView={this.setView}/>} />
            <Route exact path="/create-an-account"
              render={props => <CreateAccount {...props}
                createUser={this.createUser}
                setView={this.setView}/>} />
            <Route exact path="/profile/friends" render={props => <FriendPage {...props}
              retrieve={this.retrieveMessages}
              fetchUser={this.fetchUser}
              user={this.state.user}
              view={this.state.view}
              setView={this.setView}/>} />
            <Route exact path="/profile/messages" render={props => <FriendPage {...props}
              retrieve={this.retrieveMessages}
              fetchUser={this.fetchUser}
              user={this.state.user}
              view={this.state.view}
              setView={this.setView} />} />
            <Route exact path="/profile/upcoming-activities" render={props => <UpcomingOrPastActivities {...props}
              fetchActivity={this.fetchDetail}
              activityType={'Upcoming'}/>} />
            <Route exact path="/profile/past-activities" render={props => <UpcomingOrPastActivities {...props}
              fetchActivity={this.fetchDetail}
              activityType={'Past'}
              setView={this.setView}/>} />
            <Route exact path="/confirmed" render={props => <ConfirmActivity {...props}
              attendees={this.state.usersAttending}
              getAttendees={this.getAttendees}
              activity={this.state.activityClicked} r
              eserve={this.reserveConfirmAndCancel}/>} />
            <Route exact path="/activity-details" render={props => <ActivityDetail {...props}
              attendees={this.state.usersAttending}
              view={this.state.view}
              getAttendees={this.getAttendees}
              transaction={this.pointsTransaction}
              activity={this.state.activityClicked}
              reserve={this.reserveConfirmAndCancel}/>} />
            <Route exact path="/activity-details/cancel" render={props => <ActivityDetail {...props}
              getAttendees={this.getAttendees}
              transaction={this.pointsTransaction}
              view={this.state.view}
              activity={this.state.activityClicked}
              cancel={this.reserveConfirmAndCancel}
              setView={this.setView}/>} />
            <Route exact path="/activity-details/past" render={props => <ActivityDetail {...props}
              getAttendees={this.getAttendees}
              transaction={this.pointsTransaction}
              view={this.state.view}
              activity={this.state.activityClicked}
              setView={this.setView}/>} />
            <Route exact path="/activity-details/attendees" render={props => <AttendeesList {...props}
              attendees={this.state.usersAttending}
              setView={this.setView}/>} />
            <Route exact path="/adventures/:activity" component={StaticActivity} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
