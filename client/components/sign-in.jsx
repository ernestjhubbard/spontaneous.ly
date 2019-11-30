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
          <div className="form-group" >
            <label htmlFor="email">Email</label>
            <input className="form-control form-control-sm"
              name="email"
              onChange={this.handleChange}
              value={this.state.email}
              type="text"
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input className="form-control form-control-sm"
              name="password"
              onChange={this.handleChange}
              value={this.state.password}
              type="password"
            ></input>
          </div>
          <button type="submit" className="btn btn-primary" value="Submit">Submit</button>
        </form>
      </div>
    );
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
}

export default SignIn;
