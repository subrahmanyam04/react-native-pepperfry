import React, { useState } from "react";
import controls from "./Imports";
const Productssavemore = () => {
    const [open, setopen] = useState(true)
    const handlepress = () => { setopen(!open); }
    const information = [
        { title: 'Get Additional Rs.1,100/- Off On ICICI Credit Card, Credit & Debit Card EMI and Internet Banking Transactions', descrip: 'Apply Coupon', code: ' ICICIFEST10 ', symbol: '|', descripcon: ' Minimum Order Value Is 10,000/-', id: 1 },
        { title: 'Get Additional Rs.1,100/- Off On ICICI Credit Card, Credit & Debit Card EMI and Internet Banking Transactions', descrip: 'Apply Coupon', code: ' ICICIFEST10 ', symbol: '|', descripcon: ' Minimum Order Value Is 10,000/-', id: 2 },
    ]
    return (
        <controls.View style={styles.container}>
            <controls.View style={styles.innercontainer}>
                <controls.View style={styles.rowcontainer}>
                    <controls.View><controls.Text style={{ color: 'black', fontWeight: "bold", fontSize: 15 }}>Save More With These Great Deals!</controls.Text></controls.View>
                    <controls.TouchableOpacity activeOpacity={1} onPress={handlepress}>
                        <controls.View>
                            {open ? <controls.Entypo name='chevron-up' color={'grey'} size={22} /> : <controls.Entypo name='chevron-down' color={'grey'} size={22} />}
                        </controls.View>
                    </controls.TouchableOpacity>
                </controls.View>
                {open ? (
                    <controls.View style={styles.opencontainer}>
                        <controls.View><controls.Text>Use the Coupon during Checkout</controls.Text></controls.View>
                        <controls.View>
                            <controls.Text style={styles.timertext}><controls.Ionicons name="timer-outline" size={15} color="#D8232A" /> Ending in 14h : 12m : 30s</controls.Text>
                        </controls.View>
                        {information.map((data) => (
                            <controls.View style={{ flex: 1, flexDirection: 'column', marginTop: 8 }} key={data.id}>
                                <controls.View><controls.Text style={{ color: 'black', fontWeight: '900', fontSize: 14 }}>{data.title}</controls.Text></controls.View>
                                <controls.View>
                                    <controls.Text style={{ color: '#484a48', fontWeight: 'bold', fontSize: 12 }}>{data.descrip}
                                        <controls.Text style={{ color: 'black', fontWeight: '500', fontSize: 14 }}>{data.code}</controls.Text><controls.Text>{data.symbol}</controls.Text><controls.Text>{data.descripcon}</controls.Text>
                                    </controls.Text>
                                </controls.View>
                                <controls.View style={styles.dividerdotted} />
                            </controls.View>
                        ))}
                        <controls.View style={{ marginVertical: 4 }}>
                            <controls.Text style={{ color: "brown", fontWeight: '500', fontSize: 13 }}>See All {'(8)'}</controls.Text>
                        </controls.View>
                    </controls.View>
                ) : ("")}
            </controls.View>
            <controls.View style={{ borderBottomColor: "#dbdcdc", borderBottomWidth: 8 }} />
        </controls.View>
    )
}
export default Productssavemore;
const styles = controls.StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 10
    },
    innercontainer: {
        flex: 1,
        marginHorizontal: 8,
        marginBottom: 10
    },
    rowcontainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    opencontainer: {
        flex: 1,
        flexDirection: 'column'
    },
    timertext: {
        fontWeight: 'bold',
        fontSize: 12.5,
        color: '#D8232A',
        marginTop: 2,
    },
    dividerdotted: {
        borderColor: 'lightgrey',
        borderStyle: 'dashed',
        borderWidth: 1,
        marginVertical: 6
    }
})