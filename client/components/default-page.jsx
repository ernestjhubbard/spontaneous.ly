import React from 'react';
import Footer from './footer';
import {
  Link
} from 'react-router-dom';

class DefaultPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zipcode: null
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
    this.setZip(this.state.zipcode);
    this.props.history.push('/activity-filter');
  }

  render() {
    return (
      <div className="">
        <div className="center-nav d-flex">
          <div className="m-auto">
            <h1 className="text-center h2">Spontaneous.ly</h1>
            <p className="text-center">Get connected. Be spontaneous</p>
            <form onSubmit={this.handleSubmit}>
              <input className="input-font w-100 form-control-lg border text-center"
                type="text"
                placeholder="Enter your zip"
                minLength="5"
                maxLength="5"
                onChange={this.handleChange}></input>
            </form>
          </div>
        </div>
        <div className="bottom-nav my-5">
          <div className="bottom-text col-sm-12 mb-3">
            <h4>Spontaneous Adventures for Any Interest</h4>
            <p>Adventures are all around you, in many shapes and forms.  See some example activities that our users participate in.</p>
          </div>
          <div className="d-flex flex-row horizontal-scroll mb-4">
            <div className="col-sm-3">
              <div className="card card-size adventure-card">
                <img src="assets/images/wine-and-paint.jpg" className="img-info card-img-top" alt="Wine and Paint" />
                <div className="card-body">
                  <p className="text-muted"><small>Wine and Paint</small></p>
                  <p className="text-muted mb-0">
                    <Link to="/adventures?activity=wine-and-paint">
                      <small>Learn More</small>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="card card-size adventure-card">
                <img src="assets/images/pickup-basketball.jpg"
                  className="img-info card-img-top" alt="Backetball Leagues" />
                <div className="card-body">
                  <p className="text-muted"><small>Pickup Basketball</small></p>
                  <p className="text-muted mb-0">
                    <Link to="/adventures?activity=pickup-basketball">
                      <small>Learn More</small>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="card card-size adventure-card">
                <img src="assets/images/yoga.jpg" className="img-info card-img-top" alt="Yoga" />
                <div className="card-body">
                  <p className="text-muted"><small>Yoga</small></p>
                  <p className="text-muted mb-0">
                    <Link to="/adventures?activity=yoga">
                      <small>Learn More</small>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="card card-size adventure-card">
                <img src="assets/images/parasailing.jpg" className="img-info card-img-top"
                  alt="Parasailing" />
                <div className="card-body">
                  <p className="text-muted"><small>Parasailing</small></p>
                  <p className="text-muted mb-0">
                    <Link to="/adventures?activity=parasailing">
                      <small>Learn More</small>
                    </Link>
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
