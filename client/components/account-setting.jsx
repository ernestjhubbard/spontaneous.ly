import React from 'react';

class AccountSetting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: this.props.user.firstName,
      lastName: this.props.user.lastName,
      email: this.props.user.email,
      image: this.props.user.image,
      password: '',
      userUpload: {},
      changeDetail: false,
      validEmail: null,
      validPassword: null,
      isReadOnly: true
    };
    this.updateInfo = this.updateInfo.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.uploadHandler = this.uploadHandler.bind(this);
    this.fileUpload = this.fileUpload.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.changeDetail = this.changeDetail.bind(this);
  }

  render() {
    const firstName = this.state.firstName;
    const lastName = this.state.lastName;
    const email = this.state.email;
    const password = this.state.password;
    const invalidEmail = this.state.validEmail === false ? 'is-invalid' : null;
    const invalidPass = this.state.validPassword === false ? 'is-invalid' : null;
    return (
      <div className="container my-5">
        <h4 className="d-flex justify-content-center mb-4">Account Settings</h4>
        <form onSubmit={this.handleSubmit}>
          <div className="input-group input-group-sm mb-3">
            <label className="account-setting-text">First Name:</label>
            <div className="input-group mb-3">
              <input name="firstName"
                className="input-group account-setting-input w-100 mb-0 form-control"
                value={firstName}
                placeholder="Enter your First Name"
                type="text"
                onChange={this.handleChange}
                required
                readOnly={this.state.isReadOnly} />
            </div>
            <label className="account-setting-text">Last Name:</label>
            <div className="input-group mb-3">
              <input name="lastName"
                className="input-group account-setting-input w-100 mb-0 form-control"
                value={lastName}
                placeholder="Enter your Last Name"
                type="text"
                onChange={this.handleChange}
                required
                readOnly={this.state.isReadOnly} />
            </div>
            <label className="account-setting-text">Email:</label>
            <div className="input-group mb-3">
              <input name="email"
                className={`input-group account-setting-input w-100 mb-0 form-control ${invalidEmail}`}
                value={email}
                placeholder="Enter your Email"
                type="text"
                onChange={this.handleChange}
                required
                readOnly={this.state.isReadOnly} />
              <div className="invalid-feedback">Must be a valid email.</div>
            </div>
            <label className="account-setting-text">Password:</label>
            <div className="input-group mb-3">
              <input name="password"
                className={`input-group account-setting-input w-100 mb-0 form-control ${invalidPass}`}
                value={password}
                placeholder="••••••••••"
                type="password"
                onChange={this.handleChange}
                required
                readOnly={this.state.isReadOnly} />
              <div className="invalid-feedback">Must contain 8 characters, and at least 1 number.</div>
            </div>
            <div>
              <label className="account-setting-text">Upload Profile Picture:</label>
              <div className="custom-file filename">
                <input type="file"
                  name="userUpload"
                  onChange={this.fileUpload}
                  className="custom-file-input"
                  id="validatedCustomFile"
                  accept="image/png, image/jpeg, image/jpg" />
                <label className="custom-file-label"
                  htmlFor="validatedCustomFile">{this.state.image !== '' ? this.state.image : 'Choose a file...'}</label>
                <div className="invalid-feedback">Not a supported file type</div>
              </div>
            </div>
          </div>
          <div className="fixed-bottom p-3 overlap">
            <div className="calc-button-50">
              <EditOrSave
                isEditing={this.state.changeDetail}
                changeDetailCallback={this.changeDetail} />
              <button
                className="spon-button-cancel rounded mt-0"
                onClick={() => this.props.history.goBack()}>
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }

  handleSubmit() {
    event.preventDefault();
    if (Object.getOwnPropertyNames(this.state.userUpload).length === 0) {
      this.updateInfo({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        image: this.state.image,
        password: this.state.password
      });
      this.uploadHandler();
    }
    this.props.fetchUser();
    this.props.history.push(`/profile?userId=${this.props.user.userId}`);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  validation() {
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

  componentDidUpdate(prevProps, prevState) {
    if (this.state.email !== prevState.email) {
      this.validation();
    } else if (this.state.password !== prevState.password) {
      this.validation();
    }
  }

  changeDetail() {
    this.setState({ changeDetail: !this.state.changeDetail, isReadOnly: !this.state.isReadOnly });
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
    const userInfo = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      image: this.state.image,
      password: this.state.password,
      userUpload: this.state.userUpload
    };
    this.updateInfo(userInfo);
  }

  updateInfo({ firstName, lastName, email, password, image }) {
    const config = {
      method: 'PUT',
      body: JSON.stringify({ firstName, lastName, email, password, image }),
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

function EditOrSave(props) {
  if (props.isEditing) {
    return (<button className="spon-button text-white rounded mt-0" onClick={() => {
      props.changeDetailCallback();
    }}>Save</button>);
  }
  return (<button className="spon-button text-white rounded mt-0" onClick={props.changeDetailCallback}>Edit</button>);
}
