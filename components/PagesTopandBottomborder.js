import React from "react";
import { StyleSheet, View } from "react-native";

export const PagesTopborder = () => { return( <View style={styles.topBorder} /> ) }

export const PagesBottomborder = () => { return( <View style={styles.bottomBorder} /> ) }
const styles = StyleSheet.create({ 
    topBorder: { borderTopWidth: 1, borderTopColor: 'lightgrey', },
    bottomBorder: { borderBottomWidth: 2, borderBottomColor: 'lightgrey', },
})