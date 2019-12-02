import React from 'react';
import Friend from './friend';

class FriendList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      messages: []
    };
  }

  render() {
    const friendsArray = this.props.friends.map((friend, index) =>
      <Friend
        clickFriend={this.props.clickFriend}
        messages={this.state.messages}
        changeView={this.props.changeView}
        setView={this.props.setView}
        key={index}
        retrieve={this.props.retrieve}
        recipientId={friend.recipientId}
        getFriend={this.getFriend}
        image={friend.image}
        firstName={friend.firstName}
        lastName={friend.lastName} />
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
}

export default FriendList;
