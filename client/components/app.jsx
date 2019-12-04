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
      zip: 92618,
      filter: {}
    };
    this.setView = this.setView.bind(this);
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
    let differentPage;
    const stateName = this.state.view;
    switch (stateName) {
      case 'home':
        differentPage = (
          <DefaultPage
            setView={this.setView}
            setStatic={this.setStatic}
            setZip={this.setZip}
          />
        );
        break;
      case 'activityFilter':
        differentPage = (
          <ActivityFilter
            setView={this.setView}
            setFilter={this.setFilter}
            zip={this.state.zip}
          />
        );
        break;
      case 'activityList':
        differentPage = (
          <ActivityList
            setView={this.setView}
            fetch={this.fetchDetail}
            filterCriteria={this.state.filter}
            reroll={this.pointsTransaction}
          />
        );
        break;
      case 'profilePage':
        differentPage = (
          <ProfilePage
            user={this.state.user}
            points={this.state.points}
            getPoints={this.getPoints}
            setView={this.setView} />
        );
        break;
      case 'signIn':
        differentPage = <SignIn signIn={this.signIn} />;
        break;
      case 'createAccount':
        differentPage = <CreateAccount createUser={this.createUser} />;
        break;
      case 'staticActivity':
        differentPage = <StaticActivity activity={this.state.static} />;
        break;
      case 'friendPage':
        differentPage = (
          <FriendPage
            setView={this.setView}
            view={this.state.view}
            retrieve={this.retrieveMessages}
            fetchUser={this.fetchUser}
            user={this.state.user}
          />
        );
        break;
      case 'upcomingActivities':
        differentPage =
          <UpcomingOrPastActivities
            setView={this.setView}
            fetchActivity={this.fetchDetail}
            activityType={'Upcoming'} />;
        break;
      case 'pastActivities':
        differentPage =
          <UpcomingOrPastActivities
            setView={this.setView}
            fetchActivity={this.fetchDetail}
            activityType={'Past'} />;
        break;
      case 'confirm':
        differentPage = (
          <ConfirmActivity
            attendees={this.state.usersAttending}
            setView={this.setView}
            activity={this.state.activityClicked}
            reserve={this.reserveConfirmAndCancel}
          />
        );
        break;
      case 'activityDetail':
        differentPage = (
          <ActivityDetail
            attendees={this.state.usersAttending}
            view={this.state.view}
            getAttendees={this.getAttendees}
            transaction={this.pointsTransaction}
            setView={this.setView}
            activity={this.state.activityClicked}
            reserve={this.reserveConfirmAndCancel}
          />
        );
        break;
      case 'activityDetailCancel':
        differentPage = (
          <ActivityDetail
            getAttendees={this.getAttendees}
            transaction={this.pointsTransaction}
            view={this.state.view}
            setView={this.setView}
            activity={this.state.activityClicked}
            cancel={this.reserveConfirmAndCancel}
          />
        );
        break;
      case 'activityDetailPast':
        differentPage = (
          <ActivityDetail
            getAttendees={this.getAttendees}
            transaction={this.pointsTransaction}
            view={this.state.view}
            setView={this.setView}
            activity={this.state.activityClicked}
          />
        );
        break;
      case 'attendeesList':
        differentPage = (
          <AttendeesList attendees={this.state.usersAttending} />
        );
    }
    return (
      <div>
        <Header
          setView={this.setView}
          currentView={this.state.view}
          user={this.state.user}
        />
        {differentPage}
      </div>
    );
  }
}

export default App;
