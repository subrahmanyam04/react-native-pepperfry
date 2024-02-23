import React from "react";
import Myaccountprofile from "./Myaccountprofile";
import Logout from "./Logout";
import Myaccountcard from "./Myaccountcard";
import controls from "./Imports";
const Myaccountlayout = () => {
    return(
        <controls.ScrollView showsVerticalScrollIndicator={false} bounces={false} alwaysBounceVertical={false}>
            <Myaccountprofile/>
            <Myaccountcard/>
            <Logout/>
        </controls.ScrollView>
    )
}
export default Myaccountlayout;