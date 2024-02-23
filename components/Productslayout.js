import React from "react";
import Productsbreadcrumb from "./Productsbreadcrumb";
import Productsimageslider from "./Productsimageslider";
import Productsselectcolor from "./Productsselectcolor";
import Productscostdetails from "./Productscostdetails";
import Productsdelivery from "./Productsdelivery";
import Productsquantity from "./Productsquantity";
import Productssavemore from "./Productssavemore";
import Productsstore from "./Productsstore";
import Productdetails from "./Productdetails";
import Productsdropdownloop from "./Productsdropdownloop";
import Productsslider1 from "./Productsslider1";
import Productsslider2 from "./Productsslider2";
import Productsslider3 from "./Productsslider3";
import Productssubbanner from "./Productssubbanner";
import controls from "./Imports";

const Productslayout = () => {
    return(
      <controls.ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{backgroundColor:'white'}}>
        <Productsbreadcrumb/>
        <Productsimageslider/>
        <Productsselectcolor/>
        <Productscostdetails/>
        <Productsdelivery/>
        <Productsquantity/>
        <Productssavemore/>
        <Productsstore/>
        <Productdetails/>
        <Productsdropdownloop/>
        <Productsslider1/>
        <Productsslider2/>
        <Productsslider3/>
        <Productssubbanner/>  
      </controls.ScrollView>
    )
}
export default Productslayout