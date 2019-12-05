import React from 'react';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit() {
    this.props.signIn(this.state);
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="container align-center my-5">
        <h4 className="text-center font-weight-bold mb-3">Sign In</h4>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">Email</label>
          <input className="input-font form-control form-control-lg text-center mb-3"
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
            type="text"
            placeholder="Email Address"
          ></input>
          <label htmlFor="password">Password</label>
          <input className="input-font form-control form-control-lg text-center"
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
}

export default SignIn;
