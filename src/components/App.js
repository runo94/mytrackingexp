import React, {Component, Fragment} from 'react';
import Header from './Header'
import Home from './Home'

import '../assets/styles/App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
      <Header />
      <Home />
      </Fragment>
  );
  }
}

export default App;
