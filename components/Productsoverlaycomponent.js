import React from "react";
import { FlatList, Image, Platform, StyleSheet, Text, View } from "react-native";
import { windowWidth } from "../Util/Dimensions";
import {  Ionicons, Feather, MaterialCommunityIcons } from '@expo/vector-icons'

const Productsoverlaycomponent = () => {
    return(
         <>

            {/* sharecontainer */}

            <View style={styles.iconContainer}>
                <View style={styles.iconBackgroundshare}>
                    <Feather name="share-2" size={24} color="#181818" />
                </View>
            </View>


            {/* wishlist container */}
            <View style={styles.iconContainer}>
                <View style={styles.iconBackground}>
                    <Ionicons name="heart-outline" size={28} color="#181818" />
                </View>
            </View>

            {/* similar products */}

            {/* text container */}
            <View style={styles.iconContainertext}>
                <View style={styles.iconBackgroundtext}>
                    <MaterialCommunityIcons name="cards-outline" size={28} color="#181818" style={{ marginHorizontal: 4 }} />
                    <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 14, marginHorizontal: 4 }}>View Similar Items</Text>
                </View>
            </View>

            </>

    )
}

export default Productsoverlaycomponent;


const styles = StyleSheet.create({
    iconContainer: {
      
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    iconBackground: {
        top: Platform.OS === "android" ? 0 : 10,
        bottom: Platform.OS === "android" ? 6 : 0,
        right: 12,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: 6,
        borderRadius: 100,
    },
    iconBackgroundshare: {
        bottom: Platform.OS === "android" ? 60 : 48,
        right: 12,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        padding: 8,
        borderRadius: 100,
    },
    iconContainertext: {
      
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    iconBackgroundtext: {
        padding: 8,
        top: Platform.OS === "android" ? 220 : 140,
        left: 10,
        borderRadius: 22,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: 'white'
    }
})