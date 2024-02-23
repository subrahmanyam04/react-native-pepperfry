import React, { useState } from "react";
import controls from "./Imports";
const Productdetails = () => {
    const [open, setopen] = useState(true)
    const handlepress = () => { setopen(!open); }
    const information = [
        { id: 1, title: 'Brand', des: 'Godrej Interio' },
        { id: 2, title: 'Sku', des: 'FN2114313-S-PM5458' },
        { id: 3, title: 'Sofa Frimness', des: 'Medium' },
        { id: 4, title: 'Prouduct Rating', des: '5.0' },
        { id: 5, title: 'Seating Height', des: '18' },
        { id: 6, title: 'Assembly', des: 'Carpenter Assembly' },
        { id: 7, title: 'Colour', des: 'Maroon' },
        { id: 8, title: 'Warranty', des: "60 Months'Warranty" },
        { id: 9, title: 'Dimensions (in Inches)', des: 'H 32 x W 70 x D 30' },
        { id: 10, title: 'Primary Material', des: 'Leatherette' },
        { id: 11, title: 'Weight', des: '60 KG' },
        { id: 12, title: 'Dimemsions (In Centimeters)', des: 'H 81.3 x W 177.8 x D 76.2' },
        { id: 13, title: 'Room Type', des: 'Living Room' },
    ]

    return (
        <controls.View style={styles.container}>
            <controls.View style={styles.innercontainer}>
                <controls.View style={styles.rowcontainer}>
                    <controls.View>
                        <controls.Text style={{ color: 'black', fontWeight: "bold", fontSize: 15 }}>Product Details</controls.Text>
                    </controls.View>
                    <controls.TouchableOpacity activeOpacity={1} onPress={handlepress}>
                        <controls.View>
                            {open ? <controls.Entypo name='chevron-up' color={'grey'} size={22} /> : <controls.Entypo name='chevron-down' color={'grey'} size={22} />}
                        </controls.View>
                    </controls.TouchableOpacity>
                </controls.View>
                {open ? (
                    <controls.View style={styles.rowcontainer2}>
                        {information.map((i) => (
                            <controls.View style={{ width: '49%', marginTop: 10 }} key={i.id}>
                                <controls.View style={{ flex: 1, flexDirection: 'column' }}>
                                    <controls.Text style={{ color: '#343534', fontWeight: '500', fontSize: 14 }}>{i.title}</controls.Text>
                                    <controls.Text style={{ color: '#202020', fontWeight: '600', fontSize: 14 }}>{i.des}</controls.Text>
                                </controls.View>
                            </controls.View>
                        ))}
                    </controls.View>
                ) : ('')}
                <controls.View style={{ borderBottomColor: "#dbdcdc", borderBottomWidth: 2, marginTop: 16 }} />
            </controls.View>
        </controls.View>
    )
}
export default Productdetails
const styles = controls.StyleSheet.create({
    container: {
        flex: 1,
    },
    innercontainer: {
        flex: 1,
        flexDirection: 'column',
        marginHorizontal: 8
    },
    rowcontainer: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 6,
        justifyContent: 'space-between'
    },
    rowcontainer2: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    }
})