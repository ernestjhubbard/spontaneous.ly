import React from 'react';
import Header from './header';
import DefaultPage from './default-page';
import ActivityList from './activity-list';
import ProfilePage from './profile-page';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'home',
      user: {
        firstName: '',
        lastName: '',
        image: '',
        email: '',
        spontaneityPoints: 0,
        friends: []
      }
    };
    this.setView = this.setView.bind(this);
  }

  setView(name) {
    this.setState({
      view: name
    });
  }

  // fetchUser(userId) {
  //   const userConfig = {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   };
  //   fetch(`/api/cart/${userId}`, userConfig)
  //     .then(results => results.json())
  //     .then(data => this.setState({ cart: this.state.cart.concat(data) }));
  // }

  render() {
    let differentPage;
    const stateName = this.state.view;
    if (stateName === 'home') {
      differentPage = <DefaultPage setView={this.setView} />;
    } else if (stateName === 'activityList') {
      differentPage = <ActivityList setView={this.setView} />;
    } else if (stateName === 'profilePage') {
      differentPage = <ProfilePage user={this.state.user} />;
    }
    return (
      <div>
        <Header setView={this.setView} />
        {differentPage}
      </div>
    );
  }
}

export default App;
