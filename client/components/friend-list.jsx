import React from 'react';
import Friend from './friend';

class FriendList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      friendClicked: null
    };
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
            <span className="badge" onClick={() => this.getFriends(0)}>Pending Requests</span>
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
    this.getFriends();
  }

  getFriends(isAccepted = 1) {
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
}
export default FriendList;
