import React from 'react';
import Friend from './friend';

class FriendList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      friendClicked: null,
      pendingClicked: false
    };
    this.getFriends = this.getFriends.bind(this);
    this.checkPending = this.checkPending.bind(this);
    this.acceptRequest = this.acceptRequest.bind(this);
    this.denyRequest = this.denyRequest.bind(this);
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
        denyRequest={this.denyRequest}
      />
    );

    return (
      <div className="container align-center my-5">
        <div className="position-relative">
          <div className="back-chevron rounded border d-flex position-absolute" onClick={() => this.props.history.goBack()}>
            <i className="fas fa-chevron-left m-auto"></i>
          </div>
          <h4 className="text-center mt-3 font-weight-bold mb-4">Friends List</h4>
        </div>
        <div className="d-flex justify-content-between">
          <h4>
            <span className={`badge viewing-${this.state.pendingClicked}`} onClick={() => {
              this.getFriends(1);
              this.setState({ pendingClicked: false });
            }}>All Friends</span>
          </h4>
          <h4>
            <span className={`badge viewing-${!this.state.pendingClicked}`} onClick={() => {
              this.checkPending(1);
              this.setState({ pendingClicked: true });
            }}>Pending Requests</span>
          </h4>
        </div>
        <div>{friendsArray}</div>
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
    this.setState({ friends: [], whichClicked: 'All Friends' });
    fetch(`/api/friends?isAccepted=${isAccepted}`, config)
      .then(results => results.json())
      .then(data => data.map(friend => this.setState({ friends: this.state.friends.concat(friend) })));
  }

  checkPending(isPending) {
    this.setState({ friends: [], whichClicked: 'Pending Requests' });
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

  denyRequest({ recipientId }) {
    const config = {
      method: 'PUT',
      body: JSON.stringify({ recipientId }),
      headers: {
        'Content-Type': 'application/json'
      }
    };
    fetch('/api/deny-friend', config)
      .then(results => results.json());
    this.checkPending();
  }
}
export default FriendList;
