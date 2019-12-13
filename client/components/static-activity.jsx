import React from 'react';
import Footer from './footer';
// import { Link } from 'react-router-dom';

class StaticActivity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentActivity: null
    };
    this.activity = props.match.params.activity;
    this.getContent = this.getContent.bind(this);
  }

  componentDidMount() {
    const searchParams = (new URLSearchParams(window.location.search)).toString();
    const splitParams = searchParams.split('=');
    this.setState({ currentActivity: splitParams[1] });
  }

  getContent(activity) {
    const contentObject = {
      heroClass: null,
      content: {
        headline: null,
        text1: null,
        img1: null,
        imgAlt: null,
        text2: null
      }
    };

    switch (this.state.currentActivity) {
      case 'wine-and-paint':
        contentObject.heroClass = 'wine-and-paint-hero';
        contentObject.content.headline = 'Search for Activities';
        contentObject.content.text1 = 'Spontaneous.ly allows you to search for upcoming activities and adventures in your area.  There are different things to suite anyone\'s level of adventure, budget, or location.  Simply input your five-digit zipcode into the home page screen, and input your filtering options, to see the list of activities.';
        contentObject.content.img1 = '/assets/images/static/paint-img-1.jpg';
        contentObject.imgAlt = 'Abstract painting';
        contentObject.content.text2 = 'Whether you\'re looking for a simple picnic in the park, or to go offroading in Anza Borrego, Spontaneous.ly can get you connected to the right adventure.';
        break;
      case 'pickup-basketball':
        contentObject.heroClass = 'pickup-basketball-hero';
        contentObject.content.headline = 'Gain Points';
        contentObject.content.text1 = 'By attending events, you\'ll begin obtaining Spontaneity Points.  The more adventurous your activity is, the more points you will obtain by attending.  When logged in you\'ll be able to see all your points while viewing your profile, among other things.';
        contentObject.content.img1 = '/assets/images/static/basketball-img-1.jpg';
        contentObject.imgAlt = 'Empty Basketball Court';
        contentObject.content.text2 = 'These points serve as a testimate to your level of adventure, and provide a bit more context to all the adventures you\'ve been on since joining the app.';
        break;
      case 'yoga':
        contentObject.heroClass = 'yoga-hero';
        contentObject.content.headline = 'Connect with Others';
        contentObject.content.text1 = 'Once you\'ve confirmed your reservation for an activity, you can view the list of attendees for the same activity.  From there, you can choose to view the other users\' profiles, and add them as a friend.';
        contentObject.content.img1 = '/assets/images/static/yoga-img-1.jpg';
        contentObject.imgAlt = 'Woman doing yoga in peaceful setting';
        contentObject.content.text2 = 'Once you have some friends on your friends list, send them a message to see what they\'re up to.  You\'ll also be able to see their upcoming activities to join in, or see their past activities to see what they\'ve been up to.';
        break;
      case 'parasailing':
        contentObject.heroClass = 'parasailing-hero';
        contentObject.content.headline = 'Spend to Re-Roll';
        contentObject.content.text1 = 'The points you accumulate will allow you to re-roll or cancel your reservations.  If you aren\'t satisfied with the choices that you got based on your filtering options, you can spend 25 points to go back to the filter and perform a new search with new parameters.';
        contentObject.content.img1 = '/assets/images/static/parasail-img-1.jpg';
        contentObject.imgAlt = 'People parasailing along the beach';
        contentObject.content.text2 = 'Cancelling an activity reservation costs you 50 points altogether, but you can cancel at any time before the event.  Simply go to the activity detail page for any upcoming activity, and click the Cancel button.';
        break;
    }

    return contentObject;
  }

  render() {
    const allContent = this.getContent(this.state.currentActivity);
    return (
      <div>
        <div className={`${allContent.heroClass} top-banner d-flex`}>
          <div className="m-auto p-3">
            <h2 className="text-center text-white">
              {allContent.content.headline}
            </h2>
          </div>
        </div>
        <div className="container-fluid my-5">
          <p>{allContent.content.text1}</p>
          <img
            src={allContent.content.img1}
            alt={allContent.content.imgAlt}
            className="img-fluid my-5 w-100"
          />
          <p>{allContent.content.text2}</p>
        </div>
        <Footer />
      </div>
    );
  }
}

export default StaticActivity;
