import React from 'react';
import AccountDetail from './account-detail';

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
      validEmail: true,
      validPassword: true
    };
    this.updateInfo = this.updateInfo.bind(this);
    this.uploadHandler = this.uploadHandler.bind(this);
    this.fileUpload = this.fileUpload.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.changeDetail = this.changeDetail.bind(this);
  }

  render() {
    const firstName = this.state.firstName;
    const lastName = this.state.lastName;
    const email = this.state.email;
    return (
      <div className="container my-5">
        <h4 className="d-flex justify-content-center mb-4">Account Settings</h4>
        <form onSubmit={() => {
          event.preventDefault();
          this.uploadHandler(this.state);
        }}>
          <div className="input-group input-group-sm mb-3">
            <label className="account-setting-text">First Name:</label>
            <div className="input-group mb-3">
              <div className="input-group account-setting-input w-100">
                <AccountDetail
                  name="firstName"
                  value={firstName}
                  state={this.state}
                  placeholder="Enter your First Name"
                  type="text"
                  changeCallback={this.handleChange}/>
              </div>
            </div>
            <label className="account-setting-text">Last Name:</label>
            <div className="input-group mb-3">
              <div className="input-group account-setting-input w-100">
                <AccountDetail
                  name="lastName"
                  value={lastName}
                  state={this.state}
                  placeholder="Enter your Last Name"
                  type="text"
                  changeCallback={this.handleChange} />
              </div>
            </div>
            <label className="account-setting-text">Email:</label>
            <div className="input-group mb-3">
              <div className="input-group account-setting-input w-100">
                <AccountDetail
                  name="email"
                  value={email}
                  state={this.state}
                  placeholder="example@example.com"
                  type="email"
                  validEmail={this.state.validEmail}
                  changeCallback={this.handleChange} />
              </div>
            </div>
            <label className="account-setting-text">Password:</label>
            <div className="input-group mb-3">
              <div className="input-group account-setting-input w-100">
                <AccountDetail
                  name="password"
                  state={this.state}
                  placeholder="Enter New Password"
                  type="password"
                  validPassword={this.state.validPassword}
                  changeCallback={this.handleChange} />
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
                  accept="image/png, image/jpeg, image/jpg" />
                <label className="custom-file-label"
                  htmlFor="validatedCustomFile">{this.state.image !== '' ? this.state.image : 'Choose a file...'}</label>
                <div className="invalid-feedback">Not a supported file type</div>
              </div>
            </div>
          </div>
          <div className="fixed-bottom p-3">
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

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });

    // Not just any text field in this case - requires the email address to have the @ and end with a valid domain
    const emailRegex = RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    // Minimum of eight characters, at least one letter and one number
    const passwordRegex = RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{7,}$/);

    if (!emailRegex.test(this.state.email)) {
      this.setState({ validEmail: false });
    } else {
      this.setState({ validEmail: true });
    }

    if (!passwordRegex.test(this.state.password)) {
      this.setState({ validPassword: false });
    } else {
      this.setState({ validPassword: true });
    }
  }

  changeDetail() {
    const updatedDetails = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      userUpload: this.state.userUpload
    };

    if (updatedDetails.firstName.length && updatedDetails.lastName.length > 2 && this.state.validEmail && this.state.validPassword) {
      this.setState({ changeDetail: !this.state.changeDetail });
    }
  }

  fileUpload(event) {
    const image = event.target.files[0].name;
    const userUpload = event.target.files[0];
    this.setState({ userUpload });
    this.setState({ image });
  }

  uploadHandler(userInfo) {
    const formData = new FormData();
    formData.append(
      'image',
      this.state.userUpload,
      this.state.userUpload.name
    );
    const config = {
      method: 'POST',
      body: userInfo
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

function EditOrSave(props) {
  if (props.isEditing) {
    return (<button className="spon-button text-white rounded mt-0" onClick={props.changeDetailCallback}>Save</button>);
  }
  return (<button className="spon-button text-white rounded mt-0" onClick={props.changeDetailCallback}>Edit</button>);
}
