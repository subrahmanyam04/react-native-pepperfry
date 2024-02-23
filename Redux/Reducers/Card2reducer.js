import * as actionType from '../Actions/actionType';
const Card2reducer = (state = { card2data: [], }, action) => {
  switch (action.type) {
    case actionType.SET_CARD2_DATA:
      const newStateSetData = {
        ...state,
        card2data: action.payload,
      };
      return newStateSetData;
    default:
      return state;
  }
};
export default Card2reducer;