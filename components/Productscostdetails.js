import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AntDesign, Ionicons } from '@expo/vector-icons'
import Productbanner from "./Productbanner";

const Productscostdetails = () => {

    const imgurl = "https://ii1.pepperfry.com/assets/1d167a02-289e-4257-a777-36b756c961c3.jpg"

    return (
        <View style={styles.container}>
            <View style={styles.innercontainer}>
                {/* offer and mrp */}
                <View style={[styles.rowcontainer, { marginBottom: 10 }]}>
                    <View style={styles.rowinnercontainer1}>
                        <Text style={{ color: '#484a49', fontWeight: '500', fontSize: 16 }}>MRP</Text>
                    </View>
                    <View style={styles.rowinnercontainer2}>
                        <Text style={{ color: '#484a49', fontWeight: '500', fontSize: 16, textDecorationLine: 'line-through' }}>₹52,000</Text>
                    </View>

                </View>

                {/*offer OPrice  */}
                <View style={styles.rowcontainer}>
                    <View style={styles.rowinnercontainer1}>
                        <Text style={{ color: '#202120', fontWeight: '500', fontSize: 16 }}>Offer Price</Text>
                    </View>
                    <View style={styles.rowinnercontainer2}>
                        <Text style={{ color: '#202120', fontWeight: 'bold', fontSize: 18 }}>₹31,999 {'[Retail Discount ₹20,001]'}</Text>
                    </View>
                </View>

                <View style={styles.dividerdotted} />

                {/* Today deal */}
                <View style={[styles.rowcontainer,{marginVertical:10}]}>
                    <View style={styles.rowinnercontainer1}>
                        <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 16 }}>Today's Deal</Text>
                    </View>
                    <View style={styles.rowinnercontainer2}>
                        <Text numberOfLines={1} ellipsizeMode="tail" style={{ color: 'black', fontWeight: '900', fontSize: 18 }} >₹31,999 <Text style={{ color: 'black', fontWeight: '500', fontSize: 14 }} >& {'[Earn Cashback Worth ₹6,000]'}</Text></Text>

                        <Text style={{marginVertical:6,color: '#646765', fontWeight: '500', fontSize: 12}}>
                            EMI From ₹1,573/mo <AntDesign name='arrowright' color={'grey'} size={12} />
                        </Text>

                        <Text style={{ color: 'green', fontWeight: '500', fontSize: 12 }}>
                            Apply Coupon <Text style={{ color: 'green', fontWeight: '600', fontSize: 14 }} >PAYDAY</Text> To Avail Today's Deal
                        </Text>

                        <Text style={styles.timertext}>
                            <Ionicons name="timer-outline" size={15} color="#D8232A" /> Ending in 14h : 12m : 30s
                        </Text>
                    </View>
                </View>

                <Productbanner imgurl={imgurl} height={68} />


                <View style={[styles.rowcontainer,{marginTop:10}]}>
                    <View style={styles.rowinnercontainer1}>
                        <Text style={{color:'black',fontWeight:'600',fontSize:16}}>You Save</Text>
                    </View>
                    <View style={[styles.rowinnercontainer2,{marginBottom:10}]}>
                        <Text style={{color:'black',fontWeight:'bold',fontSize:18}}>₹20,001 {'(38% off)'}</Text>
                        <Text style={{color:'#505251',fontWeight:'bold',fontSize:12,marginVertical:6}}>{'[₹20,001 Retail Discount]'}</Text>
                        <Text style={{ fontSize: 12,color:'blue',fontWeight:'500' }} numberOfLines={2} ellipsizeMode="tail">Earn 640 Extra Pepperfry Credicts {'(Worth ₹640)'}  <AntDesign name="infocirlceo" size={12} color="blue" /></Text>
                    </View>
                </View>

                <View style={styles.dividerdotted} />


            </View>

        </View>
    )
}

export default Productscostdetails

const styles = StyleSheet.create({
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
        // borderColor: 'black',
        // borderWidth: 1
    },
    rowinnercontainer2: {
        flex: 1,
        flexDirection: 'column',
        // borderColor: 'black',
        // borderWidth: 1
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