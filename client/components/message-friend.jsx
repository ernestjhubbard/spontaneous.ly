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
        friend={this.state.friend}
        message={m.message}
        image={m.image}
        userId={userId}
        recipientId={m.recipientId} />
    );
    return (
      <div className="container fixed-bottom">
        {messages}
        <form onSubmit={() => {
          this.sendMessage({ recipientId, message });
          this.setState({ message: '' });
        }}>
          <div className="input-group mb-3">
            <input className="form-control text-center"
              name="message"
              onChange={this.handleChange}
              value={this.state.message}
              type="text"
            ></input>
            <button
              type="submit"
              className="input-group-append send-button rounded text-white"
              value="Submit">
              Send</button>
          </div>
        </form>
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
    const recipientId = this.props.friendId;
    const friendId = this.props.friendId;
    this.retrieveMessages({ recipientId });
    this.getFriend({ friendId });
  }

  retrieveMessages({ recipientId }) {
    event.preventDefault();
    this.setState({ messages: [] });
    const userConfig = {
      method: 'POST',
      body: JSON.stringify({ recipientId }),
      headers: {
        'Content-Type': 'application/json'
      }
    };
    fetch('/api/messages', userConfig)
      .then(results => results.json())
      .then(data => this.setState({ messages: this.state.messages.concat(data) }));
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
      .then(friend => this.setState({ friend }));
  }

  handleChange(event) {
    this.setState({ message: event.target.value });
  }

}

export default MessageFriend;
