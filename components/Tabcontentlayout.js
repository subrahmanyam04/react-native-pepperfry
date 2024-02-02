import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Tabslider from "./Tabslider";
import Tabsubnavbar from "./Tabsubnavbar";
import Tabcard1 from "./Tabcard1";
import Tabcard2 from "./Tabcard2";
import Tabbanner from "./Tabbanner";
import Tabdynamiccard3 from "./Tabdynamiccard3";

const Tabcontentlayout = () => {
    return (
        <>
        <View style={styles.topborder}/>
        <ScrollView style={{backgroundColor:'white'}}>
            <Tabsubnavbar/>
            <Tabslider/>
            <Tabcard1/>
            <Tabcard2/>
            <Tabbanner/>
            <Tabdynamiccard3/>
        </ScrollView>

        </>
    )
}
export default Tabcontentlayout;


const styles = StyleSheet.create({
    topborder:{
        borderTopColor:'lightgrey',
        borderTopWidth:1
    },
    

})