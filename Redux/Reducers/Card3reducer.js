// reducer.js
import * as actionType from '../Actions/actionType';



const initialState = {
  card3data: []  ,

};

const Card3reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SET_CARD3_DATA:
      const newStateSetData = {
        ...state,
        card3data: action.payload,
      };
      console.log('New state after SET_DATA:', newStateSetData);
    //   console.log('new sliderdta',sliderdata)
      return newStateSetData;
    

    
    default:
      return state;
  }
};

export default Card3reducer;