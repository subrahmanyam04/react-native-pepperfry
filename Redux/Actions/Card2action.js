import * as actionType from '../Actions/actionType';
export const setCard2data = (card2data) => {
    return {
      type: actionType.SET_CARD2_DATA,
      payload: card2data,
    }; };