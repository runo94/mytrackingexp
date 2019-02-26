
const initialState = {
    value: null,
    fontname: null,
    workout: null
}

export default function texts(state = initialState, action) {
  if(action.type === 'UPDATE_FIELD') {
    return {...state, texts: action.payload}
  }
  
  if(action.type === 'GET_WORKOUT_DATA') {
    return {...state, workout: action.payload}
  }
  return state;
}
