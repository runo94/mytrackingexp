import React, {Component, Fragment} from "react";
import firebase from "firebase";
import {connect} from 'react-redux'

import * as actions from '../assets/actions/workout';

class DataComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            data: null
        }
    }

    componentDidMount(){
        const db = firebase.firestore();   
        this.props.getWorkoutData(db);
    }

    render() {
        console.log();
        
        return (
            <div>
                {
                !this.props.workoutData.workout ? '' : this.props.workoutData.workout.map((data,index) => {
                        return <p key={`pulls-id-${data.id}`} name={`pullUps-${data.pullUps}`}>Подтягивания:{data.pullUps}</p>
                    })
                }
                {
                !this.props.workoutData.workout ? '' : this.props.workoutData.workout.map((data,index) => {
                        return <p>Брусья:{data.bars}</p>
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
  workoutData: state.workout
})


export default connect(mapStateToProps, actions)(DataComponent);