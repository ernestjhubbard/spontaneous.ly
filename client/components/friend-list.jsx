import React from 'react';
import Friend from './friend';
import MessageFriend from './message-friend';

class FriendList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      messages: [],
      view: 'friendList'
    };
    this.retrieveMessages = this.retrieveMessages.bind(this);
    this.setProfileView = this.setProfileView.bind(this);
  }

  render() {

    const friendsArray = this.state.friends.map((friend, index) =>
      <Friend
        messages={this.state.messages}
        setView={this.setProfileView}
        key={index}
        retrieve={this.retrieveMessages}
        userId={friend.userId}
        image={friend.image}
        firstName={friend.firstName}
        lastName={friend.lastName} />
    );
    const list =
      <div className="container align-center">
        <h4 className="text-center mt-3 font-weight-bold mb-4">Friends List</h4>
        <div className="container d-flex justify-content-between">
          <h6>All Friends</h6>
          <h6>Pending Requests</h6>
        </div>
        <div className="container">
          {friendsArray}
        </div>
      </div>;
    const view = this.state.view === 'messageFriend' ? <MessageFriend messages={this.state.messages} /> : list;
    return (
      view
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
      .then(data => this.setState({ friends: this.state.friends.concat(data) }));
  }

  retrieveMessages({ recipientId }) {
    event.preventDefault();
    const userConfig = {
      method: 'POST',
      body: JSON.stringify({ recipientId }),
      headers: {
        'Content-Type': 'application/json'
      }
    };
    this.setState({ messages: [] });
    fetch('/api/messages', userConfig)
      .then(results => results.json())
      .then(data => data.map(message => this.setState({ messages: this.state.messages.concat(message) })));
  }

  sendMessage() {
    const userConfig = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    };
    fetch('/api/messages', userConfig)
      .then(results => results.json())
      .then(data => data);
  }

  setProfileView(view) {
    this.setState({ view });
  }
}

export default FriendList;
