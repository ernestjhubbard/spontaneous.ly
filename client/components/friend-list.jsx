import React from 'react';
import Friend from './friend';

class FriendList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      friendClicked: null
    };
    this.getFriends = this.getFriends.bind(this);
    this.checkPending = this.checkPending.bind(this);
    this.acceptRequest = this.acceptRequest.bind(this);
  }

  render() {
    const friends = this.state.friends;
    const friendsArray = friends.map((friend, index) =>
      <Friend
        key={index}
        isAccepted={friend.isAccepted}
        user={this.props.user.userId}
        pushMessage={this.props.history.push}
        clickFriend={this.clickFriend}
        senderId={friend.senderId}
        recipientId={friend.userId}
        image={friend.image}
        firstName={friend.firstName}
        lastName={friend.lastName}
        acceptRequest={this.acceptRequest}
      />
    );
    return (
      <div className="container align-center my-5">
        <h4 className="text-center mt-3 font-weight-bold mb-4">Friends List</h4>
        <div className="d-flex justify-content-between">
          <h4 className="">
            <span className="badge viewing" onClick={() => this.getFriends(1)}>All Friends</span>
          </h4>
          <h4 className="">
            <span className="badge" onClick={() => this.checkPending(1)}>Pending Requests</span>
          </h4>
        </div>
        <div>{friendsArray}</div>
        <div className="button-container fixed-bottom p-3">
          <button
            className="spon-button-alt rounded mt-0 w-100"
            onClick={() => this.props.history.goBack()}
          >
            Back
          </button>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.getFriends(1);
  }

  getFriends(isAccepted) {
    const config = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    };
    this.setState({ friends: [] });
    fetch(`/api/friends?isAccepted=${isAccepted}`, config)
      .then(results => results.json())
      .then(data => data.map(friend => this.setState({ friends: this.state.friends.concat(friend) })));
  }

  checkPending(isPending) {
    this.setState({ friends: [] });
    fetch(`api/friends?isPending=${isPending}`)
      .then(results => results.json())
      .then(data =>
        data.map(request =>
          this.setState({ friends: this.state.friends.concat(request) })
        )
      );
  }

  getFriendMessages(friendId) {
    const userConfig = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    };
    fetch(`/api/messages?friendId=${friendId}`, userConfig)
      .then(results => results.json())
      .then(data => data);
  }

  clickFriend(friendId) {
    this.setState({ friendClicked: friendId });
  }

  acceptRequest({ recipientId }) {
    const config = {
      method: 'PUT',
      body: JSON.stringify({ recipientId }),
      headers: {
        'Content-Type': 'application/json'
      }
    };
    fetch('/api/friends', config)
      .then(results => results.json());
    this.checkPending();
  }
}

export default FriendList;
