// reducer.js
import * as actionType from '../Actions/actionType';



const initialState = {
  card1data: []  ,

};

const Card1reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SET_CARD1_DATA:
      const newStateSetData = {
        ...state,
        card1data: action.payload,
      };
      console.log('New state after SET_DATA:', newStateSetData);
    //   console.log('new sliderdta',sliderdata)
      return newStateSetData;
    

    
    default:
      return state;
  }
};

export default Card1reducer;