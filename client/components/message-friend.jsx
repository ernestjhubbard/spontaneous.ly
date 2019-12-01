import React from 'react';
import Message from './message';

class MessageFriend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      message: ''
    };
  }

  render() {
    const messages = this.state.messages.map(m =>
      <Message key={m.messageId} message={m.message} />
    );
    return (
      <div>
        {messages}
        <input className="password-input form-control form-control-lg text-center"
          name="message"
          onChange={this.handleChange}
          value={this.state.message}
          type="text"
        ></input>
        <button type="submit" className="spon-button rounded text-white w-100" value="Submit">Submit</button>
      </div>
    );
  }

  handleChange(event) {
    this.setState({ message: event.target.value });
  }

}

export default MessageFriend;
