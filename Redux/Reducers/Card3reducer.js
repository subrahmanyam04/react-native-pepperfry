import * as actionType from '../Actions/actionType';
const Card3reducer = (state = { card3data: [] }, action) => {
  switch (action.type) {
    case actionType.SET_CARD3_DATA:
      const newStateSetData = {
        ...state,
        card3data: action.payload,
      };
      return newStateSetData;
    default:
      return state;
  }
};
export default Card3reducer;