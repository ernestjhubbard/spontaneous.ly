import React from 'react';

class CreateAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      image: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return (
      <div className="container align-center">
        <h4 className="text-center mt-3 font-weight-bold">Create An Account</h4>
        <form onSubmit={() => this.props.createUser(this.state)}>
          <div className="form-group" >
            <label htmlFor="email">First Name</label>
            <input className="form-control form-control-sm"
              name="firstName"
              onChange={this.handleChange}
              value={this.state.firstName}
              type="text"
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="password">Last Name</label>
            <input className="form-control form-control-sm"
              name="lastName"
              onChange={this.handleChange}
              value={this.state.lastName}
              type="text"
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="password">Email</label>
            <input className="form-control form-control-sm"
              name="email"
              onChange={this.handleChange}
              value={this.state.email}
              type="email"
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
          <div className="form-group">
            <label htmlFor="password">Upload Profile Picture</label>
            <input className="form-control form-control-sm"
              name="image"
              onChange={this.handleChange}
              value={this.state.image}
              type="text"
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

export default CreateAccount;
