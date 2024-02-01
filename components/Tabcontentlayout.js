import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Tabslider from "./Tabslider";
import Tabsubnavbar from "./Tabsubnavbar";
import Tabcard1 from "./Tabcard1";
import Tabcard2 from "./Tabcard2";

const Tabcontentlayout = () => {
    return (
        <>
        <View style={styles.topborder}/>
        <ScrollView style={{backgroundColor:'white'}}>
            <Tabsubnavbar/>
            <Tabslider/>
            <Tabcard1/>
            <Tabcard2/>
        </ScrollView>
        <View style={styles.bottomborder}/>
        </>
    )
}
export default Tabcontentlayout;


const styles = StyleSheet.create({
    topborder:{
        borderTopColor:'lightgrey',
        borderWidth:1
    },
    bottomborder:{
        borderBottomColor:'lightgrey',
        borderWidth:1
    },

})