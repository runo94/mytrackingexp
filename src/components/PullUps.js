import React, {Component, Fragment} from "react";
import firebase from "firebase";

class PullUps extends Component  {

    addPullUps = e => {

        e.preventDefault();

        const db = firebase.firestore();
        const pullUpsRef = db.collection("mysporttracker_collect").add({
        pullUps: this.state.pullUps,
        time: new Date().getTime()
        });

        this.setState({
        pullUps: "",
        });
    };
    
    render(){
        return (
            <div className="form-group col-6">
            <label>Подтяивания:</label>
            <div className="workoutsInputs">
                <input onChange={this.props.updateInput} type="number" name="pullUps" value={this.props.value} className="col-8 form-control form-control"></input>
                <button onClick={this.props.addPullUps} className="col-3 btn mygreen rounded-circle">+</button>
            </div>
            </div>
        )
    }
}

export default PullUps