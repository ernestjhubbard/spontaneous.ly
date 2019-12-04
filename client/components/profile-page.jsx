import React from 'react';

class ProfilePage extends React.Component {
  componentDidMount() {
    this.props.getPoints();
  }

  render() {
    const profileImage = {
      backgroundImage: `url("assets/images/users/${this.props.user.image}")`
    };
    return (
      <div className="container align-center d-flex">
        <div className="profile-center m-auto">
          <div
            className="profile-user-info my-5">
            <div className="profile-user-image rounded-circle m-auto" style={profileImage}></div>
            <h4 className="font-weight-bold text-center my-3">{this.props.user.firstName} {this.props.user.lastName}</h4>
          </div>
          <div className="border rounded p-3">
            <h4 className="align-center text-center">Spontaneity Points</h4>
            <h1 className="profile-point-value text-center m-auto">{this.props.points}</h1>
          </div>
          <div className="profile-footer">
            <button className="spon-button rounded text-white col-12" onClick={() => this.props.setView('upcomingActivities')}>Upcoming Adventures</button>
            <button className="spon-button rounded text-white col-12" onClick={() => this.props.setView('pastActivities')}>Past Adventures</button>
            <div className="calc-button-50">
              <button className="spon-button rounded text-white" onClick={() => this.props.setView('friendList')}>Friends</button>
              <button className="spon-button rounded text-white">Messages</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfilePage;
