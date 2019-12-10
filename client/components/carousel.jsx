import React from 'react';
import NoActivitiesModal from './no-activities-modal';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCard: 1,
      position: 0,
      maxCards: 6,
      activities: []
    };
    this.startTimer = this.startTimer.bind(this);
    this.moveBackward = this.moveBackward.bind(this);
    this.moveForward = this.moveForward.bind(this);
    this.getPosition = this.getPosition.bind(this);
    this.startTimer();
  }

  startTimer() {
    setInterval(this.moveForward, 5000);
  }

  moveBackward() {
    const newState = this.state;
    newState.currentCard--;
    newState.position = newState.position + 100;
    if (newState.currentCard === 0) {
      newState.currentCard = this.props.activities.length;
      newState.position = -((this.props.activities.length - 1) * 100);
    }
    this.setState(newState);
  }

  moveForward() {
    const newState = this.state;
    newState.currentCard++;
    newState.position = newState.position - 100;
    if (newState.currentCard === this.props.activities.length + 1) {
      newState.currentCard = 1;
      newState.position = 0;
    }
    this.setState(newState);
  }

  setPosition(id) {
    const position = (id - 1) * -100;
    this.setState({
      currentCard: id,
      position: position
    });
  }

  getPosition(props) {
    const position = {
      currentCard: this.state.currentCard,
      position: this.state.position,
      currentImageArray: []
    };
    for (let index = 0; index < this.props.activities.length; index++) {
      const id = index + 1;
      if (index + 1 === position.currentCard) {
        position.currentImageArray.push(<div className="current-image activeSlide" id={this.props.id} key={id} onClick={() => {
          this.setPosition(id);
        }}></div>);
      } else {
        position.currentImageArray.push(<div className="current-image" id={this.props.id} key={id} onClick={() => {
          this.setPosition(id);
        }}></div>);
      }
    }
    return position;
  }

  render() {
    const currentPosition = this.getPosition();
    if (this.props.activities.length === 0) {
      return <NoActivitiesModal {...this.props}/>;
    }
    const activityCard = this.props.activities.map(activity => {
      return (
        <div
          className="carousel-container w-100 col-12"
          style={{ backgroundImage: `linear-gradient(#00000033, #00000033), url(assets/images/activity/${activity.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          id={activity.activityId}
          key={activity.activityId}>
          <div className="inner-card text-center">
            <h3 className="text-white text-center mb-3">{activity.activity}</h3>
            <button
              className="spon-button text-white rounded m-auto"
              onClick={() => {
                const activityId = activity.activityId;
                this.props.history.push(`/activity-details?activityId=${activityId}`);
              }
              }>Learn More</button>
          </div>
        </div>
      );
    });
    return (
      <div className="outer mb-3">
        <div className="inner">
          <div className="slides d-flex" style={{ transform: `translateX(${currentPosition.position}%)` }}>
            {activityCard}
          </div>
        </div>
        <div className="indicator">{currentPosition.currentImageArray}</div>
        <button className="arrow left" onClick={this.moveBackward}>
          ←
        </button>
        <button className="arrow right" onClick={this.moveForward}>
          →
        </button>
      </div>
    );
  }
}

export default Carousel;
