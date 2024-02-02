import { combineReducers } from "redux";
import Sliderreducer from "./Sliderreducer";
import Tokenreducer from "./Tokenreducer";






const rootReducer = combineReducers({
    Tokenreducer,
    Sliderreducer 
});

// Log the initial state of the reducer
console.log('Initial State of Reducer1:', Sliderreducer(undefined, {})); // Pass an empty action to get the initial state

export default rootReducer;