import React from "react";
import Signupmodalform from "../components/Signupmodalform";
import Myaccountlayout from "../components/Myaccountlayout";
import controls from "../components/Imports";

const Myaccount = ({ token }) => {
    return (
        <controls.SafeAreaView>
            {token ? (<Myaccountlayout />) : (<Signupmodalform />)}
        </controls.SafeAreaView>
    )
}

const mapStateToProps = (state) => ({ token: state.Tokenreducer.token });
export default controls.connect(mapStateToProps)(Myaccount);