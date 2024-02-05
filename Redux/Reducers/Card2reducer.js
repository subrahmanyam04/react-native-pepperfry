// reducer.js
import * as actionType from '../Actions/actionType';



const initialState = {
  card2data: []  ,

};

const Card2reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SET_CARD2_DATA:
      const newStateSetData = {
        ...state,
        card2data: action.payload,
      };
      console.log('New state after SET_DATA:', newStateSetData);
    //   console.log('new sliderdta',sliderdata)
      return newStateSetData;
    

    
    default:
      return state;
  }
};

export default Card2reducer;