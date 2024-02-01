import React from "react";
import { ScrollView } from "react-native";
import Myaccountprofile from "./Myaccountprofile";
import Logout from "./Logout";
import Myaccountcard from "./Myaccountcard";

const Myaccountlayout = () => {
    return(
        <ScrollView>
            <Myaccountprofile/>
            <Myaccountcard/>
            <Logout/>
        </ScrollView>
    )
}

export default Myaccountlayout;