import React, {Component, Fragment} from 'react';
import Header from './Header'
import Home from './Home'
import MenuMobile from './MenuMobile'

import Swipe from 'react-easy-swipe';


import '../assets/styles/App.css';

class App extends Component {
 
  constructor(props){
    super();
    this.state = {
      position: {
        x: 0,
        y: 0
      },
      pageX: 0
    }

    this.onSwipeMove = this.onSwipeMove.bind(this)
    this.onSwipeRight = this.onSwipeRight.bind(this)
    this.onSwipeLeft = this.onSwipeLeft.bind(this)
  }
 
  onSwipeMove(position, event) {
    console.log("event.changedTouches[0].pageX", event.changedTouches[0].pageX)
    this.setState({
      position: position,
      pageX: event.changedTouches[0].pageX
    })
  }

  onSwipeLeft(position, event) {
    console.log('onSwipeLeft', event)
    this.setState({
      position: position,
    })
  }
 
  onSwipeRight(position, event) {
    console.log('onSwipeRight', event)
    this.setState({
      position: position,
    })
  }

  render() {
  
    return (
      <>
        <Swipe
          onSwipeMove={this.onSwipeMove}
          onSwipeRight={this.onSwipeRight}
          onSwipeLeft={this.onSwipeLeft}>
          <MenuMobile position={this.state.position}/>
          <Header />
          <Home />
        </Swipe>
      </>
  );
  }
}

export default App;
