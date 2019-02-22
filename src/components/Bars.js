import React, {Component, Fragment} from "react";
import firebase from "firebase";

class Bars extends Component  {

    addBars = e => {
      e.preventDefault();
  
      const db = firebase.firestore();
      const pullUpsRef = db.collection("mysporttracker_collect").add({
        bars: this.state.bars,
        time: new Date().getTime()
      });
  
      this.setState({
        bars: ""
      });
    };
    
    render(){
        return (
            <div className="form-group col-6 ">
                <label>Брусья:</label>
                <div className="workoutsInputs">
                    <input onChange={this.props.updateInput} type="number" name="bars" value={this.props.value} className="col-8 form-control form-control"></input>
                    <button onClick={this.props.addBars} className="col-3 btn myblue rounded-circle">+</button>
                </div>
            </div>
        )
    }
}

export default Bars