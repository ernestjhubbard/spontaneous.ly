import React from 'react';
import MessageFriend from './message-friend';
import FriendList from './friend-list';

class FriendPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      messages: [],
      friendClicked: 0,
      view: 'friendList'
    };
    this.clickFriend = this.clickFriend.bind(this);
    this.changeView = this.changeView.bind(this);
  }

  render() {
    const currentView = this.state.view;
    let view;
    if (currentView === 'messageFriend') {
      view = <MessageFriend friendId={this.state.friendClicked} user={this.props.user} />;
    } else if (currentView === 'friendList') {
      view =
        <FriendList
          changeView={this.changeView}
          friends={this.state.friends}
          setView={this.props.setView}
          retrieve={this.retrieveMessages}
          clickFriend={this.clickFriend} />;
    }
    return (
      <div className="friend-page">
        {view}
      </div>
    );
  }

  componentDidMount() {
    this.getFriends();
    this.props.fetchUser();
  }

  changeView(view) {
    this.setState({ view });
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

  clickFriend(friendId) {
    this.setState({ friendClicked: friendId });
  }

  getFriend({ friendId }) {
    const userConfig = {
      method: 'POST',
      body: JSON.stringify({ friendId }),
      headers: {
        'Content-Type': 'application/json'
      }
    };
    fetch('/api/messages', userConfig)
      .then(results => results.json())
      .then(data => data);
  }

}

export default FriendPage;
