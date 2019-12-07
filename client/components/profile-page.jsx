import React from 'react';

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      fetchingUser: true,
      points: 0
    };
  }

  componentDidMount() {
    const userId = this.props.match.params.userId;
    this.userInfo(userId);
    this.getPoints(userId);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      const userId = this.props.match.params.userId;
      this.userInfo(userId);
      this.getPoints(userId);
    }
  }

  render() {
    if (this.state.fetchingUser === true) {
      return null;
    }
    const profileImage = {
      backgroundImage: `url("/assets/images/users/${this.state.user.image}")`
    };
    return (
      <div className="container align-center d-flex">
        <div className="profile-center m-auto">
          <div className="profile-user-info my-5">
            <div
              className="profile-user-image rounded-circle m-auto"
              style={profileImage}
            ></div>
            <h4 className="font-weight-bold text-center my-3">
              {this.state.user.firstName} {this.state.user.lastName}
            </h4>
          </div>
          <div className="border rounded p-3">
            <h4 className="align-center text-center">Spontaneity Points</h4>
            <h1 className="profile-point-value text-center m-auto">
              {this.state.points}
            </h1>
          </div>
          <div className="profile-footer">
            <button
              className="spon-button rounded text-white col-12"
              onClick={() => {
                this.props.history.push('/profile/upcoming-activities');
              }}
            >
              Upcoming Adventures
            </button>
            <button
              className="spon-button rounded text-white col-12"
              onClick={() => {
                this.props.history.push('/profile/past-activities');
              }}
            >
              Past Adventures
            </button>
            <div className="calc-button-50">
              <button
                className="spon-button rounded text-white"
                onClick={() => {
                  this.props.history.push('/profile/friends');
                }}
              >
                Friends
              </button>
              <button
                className="spon-button rounded text-white"
                onClick={() => {
                  this.props.history.push('/profile/messages');
                }}
              >
                Messages
              </button>
            </div>
          </div>
          <button
            className="spon-button-alt rounded w-100 mt-1 mx-auto"
            onClick={() => this.props.history.goBack()}
          >
            Back
          </button>
        </div>
      </div>
    );
  }

  userInfo(userId) {
    const userConfig = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    };
    fetch(`/api/users?userId=${userId}`, userConfig)
      .then(results => results.json())
      .then(user => {
        this.setState({ user, fetchingUser: false });
      })
      .catch(error => console.error('There was an error:', error.message));
  }

  getPoints(userId) {
    const config = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    };
    fetch(`/api/points?userId=${userId}`, config)
      .then(response => response.json())
      .then(data => {
        const points = data.reduce((total, value) => total + value.value, 0);
        this.setState({ points });
      });
  }

}

export default ProfilePage;
