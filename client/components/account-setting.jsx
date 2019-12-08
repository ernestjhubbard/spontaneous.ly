import React from 'react';

class AccountSetting extends React.Component {
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
    this.updateInfo = this.updateInfo.bind(this);
    this.uploadHandler = this.uploadHandler.bind(this);
    this.fileUpload = this.fileUpload.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    const firstName = this.state.firstName;
    const lastName = this.state.lastName;
    const email = this.state.email;
    const password = this.state.password;
    return (
      <div className="container my-5">
        <h4 className="d-flex justify-content-center mb-4">Account Settings</h4>
        <div className="input-group input-group-sm mb-3">
          <label className="account-setting-text">First Name:</label>
          <div className="input-group mb-3">
            <div className="input-group account-setting-input w-100">
              <input
                type="text"
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleChange}
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default" />
              <div className="edit-button d-flex ml-3">
                <i onClick={() => this.updateInfo({ firstName })} className="fas fa-edit fa-2x adventure-card m-auto"></i>
              </div>
            </div>
          </div>
          <label className="account-setting-text">Last Name:</label>
          <div className="input-group mb-3">
            <div className="input-group account-setting-input w-100">
              <input
                type="text"
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleChange}
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default" />
              <div className="edit-button d-flex ml-3">
                <i onClick={() => this.updateInfo({ lastName })} className="fas fa-edit fa-2x adventure-card m-auto"></i>
              </div>
            </div>
          </div>
          <label className="account-setting-text">Email:</label>
          <div className="input-group mb-3">
            <div className="input-group account-setting-input w-100">
              <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default" />
              <div className="edit-button d-flex ml-3">
                <i onClick={() => this.updateInfo({ email })} className="fas fa-edit fa-2x adventure-card m-auto"></i>
              </div>
            </div>
          </div>
          <label className="account-setting-text">Password:</label>
          <div className="input-group mb-3">
            <div className="input-group account-setting-input w-100">
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default" />
              <div className="edit-button d-flex ml-3">
                <i onClick={() => this.updateInfo({ password })} className="fas fa-edit fa-2x adventure-card m-auto"></i>
              </div>
            </div>
          </div>
          <div>
            <label className="account-setting-text">Upload Profile Picture:</label>
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
          </div>
        </div>
        <div className="fixed-bottom p-3">
          <div className="calc-button-50">
            <button
              className="spon-button text-white rounded mt-0"
              onClick={() => {
                this.uploadHandler();
              }}>
              Save
            </button>
            <button
              className="spon-button-cancel rounded mt-0"
              onClick={() => this.props.history.goBack()}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
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
    const image = this.state.image;
    this.updateInfo({ image });
    this.props.history.goBack();
  }

  updateInfo(setting) {
    const config = {
      method: 'POST',
      body: JSON.stringify(setting),
      headers: {
        'Content-Type': 'application/json'
      }
    };
    fetch('/api/update-account', config)
      .then(results => results.json())
      .then(data => data)
      .catch(error => console.error('There was an error:', error.message));
  }
}

export default AccountSetting;
