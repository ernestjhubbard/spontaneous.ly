import React from 'react';
import {
  Link
} from 'react-router-dom';

class DefaultPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToResults: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    this.setState({ redirectToResults: true });
  }

  render() {
    if (this.state.redirectToResults) {
      return (null);
    }
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
                maxLength="5"></input>
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
                <img src="assets/images/wine-and-paint.jpg" className="img-info card-img-top" alt="Wine and Paint" />
                <div className="card-body">
                  <p className="text-muted"><small>Wine and Paint</small></p>
                  <p className="text-muted mb-0">
                    <Link to="/adventures/Wine and Paint"><small>Learn More</small></Link>
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
                    <Link to="/adventures/Pickup Basketball"><small>Learn More</small></Link>
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
                    <Link to="/adventures/Yoga"><small>Learn More</small></Link>
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
                    <Link to="/adventures/Parasailing"><small>Learn More</small></Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// function DefaultPage(props) {
//   return (
//     <div className="">
//       <div className="center-nav d-flex">
//         <div className="m-auto">
//           <h1 className="text-center h2">Spontaneous.ly</h1>
//           <p className="text-center">Get connected. Be spontaneous</p>
//           <form onSubmit={() => props.setView('activityFilter')}>
//             <input className="input-font w-100 form-control-lg border text-center"
//               type="text"
//               placeholder="Enter your zip"
//               maxLength="5"></input>
//           </form>
//         </div>
//       </div>
//       <div className="bottom-nav">
//         <div className="bottom-text my-4 col-sm-12">
//           <h4>Spontaneous Adventures for Any Interest</h4>
//         </div>
//         <div className="d-flex flex-row horizontal-scroll mb-4">
//           <div className="col-sm-3">
//             <div className="card card-size adventure-card">
//               <img src="assets/images/wine-and-paint.jpg" className="img-info card-img-top" alt="Wine and Paint" />
//               <div className="card-body">
//                 <p className="text-muted"><small>Wine and Paint</small></p>
//                 <p className="text-muted mb-0">
//                   <Link to="/adventures/Wine and Paint"><small>Learn More</small></Link>
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="col-sm-3">
//             <div className="card card-size adventure-card">
//               <img src="assets/images/pickup-basketball.jpg"
//                 className="img-info card-img-top" alt="Backetball Leagues" />
//               <div className="card-body">
//                 <p className="text-muted"><small>Pickup Basketball</small></p>
//                 <p className="text-muted mb-0">
//                   <Link to="/adventures/Pickup Basketball"><small>Learn More</small></Link>
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="col-sm-3">
//             <div className="card card-size adventure-card">
//               <img src="assets/images/yoga.jpg" className="img-info card-img-top" alt="Yoga" />
//               <div className="card-body">
//                 <p className="text-muted"><small>Yoga</small></p>
//                 <p className="text-muted mb-0">
//                   <Link to="/adventures/Yoga"><small>Learn More</small></Link>
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="col-sm-3">
//             <div className="card card-size adventure-card">
//               <img src="assets/images/parasailing.jpg" className="img-info card-img-top"
//                 alt="Parasailing" />
//               <div className="card-body">
//                 <p className="text-muted"><small>Parasailing</small></p>
//                 <p className="text-muted mb-0">
//                   <Link to="/adventures/Parasailing"><small>Learn More</small></Link>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

export default DefaultPage;
