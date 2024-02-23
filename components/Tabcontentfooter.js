import React from "react";
import { Ionicons } from '@expo/vector-icons'
import controls from "./Imports";
const Tabcontentfooter = () => {
    const navigation = controls.useNavigation();
    const footerdata = [
        { id: 1, navigator: "Home", Icon: "home-outline", color: "#ff4500", title: "Home" },
        { id: 2, navigator: "Myaccount", Icon: "person-outline", color: "black", title: "Myaccount" },
        { id: 3, navigator: "Giftcard", Icon: "gift-outline", color: "black", title: "Gift Card" },
        { id: 4, navigator: "Store", Icon: "location-outline", color: "black", title: "Store" },
        { id: 5, navigator: "Categories", Icon: "information-circle-outline", color: "black", title: "Categories" },
    ]
    return (
        <controls.View style={styles.footer}>
            <controls.View style={styles.conatiner}>
                {footerdata.map((data) => (
                    <controls.TouchableOpacity activeOpacity={1} onPress={() => { navigation.navigate(data.navigator) }} key={data.id}>
                        <controls.View style={styles.rowcontainer}>
                            <controls.View><Ionicons name={data.Icon} color={data.color} size={24} /></controls.View>
                            <controls.View><controls.Text style={data.id === 1 ? styles.rowcontainerhometext : styles.rowcontainertext} numberOfLines={1} ellipsizeMode="tail">{data.title}</controls.Text></controls.View>
                        </controls.View>
                    </controls.TouchableOpacity>
                ))}
            </controls.View>
        </controls.View>
    )
}
export default Tabcontentfooter;
const styles = controls.StyleSheet.create({
    footer: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        padding: 2,
        backgroundColor: "white",
        borderTopWidth: 1,
        borderTopColor: "#ccc",
    },
    footerText: {
        fontSize: 12,
        color: "#333", // Set your desired text color
    },
    conatiner: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    rowcontainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    rowcontainertext: {
        color: 'black',
        fontSize: 12
    },
    rowcontainerhometext: {
        color: '#ff4500',
        fontSize: 12
    },
});