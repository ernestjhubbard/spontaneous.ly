import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCard: 1,
      position: 0,
      maxCards: 6
    };
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.moveBackward = this.moveBackward.bind(this);
    this.moveForward = this.moveForward.bind(this);
    this.getPosition = this.getPosition.bind(this);
    this.startTimer();
  }

  startTimer() {
    setInterval(this.moveForward, 5000);
  }

  stopTimer() {
  }

  moveBackward() {
    const newState = this.state;
    newState.currentCard--;
    newState.position = newState.position + 350;
    if (newState.currentCard === 0) {
      newState.currentCard = 6;
      newState.position = -1750;
    }
    this.setState(newState);
  }

  moveForward() {
    const newState = this.state;
    newState.currentCard++;
    newState.position = newState.position - 350;
    if (newState.currentCard === 7) {
      newState.currentCard = 1;
      newState.position = 0;
    }
    this.setState(newState);
  }

  setPosition(id) {
    const position = (id - 1) * -350;
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
    for (let index = 0; index < this.state.maxCards; index++) {
      const id = index + 1;
      if (index + 1 === position.currentCard) {
        position.currentImageArray.push(<div className="current-image active" id={this.props.id} key={id} onClick={() => {
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
    return (
      <div className="outer">
        <div className="inner">
          <div className="slides" style={{ transform: `translateY(${currentPosition.position}px)` }}>
            <div
              className="carousel-container w-100"
              style={{ backgroundImage: `url(${this.props.image})` }}
              id={this.props.id} >
              <div className="inner-card">
                <h3 className="text-white text-center mb-3">{this.props.name}</h3>
                <button className="learn-more-cta m-auto">Learn More</button>
              </div>
            </div>
            <div
              className="carousel-container w-100"
              style={{ backgroundImage: `url(${this.props.image})` }}
              id={this.props.id} >
              <div className="inner-card">
                <h3 className="text-white text-center mb-3">{this.props.name}</h3>
                <button className="learn-more-cta m-auto">Learn More</button>
              </div>
            </div>
            <div
              className="carousel-container w-100"
              style={{ backgroundImage: `url(${this.props.image})` }}
              id={this.props.id} >
              <div className="inner-card">
                <h3 className="text-white text-center mb-3">{this.props.name}</h3>
                <button className="learn-more-cta m-auto">Learn More</button>
              </div>
            </div>
            <div
              className="carousel-container w-100"
              style={{ backgroundImage: `url(${this.props.image})` }}
              id={this.props.id} >
              <div className="inner-card">
                <h3 className="text-white text-center mb-3">{this.props.name}</h3>
                <button className="learn-more-cta m-auto">Learn More</button>
              </div>
            </div>
            <div
              className="carousel-container w-100"
              style={{ backgroundImage: `url(${this.props.image})` }}
              id={this.props.id} >
              <div className="inner-card">
                <h3 className="text-white text-center mb-3">{this.props.name}</h3>
                <button className="learn-more-cta m-auto">Learn More</button>
              </div>
            </div>
            <div
              className="carousel-container w-100"
              style={{ backgroundImage: `url(${this.props.image})` }}
              id={this.props.id}>
              <div className="inner-card">
                <h3 className="text-white text-center mb-3">{this.props.name}</h3>
                <button className="learn-more-cta m-auto">Learn More</button>
              </div>
            </div>
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
