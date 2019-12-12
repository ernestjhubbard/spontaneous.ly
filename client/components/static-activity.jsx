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
        contentObject.content.text2 = 'These points serve as a means to keep track of all the different adventures you\'ve been on s.';
        break;
      case 'yoga':
        contentObject.heroClass = 'yoga-hero';
        contentObject.content.headline = 'Connect with Others';
        contentObject.content.text1 = 'Aliquet risus feugiat in ante metus dictum at tempor. Amet venenatis urna cursus eget nunc scelerisque viverra. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a. Ut tellus elementum sagittis vitae et leo. Molestie nunc non blandit massa enim. Habitant morbi tristique senectus et netus et. Placerat vestibulum lectus mauris ultrices eros in cursus. Turpis egestas integer eget aliquet nibh praesent tristique magna sit. Egestas erat imperdiet sed euismod nisi porta lorem. Id donec ultrices tincidunt arcu non sodales neque sodales. Id aliquet risus feugiat in ante metus. Feugiat pretium nibh ipsum consequat nisl vel. Sapien nec sagittis aliquam malesuada bibendum.';
        contentObject.content.img1 = '/assets/images/static/yoga-img-1.jpg';
        contentObject.imgAlt = 'Woman doing yoga in peaceful setting';
        contentObject.content.text2 = 'Sit amet porttitor eget dolor. Dictum at tempor commodo ullamcorper. Aenean vel elit scelerisque mauris. Semper risus in hendrerit gravida rutrum. Risus feugiat in ante metus. Scelerisque felis imperdiet proin fermentum. Urna et pharetra pharetra massa massa ultricies mi. Mi bibendum neque egestas congue quisque egestas diam. Mi tempus imperdiet nulla malesuada pellentesque elit eget gravida. Eget sit amet tellus cras adipiscing. Ac tortor dignissim convallis aenean et tortor at risus. Amet nisl suscipit adipiscing bibendum est ultricies. Ut faucibus pulvinar elementum integer enim. Venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin. Praesent tristique magna sit amet.';
        break;
      case 'parasailing':
        contentObject.heroClass = 'parasailing-hero';
        contentObject.content.headline = 'Spend to Re-Roll';
        contentObject.content.text1 = 'Sem viverra aliquet eget sit amet tellus cras adipiscing enim. Vitae aliquet nec ullamcorper sit amet risus nullam eget felis. Etiam dignissim diam quis enim lobortis scelerisque. Nulla facilisi etiam dignissim diam quis enim. Pretium fusce id velit ut tortor pretium viverra suspendisse. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique. Duis at tellus at urna condimentum mattis pellentesque id. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Massa vitae tortor condimentum lacinia quis vel eros donec ac. Sit amet nisl purus in mollis nunc sed id. Congue eu consequat ac felis donec et odio pellentesque diam. Duis ut diam quam nulla porttitor massa id neque aliquam. Mauris vitae ultricies leo integer malesuada nunc vel risus. Fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque. Ut eu sem integer vitae justo eget magna fermentum iaculis.';
        contentObject.content.img1 = '/assets/images/static/parasail-img-1.jpg';
        contentObject.imgAlt = 'People parasailing along the beach';
        contentObject.content.text2 = 'Ornare suspendisse sed nisi lacus sed viverra tellus in hac. Ultricies lacus sed turpis tincidunt id aliquet risus. Odio morbi quis commodo odio aenean sed. Rhoncus urna neque viverra justo. Varius vel pharetra vel turpis nunc eget lorem. Varius quam quisque id diam vel quam elementum. Id cursus metus aliquam eleifend mi in. Nibh nisl condimentum id venenatis a condimentum vitae sapien. Tellus at urna condimentum mattis pellentesque id nibh. Vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci. Vitae aliquet nec ullamcorper sit amet risus nullam eget felis. Amet volutpat consequat mauris nunc congue nisi. Pellentesque id nibh tortor id aliquet lectus proin nibh nisl.';
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
          {/* <img
            src={allContent.content.img1}
            alt={allContent.content.imgAlt}
            className="img-fluid my-5 w-100"
          /> */}
          <p>{allContent.content.text2}</p>
        </div>
        <Footer />
        {/* <div className="button-container p-3">
          <Link to="/">
            <button className="spon-button text-white rounded w-100 mt-0 mx-auto">
              Back
            </button>
          </Link>
        </div> */}
      </div>
    );
  }
}

export default StaticActivity;
