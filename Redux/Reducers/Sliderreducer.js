// reducer.js
import * as actionType from '../Actions/actionType';

const initialState = {
  sliderdata: []  ,

};

const Sliderreducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SET_SLIDER_DATA:
      const newStateSetData = {
        ...state,
        sliderdata: action.payload,
      };
      console.log('New state after SET_DATA:', newStateSetData);
    //   console.log('new sliderdta',sliderdata)
      return newStateSetData;
    
    default:
      return state;
  }
};

export default Sliderreducer;