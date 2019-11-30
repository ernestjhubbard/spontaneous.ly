import React from 'react';

function DefaultPage(props) {
  return (
    <div className="">
      <div className="center-nav d-flex">
        <div className="m-auto">
          <h1 className="text-center h2">Spontaneous.ly</h1>
          <p className="text-center">Get connected. Be spontaneous</p>
          <form onSubmit={() => props.setView('activityList')}>
            <input className="zip-input w-100 form-control-lg border text-center"
              type="text"
              placeholder="Enter your zip"></input>
          </form>
        </div>
      </div>
      <div className="bottom-nav">
        <div className="bottom-text my-4 col-sm-12">
          <h4>Spontaneous Adventures for Any Interest</h4>
        </div>
        <div className="d-flex flex-row horizontal-scroll mb-4">
          <div className="col-sm-3">
            <div className="card card-size adventure-card">
              <img src="assets/images/selective-focus-photography-of-paintbrush-near-paint-pallet-1047540.jpg" className="img-info card-img-top" alt="Wine and Paint" />
              <div className="card-body">
                <p className="text-muted"><small>Wine and Paint</small></p>
                <p className="text-muted mb-0"><a href="#"><small>Learn More</small></a></p>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card card-size adventure-card">
              <img src="assets/images/action-backlit-ball-basketball-1152853.jpg"
                className="img-info card-img-top" alt="Backetball Leagues" />
              <div className="card-body">
                <p className="text-muted"><small>Basketball Leagues</small></p>
                <p className="text-muted mb-0"><a href="#"><small>Learn More</small></a></p>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card card-size adventure-card">
              <img src="assets/images/backlit-beach-dawn-dusk-588561.jpg" className="img-info card-img-top" alt="Yoga" />
              <div className="card-body">
                <p className="text-muted"><small>Yoga</small></p>
                <p className="text-muted mb-0"><a href="#"><small>Learn More</small></a></p>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card card-size adventure-card">
              <img src="assets/images/sunset-beach-summer-hd-wallpaper-33443.jpg" className="img-info card-img-top"
                alt="Parasailing" />
              <div className="card-body">
                <p className="text-muted"><small>Parasailing</small></p>
                <p className="text-muted mb-0"><a href="#"><small>Learn More</small></a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DefaultPage;
