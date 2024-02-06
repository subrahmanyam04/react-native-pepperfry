import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Entypo, Ionicons } from '@expo/vector-icons'
const Productssavemore = () => {
    const [open, setopen] = useState(true)

    const handlepress = () => {
        setopen(!open);
    }

    const information = [
        {
            title: 'Get Additional Rs.1,100/- Off On ICICI Credit Card, Credit & Debit Card EMI and Internet Banking Transactions',
            descrip: 'Apply Coupon',
            code: ' ICICIFEST10 ',
            symbol: '|',
            descripcon: ' Minimum Order Value Is 10,000/-',
            id:1

        },
        {
            title: 'Get Additional Rs.1,100/- Off On ICICI Credit Card, Credit & Debit Card EMI and Internet Banking Transactions',
            descrip: 'Apply Coupon',
            code: ' ICICIFEST10 ',
            symbol: '|',
            descripcon: ' Minimum Order Value Is 10,000/-',
            id:2

        },
    ]
    return (
        <View style={styles.container}>
            <View style={styles.innercontainer}>

                <View style={styles.rowcontainer}>
                    <View>
                        <Text style={{ color: 'black', fontWeight: "bold", fontSize: 15 }}>Save More With These Great Deals!</Text>
                    </View>
                    <TouchableOpacity activeOpacity={1} onPress={handlepress}>
                        <View>
                            {open ? <Entypo name='chevron-up' color={'grey'} size={22} /> : <Entypo name='chevron-down' color={'grey'} size={22} />}

                        </View>
                    </TouchableOpacity>
                </View>


                {open ? (
                    <View style={styles.opencontainer}>
                        <View>
                            <Text>Use the Coupon during Checkout</Text>
                        </View>

                        <View>
                            <Text style={styles.timertext}>
                                <Ionicons name="timer-outline" size={15} color="#D8232A" /> Ending in 14h : 12m : 30s
                            </Text>
                        </View>

                        {information.map((data) => (

                            <View style={{ flex: 1, flexDirection: 'column', marginTop: 8 }} key={data.id}>
                                <View>
                                    <Text style={{ color: 'black', fontWeight: '900', fontSize: 14 }}>{data.title}</Text>
                                </View>

                                <View>
                                    <Text style={{ color: '#484a48', fontWeight: 'bold', fontSize: 12 }}>{data.descrip}
                                        <Text style={{ color: 'black', fontWeight: '500', fontSize: 14 }}>{data.code}</Text><Text>{data.symbol}</Text><Text>{data.descripcon}</Text>
                                    </Text>
                                </View>

                                <View style={styles.dividerdotted} />
                            </View>

                        ))}

                        <View style={{ marginVertical: 4 }}>
                            <Text style={{ color: "brown", fontWeight: '500', fontSize: 13 }}>
                                See All {'(8)'}
                            </Text>
                        </View>

                    </View>
                ) : ("")}
            </View>
            <View style={{ borderBottomColor: "#dbdcdc", borderBottomWidth: 8 }} />
        </View>

    )
}

export default Productssavemore;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 10
    },
    innercontainer: {
        flex: 1,
        marginHorizontal: 8,
        marginBottom:10
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