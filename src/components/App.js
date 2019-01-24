import React, {Component, Fragment} from 'react';
import '../assets/styles/App.css';
import Header from './Header'
import Home from './Home'


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
