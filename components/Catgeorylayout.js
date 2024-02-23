import React from "react";
import Furniturecatgeory from "./Furniturecatgeory";
import Sofasandseatings from "./Sofasandseatings";
import Mattresses from "./Mattresses";
import Homedecor from "./Homedecor";
import Furnishings from "./Furnishings";
import Kitchenanddining from "./Kitchenanddining";
import Lampsandlighting from "./Lampsandlighting";
import Homeutility from "./Homeutility";
import Appliances from "./Appliances";
import Modular from "./Modular";
import controls from "./Imports";
const Catgeorylayout = () => {
    return (
        <controls.ScrollView>
        <Furniturecatgeory />
        <Sofasandseatings/>
        <Mattresses/>
        <Homedecor/>
        <Furnishings/>
        <Kitchenanddining/>
        <Lampsandlighting/>
        <Homeutility/>
        <Appliances/>
        <Modular/>
        </controls.ScrollView>
    )
}
export default Catgeorylayout