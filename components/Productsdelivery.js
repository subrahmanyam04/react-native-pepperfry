import React, { useState } from "react";
import controls from "./Imports";

const Productsdelivery = () => {
    const [open, setopen] = useState(true)
    const handlepress = () => { setopen(!open); }
    return (
        <controls.View style={styles.container}>
            <controls.View style={styles.innercontainer}>
                <controls.TouchableOpacity activeOpacity={1} onPress={handlepress}>
                    <controls.View style={styles.rowcontainer}>
                        <controls.View>
                            <controls.Text style={{ color: 'black', fontWeight: "bold", fontSize: 15 }}>Delivery and Assembly</controls.Text>
                        </controls.View>
                        <controls.View>
                            {open ? <controls.Entypo name='chevron-small-up' color={'grey'} size={22} /> : <controls.Entypo name='chevron-small-down' color={'grey'} size={22} />}
                        </controls.View>
                    </controls.View>
                </controls.TouchableOpacity>
                {open ? (
                    <controls.View style={styles.opencontainer}>
                        <controls.View><controls.Text style={styles.fontsstyle}>Delivering To</controls.Text></controls.View>
                        <controls.View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginTop: 6 }}>
                            <controls.View style={{ width: "72%" }}>
                                <controls.TextInput style={styles.input} placeholder="5600001, Bengaluru" placeholderTextColor={'black'} keyboardType="numeric" />
                                <controls.View style={{ position: 'absolute', top: 0, bottom: 0, right: 0, left: 0, justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                                    <controls.Text style={styles.iconBackground}>Change</controls.Text>
                                </controls.View>
                            </controls.View>
                            <controls.View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <controls.Text ><controls.MaterialCommunityIcons name='target' color={'#ff4500'} size={20} /> <controls.Text style={{ color: '#ff4500', fontWeight: "900", fontSize: 18 }}>Locate</controls.Text></controls.Text>
                            </controls.View>
                        </controls.View>
                        <controls.View><controls.Text style={[styles.fontsstyle, { marginTop: 10 }]}>Delivery by Tue, 20 Feb 2024 ₹1199</controls.Text></controls.View>
                        <controls.View><controls.Text style={[styles.fontsstyle, { marginTop: 2 }]}>Assembly by Offered By Pepperfry ₹1139 <controls.Text><controls.AntDesign name='infocirlceo' color={'grey'} size={14} /></controls.Text></controls.Text></controls.View>
                    </controls.View>) : ('')}
            </controls.View>
            <controls.View style={{ borderBottomColor: "#dbdcdc", borderBottomWidth: 8 }} />
        </controls.View>
    )
}
export default Productsdelivery;
const styles = controls.StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 10,
    },
    innercontainer: {
        flex: 1,
        marginHorizontal: 8,
        flexDirection: 'column',
        marginBottom: 14
    },
    rowcontainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    opencontainer: {
        flex: 1,
        flexDirection: "column",
        marginTop: 10
    },
    input: {
        height: 46,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 4,
        fontWeight: '500',
        fontSize: 16,
        padding: 10,
    },
    iconBackground: {
        bottom: 14,
        right: 6,
        color: '#ff4500',
        fontSize: 16,
        fontWeight: '900'
    },
    fontsstyle: {
        color: '#404240',
        fontSize: 15,
        fontWeight: '500',
    }
})