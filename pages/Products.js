import React from "react";
import Productslayout from "../components/Productslayout";
import Tabcontentfooter from "../components/Tabcontentfooter";
import Productsbuttons from "../components/Productsbuttons";
import controls from "../components/Imports";

const Products = () => {
    return (
        <controls.SafeAreaView>
            <Productslayout />
            <Productsbuttons />
            <Tabcontentfooter />
        </controls.SafeAreaView>
    )
}

export default Products;