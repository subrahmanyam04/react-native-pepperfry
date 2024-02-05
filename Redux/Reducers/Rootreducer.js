import { combineReducers } from "redux";
import Sliderreducer from "./Sliderreducer";
import Tokenreducer from "./Tokenreducer";
import Card1reducer from "./Card1reducer";
import Card2reducer from "./Card2reducer";
import Card3reducer from "./Card3reducer";






const rootReducer = combineReducers({
    Tokenreducer,
    Sliderreducer ,
    Card1reducer,
    Card2reducer,
    Card3reducer
});

// Log the initial state of the reducer
console.log('Initial State of Reducer1:', Sliderreducer(undefined, {})); // Pass an empty action to get the initial state

export default rootReducer;