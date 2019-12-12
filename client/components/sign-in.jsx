import React from 'react';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isValid: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit() {
    event.preventDefault();
    const config = {
      method: 'POST',
      body: JSON.stringify({ email: this.state.email, password: this.state.password }),
      headers: {
        'Content-Type': 'application/json'
      }
    };
    fetch('/api/users', config)
      .then(results => results.json())
      .then(user => {
        if (user.error) {
          this.setState({ isValid: false });
        } else {
          this.props.onSignInSuccess({ user });
        }
      })
      .catch(error => console.error('There was an error:', error.message));
  }

  componentDidUpdate(prevProps) {
    if (this.props.user !== prevProps.user) {
      this.props.history.push('/');
    }
  }

  render() {
    let validation;
    if (this.state.isValid === false) {
      validation = 'is-invalid';
    } else {
      validation = null;
    }
    return (
      <div className="container align-center my-5">
        <h4 className="text-center font-weight-bold mb-3">Sign In</h4>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">Email</label>
          <input className={`input-font form-control form-control-lg ${validation} text-center mb-3`}
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
            type="text"
            placeholder="Email Address" required></input>
          <label htmlFor="password">Password</label>
          <input className={`input-font form-control form-control-lg ${validation} text-center`}
            name="password"
            onChange={this.handleChange}
            value={this.state.password}
            type="password"
            placeholder="Password" required></input>
          <button type="submit" className="spon-button rounded text-white w-100" value="Submit">Submit</button>
          <div className="invalid-feedback text-center">Please enter your correct login information.</div>
        </form>
      </div>
    );
  }
}

export default SignIn;
