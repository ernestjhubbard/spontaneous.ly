import React from 'react';

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      fetchingUser: true,
      points: 0,
      userStatus: null
    };
    this.checkFriendStatus = this.checkFriendStatus.bind(this);
    this.addFriend = this.addFriend.bind(this);
  }

  getSearchParams() {
    const searchParams = new URLSearchParams(window.location.search);
    return searchParams.toString();
  }

  componentDidMount() {
    const params = this.getSearchParams();
    this.checkFriendStatus(params);
    this.userInfo(params);
    this.getPoints(params);
  }

  componentDidUpdate(prevProps) {
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

    const userStatus = this.state.userStatus;
    const loggedInUserId = this.props.loggedInUser.userId;
    const equalsPosition = userParams.indexOf('=');
    const paramId = parseInt(userParams.slice(equalsPosition + 1));
    let friendButton;
    if (userStatus === null) {
      if (loggedInUserId !== paramId) {
        friendButton = <AddFriend addFriend={this.addFriend} recipientId={paramId} />;
      }
    } else if (userStatus !== null) {
      if (loggedInUserId !== paramId && userStatus.isPending === 0) {
        friendButton = null;
      } else if (paramId === loggedInUserId) {
        friendButton = <ViewFriendsButton userParams={userParams} push={this.props.history.push} />;
      } else if (userStatus.isAccepted === 0 && userStatus.isPending === 1) {
        friendButton = <PendingFriend />;
      }
    }
    return (
      <div className="container align-center d-flex">
        <div className="profile-center m-auto">
          <div className="profile-user-info mt-5">
            <div className="back-chevron rounded border d-flex" onClick={() => this.props.history.goBack()}>
              <i className="fas fa-chevron-left m-auto"></i>
            </div>
            <div
              className="profile-user-image rounded-circle m-auto"
              style={profileImage}>
            </div>
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
              }}>
              Upcoming Adventures
            </button>
            <button
              className="spon-button rounded text-white col-12"
              onClick={() => {
                this.props.history.push(`/past-activities?${userParams}`);
              }}>
              Past Adventures
            </button>
            {friendButton}
          </div>
        </div>
      </div>
    );
  }

  addFriend({ recipientId }) {
    const config = {
      method: 'POST',
      body: JSON.stringify({ recipientId }),
      headers: {
        'Content-Type': 'application/json'
      }
    };
    fetch('/api/friends', config);
    this.checkFriendStatus(`userId=${recipientId}`);
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

  checkFriendStatus(userId) {
    fetch(`/api/friend-status?${userId}`)
      .then(response => response.json())
      .then(userStatus => this.setState({ userStatus }));
  }
}
function PendingFriend() {
  return (
    <button
      className="spon-button rounded text-white col-12 disabled">
      Pending
    </button>
  );
}
function AddFriend(props) {
  const recipientId = props.recipientId;
  return (
    <button
      className="spon-button rounded text-white col-12"
      onClick={() => props.addFriend({ recipientId })} >
      Add Friend
    </button>
  );
}

function ViewFriendsButton(props) {
  return (
    <button
      className="spon-button rounded text-white col-12"
      onClick={() => props.push('/friends')} >
      Friends
    </button>
  );
}

export default ProfilePage;
