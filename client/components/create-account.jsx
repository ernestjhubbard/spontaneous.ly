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
      userUpload: {}
    };
    this.navigateHome = this.navigateHome.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.imageInput = React.createRef();
    this.fileUpload = this.fileUpload.bind(this);
    this.uploadHandler = this.uploadHandler.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  navigateHome() {
    const { history } = this.props;
    history.push('/');
  }

  render() {
    return (
      <div className="container align-center my-5">
        <h4 className="text-center font-weight-bold mb-3">Create An Account</h4>

        <form
          method="post"
          encType="multipart/form-data"
          onSubmit={() => {
            this.uploadHandler();
            this.props.createUser(this.state);
            this.navigateHome();
          }}>
          <div className="form-group" >
            <label htmlFor="email">First Name</label>
            <input className="input-font form-control form-control-lg text-center"
              name="firstName"
              onChange={this.handleChange}
              value={this.state.firstName}
              type="text"
              placeholder="First Name"
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="password">Last Name</label>
            <input className="input-font form-control form-control-lg text-center"
              name="lastName"
              onChange={this.handleChange}
              value={this.state.lastName}
              type="text"
              placeholder="Last Name"
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="password">Email</label>
            <input className="input-font form-control form-control-lg text-center"
              name="email"
              onChange={this.handleChange}
              value={this.state.email}
              type="email"
              placeholder="Email Address"
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input className="input-font form-control form-control-lg text-center"
              name="password"
              onChange={this.handleChange}
              value={this.state.password}
              type="password"
              placeholder="Password"
            ></input>
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
              htmlFor="validatedCustomFile">Choose file...</label>
            <div className="invalid-feedback">Not a supported file type</div>
          </div>
          <button type="submit" className="spon-button rounded text-white w-100" value="Submit">Submit</button>
        </form>
      </div>
    );
  }

  fileUpload(event) {
    const imageName = event.target.files[0].name;
    const image = event.target.files[0];
    this.setState({ userUpload: image });
    this.setState({ image: imageName });
  }

  uploadHandler() {
    const formData = new FormData();
    formData.append(
      'myFile',
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
