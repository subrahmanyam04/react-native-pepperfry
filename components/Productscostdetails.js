import React from "react";
import Productbanner from "./Productbanner";
import controls from "./Imports";

const Productscostdetails = () => {
    const imgurl = "https://ii1.pepperfry.com/assets/1d167a02-289e-4257-a777-36b756c961c3.jpg"
    return (
        <controls.View style={styles.container}>
            <controls.View style={styles.innercontainer}>
                <controls.View style={[styles.rowcontainer, { marginBottom: 10 }]}>
                    <controls.View style={styles.rowinnercontainer1}>
                        <controls.Text style={{ color: '#484a49', fontWeight: '500', fontSize: 16 }}>MRP</controls.Text>
                    </controls.View>
                    <controls.View style={styles.rowinnercontainer2}>
                        <controls.Text style={{ color: '#484a49', fontWeight: '500', fontSize: 16, textDecorationLine: 'line-through' }}>₹52,000</controls.Text>
                    </controls.View>
                </controls.View>
                <controls.View style={styles.rowcontainer}>
                    <controls.View style={styles.rowinnercontainer1}>
                        <controls.Text style={{ color: '#202120', fontWeight: '500', fontSize: 16 }}>Offer Price</controls.Text>
                    </controls.View>
                    <controls.View style={styles.rowinnercontainer2}>
                        <controls.Text style={{ color: '#202120', fontWeight: 'bold', fontSize: 18 }}>₹31,999 {'[Retail Discount ₹20,001]'}</controls.Text>
                    </controls.View>
                </controls.View>
                <controls.View style={styles.dividerdotted} />
                <controls.View style={[styles.rowcontainer, { marginVertical: 10 }]}>
                    <controls.View style={styles.rowinnercontainer1}>
                        <controls.Text style={{ color: 'green', fontWeight: 'bold', fontSize: 16 }}>Today's Deal</controls.Text>
                    </controls.View>
                    <controls.View style={styles.rowinnercontainer2}>
                        <controls.Text numberOfLines={1} ellipsizeMode="tail" style={{ color: 'black', fontWeight: '900', fontSize: 18 }} >₹31,999 <controls.Text style={{ color: 'black', fontWeight: '500', fontSize: 14 }} >& {'[Earn Cashback Worth ₹6,000]'}</controls.Text></controls.Text>
                        <controls.Text style={{ marginVertical: 6, color: '#646765', fontWeight: '500', fontSize: 12 }}>
                            EMI From ₹1,573/mo <controls.AntDesign name='arrowright' color={'grey'} size={12} />
                        </controls.Text>
                        <controls.Text style={{ color: 'green', fontWeight: '500', fontSize: 12 }}>
                            Apply Coupon <controls.Text style={{ color: 'green', fontWeight: '600', fontSize: 14 }} >PAYDAY</controls.Text> To Avail Today's Deal
                        </controls.Text>
                        <controls.Text style={styles.timertext}>
                            <controls.Ionicons name="timer-outline" size={15} color="#D8232A" /> Ending in 14h : 12m : 30s
                        </controls.Text>
                    </controls.View>
                </controls.View>
                <Productbanner imgurl={imgurl} height={68} />
                <controls.View style={[styles.rowcontainer, { marginTop: 10 }]}>
                    <controls.View style={styles.rowinnercontainer1}>
                        <controls.Text style={{ color: 'black', fontWeight: '600', fontSize: 16 }}>You Save</controls.Text>
                    </controls.View>
                    <controls.View style={[styles.rowinnercontainer2, { marginBottom: 10 }]}>
                        <controls.Text style={{ color: 'black', fontWeight: 'bold', fontSize: 18 }}>₹20,001 {'(38% off)'}</controls.Text>
                        <controls.Text style={{ color: '#505251', fontWeight: 'bold', fontSize: 12, marginVertical: 6 }}>{'[₹20,001 Retail Discount]'}</controls.Text>
                        <controls.Text style={{ fontSize: 12, color: 'blue', fontWeight: '500' }} numberOfLines={2} ellipsizeMode="tail">Earn 640 Extra Pepperfry Credicts {'(Worth ₹640)'}  <controls.AntDesign name="infocirlceo" size={12} color="blue" /></controls.Text>
                    </controls.View>
                </controls.View>
                <controls.View style={styles.dividerdotted} />
            </controls.View>
        </controls.View>
    )
}
export default Productscostdetails
const styles = controls.StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 20,
        marginTop: 40
    },
    innercontainer: {
        flex: 1,
        flexDirection: 'column',
        marginHorizontal: 8
    },
    rowcontainer: {
        flex: 1,
        flexDirection: 'row'
    },
    rowinnercontainer1: {
        flex: 0.6,
    },
    rowinnercontainer2: {
        flex: 1,
        flexDirection: 'column',
    },
    timertext: {
        fontWeight: 'bold',
        fontSize: 14.5,
        color: '#D8232A',
        marginTop: 4.5
    },
    dividerdotted: {
        borderColor: 'green',
        borderStyle: 'dashed',
        borderWidth: 1,
        marginVertical: 6
    }
})