import * as actionType from '../Actions/actionType';
const Card1reducer = (state ={ card1data: [], }, action) => {
  switch (action.type) {
    case actionType.SET_CARD1_DATA:
      const newStateSetData = {
        ...state,
        card1data: action.payload,
      };
      return newStateSetData;
    default:
      return state;
  }
};
export default Card1reducer;