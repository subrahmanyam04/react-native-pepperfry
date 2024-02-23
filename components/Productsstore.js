import React, { useState } from "react";
import controls from "./Imports";
const Productsstore = () => {
    const [open, setopen] = useState(true)
    const handlepress = () => { setopen(!open); }
    return (
        <controls.View style={styles.container}>
            <controls.View style={styles.innercontainer}>
                <controls.View style={styles.rowcontainer}>
                    <controls.View>
                        <controls.Text style={{ color: 'black', fontWeight: "bold", fontSize: 15 }}>Stores Near You</controls.Text>
                    </controls.View>
                    <controls.TouchableOpacity activeOpacity={1} onPress={handlepress}>
                        <controls.View>
                            {open ? <controls.Entypo name='chevron-up' color={'grey'} size={22} /> : <controls.Entypo name='chevron-down' color={'grey'} size={22} />}
                        </controls.View>
                    </controls.TouchableOpacity>
                </controls.View>
                {open ? (
                    <controls.View style={{ flex: 1, flexDirection: 'column', marginTop: 6 }}>
                        <controls.Text style={{ color: '#ff4500', fontWeight: 'bold', fontSize: 15 }}>Enter Pincode <controls.Text style={{ color: 'grey', fontSize: 16 }}>For Details</controls.Text></controls.Text>
                    </controls.View>
                ) : ('')}
                <controls.View style={{ borderBottomColor: "#dbdcdc", borderBottomWidth: 2 ,marginTop:16}} />
            </controls.View>
        </controls.View>
    )
}
export default Productsstore;
const styles = controls.StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 10
    },
    innercontainer: {
        flex: 1,
        flexDirection: 'column',
        marginHorizontal: 8
    },
    rowcontainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
})