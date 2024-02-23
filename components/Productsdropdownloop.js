import React, { useState } from "react";
import controls from "./Imports";

const Productsdropdownloop = () => {
    const [open, setopen] = useState(true)
    const handlepress = () => { setopen(!open); }
    const information = [
        { id: 1, title: 'Specifications' },
        { id: 2, title: 'Brand & Collection Overview' },
        { id: 3, title: "Care & Maintenance" },
        { id: 4, title: 'Seller' },
        { id: 5, title: 'Warrranty' },
        { id: 6, title: 'Customer Reviews & Images' },
        { id: 7, title: 'Q&A' }
    ]
    return (
        <controls.View style={styles.container}>
            {information.map((data) => (
                <controls.View style={styles.innercontainer} key={data.id}>
                    <controls.View style={styles.rowcontainer}>
                        <controls.View><controls.Text style={{ color: 'black', fontWeight: "bold", fontSize: 15 }}>{data.title}</controls.Text></controls.View>
                        <controls.TouchableOpacity activeOpacity={1} onPress={handlepress}>
                            <controls.View><controls.Entypo name='chevron-down' color={'grey'} size={22} /></controls.View>
                        </controls.TouchableOpacity>
                    </controls.View>
                    <controls.View style={{ borderBottomColor: "#dbdcdc", borderBottomWidth: 2, marginTop: 16 }} />
                </controls.View>
            ))}
            <controls.View style={{ borderBottomColor: "#dbdcdc", borderBottomWidth: 8, marginTop: 18 }} />
        </controls.View>
    )
}
export default Productsdropdownloop;
const styles = controls.StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 10
    },
    innercontainer: {
        flex: 1,
        flexDirection: 'column',
        marginHorizontal: 8,
        marginTop: 12
    },
    rowcontainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
})