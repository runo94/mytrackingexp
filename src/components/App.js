import React, {Component, Fragment} from 'react';
import Header from './Header'
import Home from './Home'
import { initializeFirebase } from '../assets/firebase';

import '../assets/styles/App.css';

class App extends Component {

  componentWillMount(){
    initializeFirebase();
  }

  
  render() {
    return (
      <>
          <Header />
          <Home />
      </>
    );
  }
}

export default App;
