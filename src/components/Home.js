import React, {Component, Fragment} from "react";
import firebase from "firebase";
import ChangeColor from "./ChangeColor";

function RenderPullUps(props)  {
  return (
    <div className="form-group col-6">
      <label>Подтяивания:</label>
      <div className="workoutsInputs">
        <input onChange={props.updateInput} type="number" name="pullUps" value={props.value} className="col-8 form-control form-control"></input>
        <button onClick={props.addPullUps} className="col-3 btn mygreen rounded-circle">+</button>
      </div>
    </div>
  )
}

function RenderBars(props) {
  return (
    <div className="form-group col-6 ">
      <label>Брусья:</label>
      <div className="workoutsInputs">
        <input onChange={props.updateInput} type="number" name="bars" value={props.value} className="col-8 form-control form-control"></input>
        <button onClick={props.addBars} className="col-3 btn myblue rounded-circle">+</button>
      </div>
    </div>
  )
}

class Home extends Component {

  constructor() {
    super();
    this.state = {
      pullUps: 0,
      bars: 0
    };
  }

  updateInput = e => {
    this.setState({
      [e.target.name]: Number(e.target.value)
    });
  }

  addPullUps = e => {

    e.preventDefault();

    const db = firebase.firestore();
    const userRef = db.collection("mysporttracker_collect").add({
      pullUps: this.state.pullUps,
    });

    this.setState({
      pullUps: 0
    });
  };

  addBars = e => {
    e.preventDefault();

    const db = firebase.firestore();
    const userRef = db.collection("mysporttracker_collect").add({
      bars: this.state.bars,
    });

    this.setState({
      "bars": 0
    });
  };


  render() {
    console.log(this.state);
    return (
      <div className="container wrapperHome">
        <div className="row">
          <div className="col-12 col-md-4">
            <div className="row">
              <RenderPullUps updateInput={this.updateInput} value={this.state.pullUps} addPullUps={this.addPullUps}/>
              <RenderBars updateInput={this.updateInput} value={this.state.bars} addBars={this.addBars}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
