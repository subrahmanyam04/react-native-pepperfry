import React from "react";
import controls from "./Imports";
const Productsoverlaycomponent = () => {
    return(
         <>
            <controls.View style={styles.iconContainer}>
                <controls.View style={styles.iconBackgroundshare}>
                    <controls.Feather name="share-2" size={24} color="#181818" />
                </controls.View>
            </controls.View>
            <controls.View style={styles.iconContainer}>
                <controls.View style={styles.iconBackground}>
                    <controls.Ionicons name="heart-outline" size={28} color="#181818" />
                </controls.View>
            </controls.View>
            <controls.View style={styles.iconContainertext}>
                <controls.View style={styles.iconBackgroundtext}>
                    <controls.MaterialCommunityIcons name="cards-outline" size={28} color="#181818" style={{ marginHorizontal: 4 }} />
                    <controls.Text style={{ color: 'black', fontWeight: 'bold', fontSize: 14, marginHorizontal: 4 }}>View Similar Items</controls.Text>
                </controls.View>
            </controls.View>
            </>
    )
}
export default Productsoverlaycomponent;
const styles = controls.StyleSheet.create({
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
        top: controls.Platform.OS === "android" ? 0 : 10,
        bottom: controls.Platform.OS === "android" ? 6 : 0,
        right: 12,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: 6,
        borderRadius: 100,
    },
    iconBackgroundshare: {
        bottom: controls.Platform.OS === "android" ? 60 : 48,
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
        top: controls.Platform.OS === "android" ? 220 : 140,
        left: 10,
        borderRadius: 22,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: 'white'
    }
})