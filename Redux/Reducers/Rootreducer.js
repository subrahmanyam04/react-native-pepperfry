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
export default rootReducer;