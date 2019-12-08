import React from 'react';

class AccountSetting extends React.Component {

  render() {
    return (
      <div className="container my-5">
        <h4 className="d-flex justify-content-center mb-4">Account Settings</h4>
        <div className="input-group input-group-sm mb-3">
          <label className="account-setting-text">First Name:</label>
          <div className="input-group mb-3">
            <div className="input-group account-setting-input w-100">
              <input type="text" className="form-control" aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"/>
              <div className="edit-button d-flex ml-3">
                <i className="fas fa-edit fa-2x adventure-card m-auto"></i>
              </div>
            </div>
          </div>
          <label className="account-setting-text">Last Name:</label>
          <div className="input-group mb-3">
            <div className="input-group account-setting-input w-100">
              <input type="text" className="form-control" aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"/>
              <div className="edit-button d-flex ml-3">
                <i className="fas fa-edit fa-2x adventure-card m-auto"></i>
              </div>
            </div>
          </div>
          <label className="account-setting-text">Email:</label>
          <div className="input-group mb-3">
            <div className="input-group account-setting-input w-100">
              <input type="text" className="form-control" aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"/>
              <div className="edit-button d-flex ml-3">
                <i className="fas fa-edit fa-2x adventure-card m-auto"></i>
              </div>
            </div>
          </div>
          <label className="account-setting-text">Password:</label>
          <div className="input-group mb-3">
            <div className="input-group account-setting-input w-100">
              <input type="text" className="form-control" aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"/>
              <div className="edit-button d-flex ml-3">
                <i className="fas fa-edit fa-2x adventure-card m-auto"></i>
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
                htmlFor="validatedCustomFile">Choose file...</label>
              <div className="invalid-feedback">Not a supported file type</div>
            </div>
          </div>
        </div>
        <div className="fixed-bottom p-3">
          <div className="calc-button-50">
            <button
              className="spon-button text-white rounded mt-0"
              onClick={() => this.props.history.goBack()}>
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
}

export default AccountSetting;
