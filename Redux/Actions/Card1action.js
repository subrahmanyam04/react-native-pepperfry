import * as actionType from '../Actions/actionType';

export const setCard1data = (card1data) => {
    console.log('Data setData action:', card1data);
    
    return {
      type: actionType.SET_CARD1_DATA,
      payload: card1data,
      
     
    };
  
  };