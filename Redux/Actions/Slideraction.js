import * as actionType from '../Actions/actionType';

export const setSliderdata = (sliderdata) => {
    console.log('Data setData action:', sliderdata);
    
    return {
      type: actionType.SET_SLIDER_DATA,
      payload: sliderdata,
      
     
    };
  
  };