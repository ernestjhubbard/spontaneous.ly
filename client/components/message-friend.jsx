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
      <div className="container position-relative">
        <img
          src="/assets/images/back-arrow.png"
          onClick={() => this.props.history.goBack()}
        />
        <div className="text-center mt-4 mb-3">
          <h4>{`${this.state.friend.firstName} ${this.state.friend.lastName}`}</h4>
        </div>
        <div className="message-container position-absolute col-12">
          {messages}
        </div>
        <div className="fixed-bottom p-3 bg-white">
          <form
            onSubmit={() => {
              this.sendMessage({ recipientId, message });
              this.setState({ message: '' });
            }}
          >
            <div className="input-group">
              <input
                className="form-control form-control-lg"
                name="message"
                onChange={this.handleChange}
                value={this.state.message}
                type="text"
              />
              <div className="input-group-append">
                <button
                  type="submit"
                  className="input-group-append send-button spon-button rounded text-white mt-0"
                  value="Submit"
                >
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
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
    this.retrieveMessages({ recipientId });
  }

  componentDidMount() {
    const recipientId = this.props.match.params.friendId;
    this.retrieveMessages(recipientId);
    this.getFriend(recipientId);
  }

  retrieveMessages(recipientId) {
    event.preventDefault();
    this.setState({ messages: [] });
    const userConfig = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    };
    fetch(`/api/messages?recipientId=${recipientId}`, userConfig)
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
    fetch(`/api/messages?userId=${friendId}`, userConfig)
      .then(results => results.json())
      .then(friend => this.setState({ friend }));
  }

  handleChange(event) {
    this.setState({ message: event.target.value });
  }
}

export default MessageFriend;
