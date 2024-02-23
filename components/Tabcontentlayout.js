import React from "react";
import Tabslider from "./Tabslider";
import Tabsubnavbar from "./Tabsubnavbar";
import Tabcard1 from "./Tabcard1";
import Tabcard2 from "./Tabcard2";
import Tabbanner from "./Tabbanner";
import Tabdynamiccard3 from "./Tabdynamiccard3";
import controls from "./Imports";
const Tabcontentlayout = () => {
    return (
        <>
            <controls.PagesTopborder/>
            <Tabsubnavbar />
            <controls.ScrollView style={{ backgroundColor: 'white' }} bounces={false} alwaysBounceVertical={false}>
                <Tabsubnavbar />
                <Tabslider />
                <Tabcard1 />
                <Tabcard2 />
                <Tabbanner />
                <Tabdynamiccard3 />
            </controls.ScrollView>
        </>
    )
}
export default Tabcontentlayout;
