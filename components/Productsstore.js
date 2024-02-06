import React, { useState } from "react";
import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Entypo, EvilIcons } from '@expo/vector-icons'

const Productsstore = () => {
    const [open, setopen] = useState(true)

    const handlepress = () => {
        setopen(!open);
    }

    return (
        <View style={styles.container}>
            <View style={styles.innercontainer}>
                <View style={styles.rowcontainer}>
                    <View>
                        <Text style={{ color: 'black', fontWeight: "bold", fontSize: 15 }}>Stores Near You</Text>
                    </View>
                    <TouchableOpacity activeOpacity={1} onPress={handlepress}>
                        <View>
                            {open ? <Entypo name='chevron-up' color={'grey'} size={22} /> : <Entypo name='chevron-down' color={'grey'} size={22} />}

                        </View>
                    </TouchableOpacity>
                </View>

                {open ? (
                    <View style={{ flex: 1, flexDirection: 'column', marginTop: 6 }}>
                        <Text style={{ color: '#ff4500', fontWeight: 'bold', fontSize: 15 }}>Enter Pincode <Text style={{ color: 'grey', fontSize: 16 }}>For Details</Text></Text>
                    </View>
                ) : ('')}

                <View style={{ borderBottomColor: "#dbdcdc", borderBottomWidth: 2 ,marginTop:16}} />
            </View>

        </View>
    )
}

export default Productsstore;

const styles = StyleSheet.create({
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