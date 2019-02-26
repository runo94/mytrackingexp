export const getWorkoutData = (db) => { 
    let dataTracker = [];
    return dispatch => {
        db.collection("mysporttracker_collect")
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc);
                
                dataTracker.push(Object.assign({id: doc.id}, {bars: doc.data().bars}, {pullUps: doc.data().pullUps}, {time: doc.data().time}))
                
            });
        })
        .then(json => {
            return dispatch({
                type: "GET_WORKOUT_DATA",
                payload: dataTracker
            })
        })
    }
}