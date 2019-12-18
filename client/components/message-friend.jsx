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
    this.bottomRef = React.createRef();
    this.scrollToBottom = this.scrollToBottom.bind(this);
    this.retrieveMessages = this.retrieveMessages.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
    this.getSearchParams = this.getSearchParams.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
        <div className="text-center d-flex mt-5 mb-3 justify-content-around position-relative">
          <div className="back-chevron rounded border d-flex position-absolute" onClick={() => this.props.history.goBack()}>
            <i className="fas fa-chevron-left m-auto"></i>
          </div>
          <h4 className="m-auto">{`${this.state.friend.firstName} ${this.state.friend.lastName}`}</h4>
        </div>
        <div className="message-container border rounded p-3" ref={this.bottomRef}>
          {messages}
        </div>
        <div className="fixed-bottom border-top p-3 bg-white overlap">
          <form
            onSubmit={() => this.handleSubmit(event, recipientId, message)} >
            <div className="input-group">
              <input
                className="form-control form-control-lg"
                name="message"
                onChange={this.handleChange}
                value={this.state.message}
                type="text"
                autoComplete="off"/>
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

  scrollToBottom() {
    this.bottomRef.current.scrollTop = this.bottomRef.current.scrollHeight;
  }

  handleSubmit(event, recipientId, message) {
    event.preventDefault();
    if (this.state.message === '') {
      return null;
    }
    const friend = this.getSearchParams();
    this.sendMessage({ recipientId, message });
    this.setState({ message: '' });
    this.retrieveMessages(friend);
  }

  getSearchParams() {
    const searchParams = new URLSearchParams(window.location.search);
    return searchParams.toString();
  }

  sendMessage({ recipientId, message }) {
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
  }

  componentDidMount() {
    const friend = this.getSearchParams();
    const friendIdIndex = friend.indexOf('=');
    const friendId = friend.slice(friendIdIndex + 1, friend.length);
    this.retrieveMessages(friend);
    this.getFriend(friendId);
    this.setState({ rendering: true });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.messages.length !== prevState.messages.length) {
      this.scrollToBottom();
    }
  }

  retrieveMessages(friendId) {
    this.setState({ messages: [] });
    fetch(`/api/messages?${friendId}`)
      .then(results => { return results.json(); })
      .then(message => this.setState({ messages: this.state.messages.concat(message) }));
  }

  getFriend(friendId) {
    fetch(`/api/messages?getFriendId=${friendId}`)
      .then(results => results.json())
      .then(friend => this.setState({ friend }));
  }

  handleChange(event) {
    this.setState({ message: event.target.value });
  }
}

export default MessageFriend;
