import * as actionType from '../Actions/actionType';

export const setCard3data = (card3data) => {
    console.log('Data setData action:', card3data);
    
    return {
      type: actionType.SET_CARD3_DATA,
      payload: card3data,
      
     
    };
  
  };