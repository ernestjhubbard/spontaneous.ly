import React from 'react';
import Friend from './friend';
class FriendList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: []
    };
  }

  render() {
    const friendsArray = this.state.friends.map(friend =>
      <Friend key={friend.userId} image={friend.image} firstName={friend.firstName} lastName={friend.lastName} />
    );
    return (
      <div className="container align-center my-5">
        <h4 className="text-center mt-3 font-weight-bold mb-4">Friends List</h4>
        <div className="d-flex justify-content-between">
          <h4 className=""><span className="badge viewing">All Friends</span></h4>
          <h4 className=""><span className="badge">Pending Requests</span></h4>
        </div>
        <div className="container">
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
      .then(data => this.setState({ friends: this.state.friends.concat(data) }));
  }
}

export default FriendList;
