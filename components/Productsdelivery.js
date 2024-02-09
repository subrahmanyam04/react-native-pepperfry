import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Entypo, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'

const Productsdelivery = () => {
    const [open, setopen] = useState(true)

    const handlepress = () => {
        setopen(!open);
    }
    return (
        <View style={styles.container}>
            <View style={styles.innercontainer}>

                <TouchableOpacity activeOpacity={1} onPress={handlepress}>
                    <View style={styles.rowcontainer}>
                        <View>
                            <Text style={{ color: 'black', fontWeight: "bold", fontSize: 15 }}>Delivery and Assembly</Text>
                        </View>
                        <View>
                            {open ? <Entypo name='chevron-small-up' color={'grey'} size={22} /> : <Entypo name='chevron-small-down' color={'grey'} size={22} />}

                        </View>
                    </View>
                </TouchableOpacity>

                {open ? (
                    <View style={styles.opencontainer}>
                        <View>
                            <Text style={styles.fontsstyle}>Delivering To</Text>
                        </View>

                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginTop: 6 }}>
                            <View style={{ width:"72%" }}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="5600001, Bengaluru"
                                    placeholderTextColor={'black'}
                                    keyboardType="numeric"
                                />
                                <View style={{ position: 'absolute', top: 0, bottom: 0, right: 0, left: 0, justifyContent: 'flex-end', alignItems: 'flex-end' }}>

                                    <Text style={styles.iconBackground}>Change</Text>
                                </View>



                            </View>

                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Text ><MaterialCommunityIcons name='target' color={'#ff4500'} size={20} /> <Text style={{ color: '#ff4500', fontWeight: "900", fontSize: 18 }}>Locate</Text></Text>
                            </View>


                        </View>
                        <View>
                            <Text style={[styles.fontsstyle,{marginTop:10}]}>Delivery by Tue, 20 Feb 2024 ₹1199</Text>
                        </View>

                        <View>
                            <Text style={[styles.fontsstyle,{marginTop:2}]}>Assembly by Offered By Pepperfry ₹1139 <Text><AntDesign name='infocirlceo' color={'grey'} size={14} /></Text> </Text>
                        </View>

                    </View>) : ('')}

            </View>
            <View style={{ borderBottomColor: "#dbdcdc", borderBottomWidth: 8 }} />
        </View>
    )
}

export default Productsdelivery;

const styles = StyleSheet.create({
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
        // margin: 12,
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