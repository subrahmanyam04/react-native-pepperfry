import * as actionType from '../Actions/actionType';
const Sliderreducer = (state = { sliderdata: [] }, action) => {
  switch (action.type) {
    case actionType.SET_SLIDER_DATA:
      const newStateSetData = {
        ...state,
        sliderdata: action.payload,
      };
      return newStateSetData;
    default:
      return state;
  }
};
export default Sliderreducer;