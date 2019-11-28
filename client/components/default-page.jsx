import React from 'react';

function DefaultPage(props) {
  return (
    <div className="container">
      <div className="center-nav">
        <div className="gradient-bg"></div>
        <div className="logo-text logo-title">Spontaneous.ly</div>
        <div className="logo-text logo-motto">Get connected. Be spontaneous</div>
        <input className="input-field"
          type="text"
          placeholder="Enter your zip"
          onClick={() => props.setView('activityList')}></input>
      </div>

      <div className="bottom-nav">
        <div className="bottom-text">Spontaneous Adventures for Any Interest</div>
        <div className="d-flex flex-row horizontal-scroll">

          <div className="col-sm-3">
            <div className="card card-size">
              <img src="assets/images/selective-focus-photography-of-paintbrush-near-paint-pallet-1047540.jpg" className="img-info card-img-top" alt="Wine and Paint" />
              <div className="card-footer">
                <small className="text-muted">Wine and Paint</small>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card card-size">
              <img src="assets/images/action-backlit-ball-basketball-1152853.jpg"
                className="img-info card-img-top" alt="Backetball Leagues" />
              <div className="card-footer">
                <small className="text-muted">Basketball Leagues</small>
              </div>
            </div>
          </div>

          <div className="col-sm-3">
            <div className="card card-size">
              <img src="assets/images/backlit-beach-dawn-dusk-588561.jpg" className="img-info card-img-top" alt="Yoga" />
              <div className="card-footer">
                <small className="text-muted">Yoga</small>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card card-size">
              <img src="assets/images/sunset-beach-summer-hd-wallpaper-33443.jpg" className="img-info card-img-top"
                alt="Parasailing" />
              <div className="card-footer">
                <small className="text-muted">Parasailing</small>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default DefaultPage;
