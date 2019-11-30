import React from 'react';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return (
      <div className="container align-center">
        <h4 className="text-center mt-3 font-weight-bold">Sign In</h4>
        <form onSubmit={() => this.props.signIn(this.state)}>
          <label htmlFor="email">Email</label>
          <input className="email-input form-control form-control-lg text-center mb-3"
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
            type="text"
            placeholder="Email Address"
          ></input>
          <label htmlFor="password">Password</label>
          <input className="password-input form-control form-control-lg text-center"
            name="password"
            onChange={this.handleChange}
            value={this.state.password}
            type="password"
            placeholder="Password"
          ></input>
          <button type="submit" className="spon-button rounded text-white w-100" value="Submit">Submit</button>
        </form>
      </div>
    );
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
}

export default SignIn;
