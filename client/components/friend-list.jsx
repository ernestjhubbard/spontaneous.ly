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
        pushMessage={this.props.history.push}
        clickFriend={this.clickFriend}
        recipientId={friend.recipientId}
        image={friend.image}
        firstName={friend.firstName}
        lastName={friend.lastName}
      />
    );
    return (
      <div className="container align-center my-5">
        <h4 className="text-center mt-3 font-weight-bold mb-4">Friends List</h4>
        <div className="d-flex justify-content-between">
          <h4 className=""><span className="badge viewing">All Friends</span></h4>
          <h4 className=""><span className="badge">Pending Requests</span></h4>
        </div>
        <div>
          {friendsArray}
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.getFriends();
  }

  getFriends() {
    const config = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    };
    fetch('/api/friends', config)
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
