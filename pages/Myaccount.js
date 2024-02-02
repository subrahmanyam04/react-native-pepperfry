import React from "react";
import Signupmodalform from "../components/Signupmodalform";
// import { Settoken } from "../Redux/Actions/Tokenaction";
import { connect } from "react-redux";
import Myaccountlayout from "../components/Myaccountlayout";

const Myaccount = ({token}) => {
 
    console.log('token in my account', token)
 
    return (
        <>
           
            {token ?  (<Myaccountlayout/>) : (<Signupmodalform />)}

        </>

    )
}

const mapStateToProps = (state) => ({

    // sliderdata: state.Sliderreducer.sliderdata,
    // card1data: state.Card1reducer.card1data,
   token : state.Tokenreducer.token
    
    // selectedAboutCard: state.Reducer1.selectedAboutCard
    
});


  

  export default connect(mapStateToProps)(Myaccount);