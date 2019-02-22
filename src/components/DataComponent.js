import React, {Component, Fragment} from "react";
import firebase from "firebase";

class DataComponent extends Component {

    constructor(){
        super();
        this.state = {
            data: null
        }
    }

    componentDidMount(){
        const db = firebase.firestore();        
    }

    renderData = () => {
        const db = firebase.firestore();      
        let dataTracker = [];
        db.collection("mysporttracker_collect").get().then(function(querySnapshot) {
            return querySnapshot.forEach(function(doc) {
                // doc.data() is never undefined for query doc snapshots
                return dataTracker.push(Object.assign({pullUps: doc.data().pullUps}, {time: doc.data().time}))
                 
            });
        });

        return dataTracker.map(data => {
            console.log(data.pullUps)
            return <span>{data.pullUps}</span>
        })
    }

    render() {
        return (
            <div>
                <p>{this.renderData()}</p>
            </div>
        )
    }
}

export default DataComponent;