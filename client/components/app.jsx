import React from 'react';
import Header from './header';
import DefaultPage from './default-page';
import ActivityList from './activity-list';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'home'
    };
    this.setView = this.setView.bind(this);
  }

  setView(name) {
    this.setState({
      view: name
    });
  }

  render() {
    let differentPage;
    const stateName = this.state.view;
    if (stateName === 'home') {
      differentPage = <DefaultPage setView={this.setView}/>;
    } else if (stateName === 'activityList') {
      differentPage = <ActivityList setView={this.setView}/>;
    }
    return (
      <div>
        <Header setView={this.setView}/>
        {differentPage}
      </div>
    );
  }
}

export default App;
