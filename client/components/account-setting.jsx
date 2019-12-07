import React from 'react';

class AccountSetting extends React.Component {

  render() {
    return (
      <div className="container my-5">
        <h4 className="d-flex justify-content-center mb-4">Account Settings</h4>

        <div className="input-group input-group-sm mb-3">

          <div className="account-setting-text">First Name:</div>
          <div className="input-group mb-3">
            <div className="input-group-prepend account-setting-input">
              <input type="text" className="form-control" aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"/>
              <img src="assets/images/edit.png" className="edit-button ml-3"/>
            </div>
          </div>

          <div className="account-setting-text">Last Name:</div>
          <div className="input-group mb-3">
            <div className="input-group-prepend account-setting-input">
              <input type="text" className="form-control" aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"/>
              <img src="assets/images/edit.png" className="edit-button ml-3"/>
            </div>
          </div>

          <div className="account-setting-text">Email:</div>
          <div className="input-group mb-3">
            <div className="input-group-prepend account-setting-input">
              <input type="text" className="form-control" aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"/>
              <img src="assets/images/edit.png" className="edit-button ml-3"/>
            </div>
          </div>

          <div className="account-setting-text">Password:</div>
          <div className="input-group mb-3">
            <div className="input-group-prepend account-setting-input">
              <input type="text" className="form-control" aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"/>
              <img src="assets/images/edit.png" className="edit-button ml-3"/>
            </div>
          </div>

        </div>

        <div className="account-setting-text">Upload Profile Picture:</div>
        <button className="spon-button-alt rounded w-100 mt-0 mx-auto">Select Photo</button>

        <div className="button-container fixed-bottom p-3">
          <button
            className="spon-button-alt rounded mt-0 w-100"
            onClick={() => this.props.history.goBack()}>
            Back
          </button>
        </div>

      </div>
    );
  }
}

export default AccountSetting;
