import React from 'react';
import Header from './header';
import CenterNav from './center-nav';
import BottomNav from './bottom-nav';

class App extends React.Component {

  render() {
    return (
      <div>
        <Header/>
        <CenterNav/>
        <BottomNav/>
      </div>
    );
  }
}

export default App;
