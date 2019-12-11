import React from 'react';
import Footer from './footer';
import {
  Link
} from 'react-router-dom';

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
              Adventures are all around you, in many shapes and forms. See some
              example activities that our users participate in.
            </p>
          </div>
          <div className="d-flex flex-row horizontal-scroll mb-4">
            <Link to="/adventures?activity=wine-and-paint">
              <div className="col-sm-3">
                <div className="card card-size adventure-card">
                  <img
                    src="assets/images/wine-and-paint.jpg"
                    className="img-info card-img-top"
                    alt="Wine and Paint"
                  />
                  <div className="card-body">
                    <p className="text-muted">
                      <small>Wine and Paint</small>
                    </p>
                    <p className="font-color mb-0">
                      <small>Click to Learn More</small>
                    </p>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/adventures?activity=pickup-basketball">
              <div className="col-sm-3">
                <div className="card card-size adventure-card">
                  <img
                    src="assets/images/pickup-basketball.jpg"
                    className="img-info card-img-top"
                    alt="Backetball Leagues"
                  />
                  <div className="card-body">
                    <p className="text-muted">
                      <small>Pickup Basketball</small>
                    </p>
                    <p className="font-color mb-0">
                      <small>Click to Learn More</small>
                    </p>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/adventures?activity=yoga">
              <div className="col-sm-3">
                <div className="card card-size adventure-card">
                  <img
                    src="assets/images/yoga.jpg"
                    className="img-info card-img-top"
                    alt="Yoga"
                  />
                  <div className="card-body">
                    <p className="text-muted">
                      <small>Yoga</small>
                    </p>
                    <p className="font-color mb-0">
                      <small>Click to Learn More</small>
                    </p>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/adventures?activity=parasailing">
              <div className="col-sm-3">
                <div className="card card-size adventure-card">
                  <img
                    src="assets/images/parasailing.jpg"
                    className="img-info card-img-top"
                    alt="Parasailing"
                  />
                  <div className="card-body">
                    <p className="text-muted">
                      <small>Parasailing</small>
                    </p>
                    <p className="font-color mb-0">
                      <small>Click to Learn More</small>
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default DefaultPage;
