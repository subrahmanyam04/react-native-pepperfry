import * as actionType from '../Actions/actionType'  
  const Tokenreducer = (state = { token: '', }, action) => {
    switch (action.type) {
      case actionType.SET_TOKEN:
        const newStateSetData = {
          ...state,
          token: action.payload,
        };
        return newStateSetData;
      default:
        return state;
    }
  };
export default Tokenreducer;