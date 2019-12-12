import React from 'react';
class CreateAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      image: '',
      password: '',
      userUpload: {},
      validEmail: null,
      validPassword: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.imageInput = React.createRef();
    this.fileUpload = this.fileUpload.bind(this);
    this.uploadHandler = this.uploadHandler.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });

    const emailRegex = RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    const passwordRegex = RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{7,}$/);

    if (event.target.name === 'email') {
      if (!emailRegex.test(this.state.email)) {
        this.setState({ validEmail: false });
      } else {
        this.setState({ validEmail: true });
      }
    } else if (event.target.name === 'password') {
      if (!passwordRegex.test(this.state.password)) {
        this.setState({ validPassword: false });
      } else {
        this.setState({ validPassword: true });
      }
    }

  }

  render() {
    const invalidEmail = this.state.validEmail === false ? 'is-invalid' : null;
    const invalidPass = this.state.validPassword === false ? 'is-invalid' : null;
    return (
      <div className="container align-center my-5">
        <h4 className="text-center font-weight-bold mb-3">Create An Account</h4>
        <form
          method="post"
          encType="multipart/form-data"
          onSubmit={() => {
            this.uploadHandler();
            this.props.createUser(this.state);
            this.props.history.push('/sign-in');
          }}>
          <div className="form-group" >
            <label>First Name</label>
            <input
              className='input-font form-control form-control-lg text-center'
              name="firstName"
              onChange={this.handleChange}
              value={this.state.firstName}
              type="text"
              placeholder="First Name"
              required></input>
          </div>
          <div className="form-group">
            <label htmlFor="password">Last Name</label>
            <input
              className='input-font form-control form-control-lg text-center'
              name="lastName"
              onChange={this.handleChange}
              value={this.state.lastName}
              type="text"
              placeholder="Last Name"
              required></input>
          </div>
          <div className="form-group">
            <label htmlFor="password">Email</label>
            <input
              className={`input-font form-control form-control-lg ${invalidEmail} text-center`}
              name="email"
              onChange={this.handleChange}
              value={this.state.email}
              type="email"
              placeholder="Email Address"
              required></input>
            <div className="invalid-feedback">Must be a valid email.</div>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              className={`input-font form-control form-control-lg ${invalidPass} text-center`}
              name="password"
              onChange={this.handleChange}
              value={this.state.password}
              type="password"
              placeholder="Password"
              required></input>
            <div className="invalid-feedback">Must contain 8 characters, and at least 1 number.</div>
          </div>
          <label htmlFor="">Upload a Profile Picture</label>
          <div className="custom-file">
            <input type="file"
              name="userUpload"
              onChange={this.fileUpload}
              className="custom-file-input"
              id="validatedCustomFile"
              accept="image/png, image/jpeg, image/jpg"
              required />
            <label className="custom-file-label"
              htmlFor="validatedCustomFile">{this.state.image !== '' ? this.state.image : 'Choose a file...'}</label>
            <div className="invalid-feedback">Not a supported file type</div>
          </div>
          <button
            type="submit"
            className="spon-button rounded text-white w-100"
            value="Submit">Submit</button>
        </form>
      </div>
    );
  }

  fileUpload(event) {
    const image = event.target.files[0].name;
    const userUpload = event.target.files[0];
    this.setState({ userUpload });
    this.setState({ image });
  }

  uploadHandler() {
    const formData = new FormData();
    formData.append(
      'image',
      this.state.userUpload,
      this.state.userUpload.name
    );
    const config = {
      method: 'POST',
      body: formData
    };
    fetch('/api/image-upload', config)
      .then(results => results.json())
      .then(data => data);
  }
}

export default CreateAccount;
