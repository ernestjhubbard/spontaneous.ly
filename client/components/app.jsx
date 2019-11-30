import React from 'react';
import Header from './header';
import CreateAccount from './create-account';
import SignIn from './sign-in';
import DefaultPage from './default-page';
import ActivityList from './activity-list';
import ProfilePage from './profile-page';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'signIn',
      user: {
        firstName: '',
        lastName: '',
        image: '',
        email: '',
        points: 0,
        friends: []
      }
    };
    this.setView = this.setView.bind(this);
    this.fetchUser = this.fetchUser.bind(this);
    this.signIn = this.signIn.bind(this);
    this.createUser = this.createUser.bind(this);
  }

  setView(name) {
    this.setState({
      view: name
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
            points: 5,
            userId: null
          }
        })
      );
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
      .then(data => this.setView('home'));
    this.fetchUser();
  }

  createUser({ firstName, lastName, email, image, password }) {
    event.preventDefault();
    const config = {
      method: 'POST',
      body: JSON.stringify({ firstName, lastName, email, image, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    };
    fetch('/api/users', config)
      .then(results => results.json())
      .then(data => data);
    this.setView('signIn');
  }

  render() {
    let differentPage;
    const stateName = this.state.view;
    if (stateName === 'home') {
      differentPage = <DefaultPage setView={this.setView} />;
    } else if (stateName === 'activityList') {
      differentPage = <ActivityList setView={this.setView} />;
    } else if (stateName === 'profilePage') {
      differentPage = <ProfilePage user={this.state.user} />;
    } else if (stateName === 'signIn') {
      differentPage = <SignIn signIn={this.signIn} />;
    } else if (stateName === 'createAccount') {
      differentPage = <CreateAccount createUser={this.createUser} />;
    }
    return (
      <div>
        <Header setView={this.setView} currentView={this.state.view} />
        {differentPage}
      </div>
    );
  }
}

export default App;
