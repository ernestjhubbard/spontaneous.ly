import React from 'react';
import Footer from './footer';

class DefaultPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zipcode: null,
      validZip: null,
      unmounting: false
    };
    this.setZip = this.props.setZip;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange() {
    this.setState({ zipcode: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    const zipcodeRegex = RegExp(/(^\d{5}$)/);
    if (zipcodeRegex.test(this.state.zipcode)) {
      this.setState({ validZip: true });
      this.props.history.push('/activity-filter');
    } else {
      this.setState({ validZip: false });
    }

    this.setZip(this.state.zipcode);
  }

  render() {
    return (
      <div>
        <div className="center-nav d-flex">
          <div className="m-auto">
            <h1 className="text-center h2">Spontaneous.ly</h1>
            <p className="text-center">Get connected. Be spontaneous</p>
            <form onSubmit={this.handleSubmit}>
              <input
                className="input-font w-100 form-control-lg border text-center"
                type="text"
                placeholder="Enter your zip"
                minLength="5"
                maxLength="5"
                onChange={this.handleChange}
              ></input>
            </form>
          </div>
        </div>
        <div className="bottom-nav my-5">
          <div className="bottom-text col-sm-12 mb-3">
            <h4>Spontaneous Adventures for Any Interest</h4>
            <p>
              Adventures are all around you, in many shapes and forms. Learn more about what Spontaneous.ly can do.
            </p>
          </div>
          <div className="d-flex flex-row horizontal-scroll justify-content-sm-between">
            <div
              className="col-sm-3"
              onClick={() => {
                this.props.history.push('/adventures?info=search-for-activities');
              }}
            >
              <div className="card card-size adventure-card">
                <img
                  src="assets/images/wine-and-paint.jpg"
                  className="img-info card-img-top"
                  alt="Wine and Paint"
                />
                <div className="card-body">
                  <p className="text-muted">
                    <small>Search for Activities in your Area</small>
                  </p>
                  <p className="font-color mb-0">
                    <small>Click to Learn More</small>
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-sm-3"
              onClick={() => {
                this.props.history.push(
                  '/adventures?info=gain-points'
                );
              }}
            >
              <div className="card card-size adventure-card">
                <img
                  src="assets/images/pickup-basketball.jpg"
                  className="img-info card-img-top"
                  alt="Backetball Leagues"
                />
                <div className="card-body">
                  <p className="text-muted">
                    <small>Gain Points for Attending Activities</small>
                  </p>
                  <p className="font-color mb-0">
                    <small>Click to Learn More</small>
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-sm-3"
              onClick={() => {
                this.props.history.push('/adventures?info=connect-with-others');
              }}
            >
              <div className="card card-size adventure-card">
                <img
                  src="assets/images/yoga.jpg"
                  className="img-info card-img-top"
                  alt="Yoga"
                />
                <div className="card-body">
                  <p className="text-muted">
                    <small>Connect with Other Users Attending Activities</small>
                  </p>
                  <p className="font-color mb-0">
                    <small>Click to Learn More</small>
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-sm-3"
              onClick={() => {
                this.props.history.push('/adventures?info=spend-to-re-roll');
              }}
            >
              <div className="card card-size adventure-card">
                <img
                  src="assets/images/parasailing.jpg"
                  className="img-info card-img-top"
                  alt="Parasailing"
                />
                <div className="card-body">
                  <p className="text-muted">
                    <small>Spend Points to Re-Roll See New Activities</small>
                  </p>
                  <p className="font-color mb-0">
                    <small>Click to Learn More</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default DefaultPage;
