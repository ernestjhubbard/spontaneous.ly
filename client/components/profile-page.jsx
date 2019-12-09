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

  getSearchParams() {
    const searchParams = new URLSearchParams(window.location.search);
    return searchParams.toString();
  }

  componentDidMount() {
    const params = this.getSearchParams();
    this.userInfo(params);
    this.getPoints(params);
  }

  componentDidUpdate(prevProps, prevState) {
    const params = this.getSearchParams();
    if (prevProps.location.search !== this.props.location.search) {
      this.userInfo(params);
      this.getPoints(params);
    }
  }

  render() {
    const userParams = this.getSearchParams();
    if (this.state.fetchingUser === true) {
      return null;
    }
    const profileImage = {
      backgroundImage: `url("/assets/images/users/${this.state.user.image}")`
    };
    return (
      <div className="container align-center d-flex">
        <div className="profile-center m-auto">
          <div className="profile-user-info mt-5">
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
          <div className="profile-footer mb-3">
            <button
              className="spon-button rounded text-white col-12"
              onClick={() => {
                this.props.history.push(`/upcoming-activities?${userParams}`);
              }}
            >
              Upcoming Adventures
            </button>
            <button
              className="spon-button rounded text-white col-12"
              onClick={() => {
                this.props.history.push(`/past-activities?${userParams}`);
              }}
            >
              Past Adventures
            </button>
            <div className="calc-button-50">
              <button
                className="spon-button rounded text-white"
                onClick={() => {
                  this.props.history.push(`/friends?${userParams}`);
                }}
              >
                Friends
              </button>
              <button
                className="spon-button rounded text-white"
                onClick={() => {
                  this.props.history.push(`/messages?${userParams}`);
                }}
              >
                Messages
              </button>
            </div>
            <button
              className="spon-button-alt rounded w-100 mx-auto"
              onClick={() => this.props.history.goBack()}
            >
              Back
            </button>
          </div>
        </div>
      </div>
    );
  }

  userInfo(userId) {
    fetch(`/api/users?${userId}`)
      .then(results => results.json())
      .then(user => {
        this.setState({ user, fetchingUser: false });
      })
      .catch(error => console.error('There was an error:', error.message));
  }

  getPoints(userId) {
    fetch(`/api/points?${userId}`)
      .then(response => response.json())
      .then(data => {
        const points = data.reduce((total, value) => total + value.value, 0);
        this.setState({ points });
      });
  }

}

export default ProfilePage;
