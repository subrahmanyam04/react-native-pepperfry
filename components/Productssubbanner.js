import React from "react";
import Productbanner from "./Productbanner";
import controls from "./Imports";
const Productssubbanner = () => {
    const imgurl = "https://ii1.pepperfry.com/assets/7e0a8137-e4bd-4267-aaa8-4b68660f047a.jpg"
    return (
        <controls.View style={{marginBottom:140,marginHorizontal:2}}>
            <Productbanner imgurl={imgurl} height={188} />
        </controls.View>
    )
}
export default Productssubbanner;