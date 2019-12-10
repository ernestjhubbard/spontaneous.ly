import React from 'react';
import Message from './message';

class MessageFriend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      message: '',
      friend: {}
    };
    this.retrieveMessages = this.retrieveMessages.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }

  render() {
    const userId = this.props.user.userId;
    const recipientId = this.state.friend.userId;
    const message = this.state.message;
    const messages = this.state.messages.map((m, index) =>
      <Message
        key={index}
        userId={userId}
        friend={this.state.friend}
        message={m.message}
        image={m.image}
        recipientId={m.recipientId} />
    );
    return (
      <div className="container position-relative fade-in">
        <div className="text-center d-flex mt-5 mb-3 justify-content-around position-relative">
          <div className="back-chevron rounded border d-flex position-absolute" onClick={() => this.props.history.goBack()}>
            <i className="fas fa-chevron-left m-auto"></i>
          </div>
          <h4 className="m-auto">{`${this.state.friend.firstName} ${this.state.friend.lastName}`}</h4>
        </div>
        <div className="message-container position-absolute col-12">
          {messages}
        </div>
        <div className="fixed-bottom border-top p-3 bg-white">
          <form
            onSubmit={() => {
              this.sendMessage({ recipientId, message });
              this.setState({ message: '' });
            }} >
            <div className="input-group">
              <input
                className="form-control form-control-lg"
                name="message"
                onChange={this.handleChange}
                value={this.state.message}
                type="text" />
              <div className="input-group-append">
                <button
                  type="submit"
                  className="input-group-append send-button spon-button rounded text-white mt-0"
                  value="Submit" >
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }

  getSearchParams() {
    const searchParams = new URLSearchParams(window.location.search);
    return searchParams.toString();
  }

  sendMessage({ recipientId, message }) {
    event.preventDefault();
    const userConfig = {
      method: 'POST',
      body: JSON.stringify({ recipientId, message }),
      headers: {
        'Content-Type': 'application/json'
      }
    };
    fetch('/api/messages', userConfig)
      .then(results => results.json())
      .then(data => data);
    this.retrieveMessages(recipientId);
  }

  componentDidMount() {
    const friend = this.getSearchParams();
    const friendIdIndex = friend.indexOf('=');
    const friendId = friend.slice(friendIdIndex + 1, friend.length);
    this.retrieveMessages(friend);
    this.getFriend(friendId);
  }

  retrieveMessages(friendId) {
    event.preventDefault();
    this.setState({ messages: [] });
    const userConfig = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    };
    fetch(`/api/messages?${friendId}`, userConfig)
      .then(results => results.json())
      .then(data => this.setState({ messages: this.state.messages.concat(data) }));
  }

  getFriend(friendId) {
    const userConfig = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    };
    fetch(`/api/messages?getFriendId=${friendId}`, userConfig)
      .then(results => results.json())
      .then(friend => this.setState({ friend }));
  }

  handleChange(event) {
    this.setState({ message: event.target.value });
  }
}

export default MessageFriend;
