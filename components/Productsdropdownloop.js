import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Entypo, Ionicons } from '@expo/vector-icons'

const Productsdropdownloop = () => {
    const [open, setopen] = useState(true)

    const handlepress = () => {
        setopen(!open);
    }

    const information = [
        {
            id: 1,
            title: 'Specifications'
        },
        {
            id: 2,
            title: 'Brand & Collection Overview'
        },
        {
            id: 3,
            title: "Care & Maintenance"
        },
        {
            id: 4,
            title: 'Seller'
        },
        {
            id: 5,
            title: 'Warrranty'
        },
        {
            id: 6,
            title: 'Customer Reviews & Images'
        },
        {
            id: 7,
            title: 'Q&A'
        }
    ]


    return (
        <View style={styles.container}>

            {information.map((data) => (
                <View style={styles.innercontainer} key={data.id}>
                    <View style={styles.rowcontainer}>
                        <View>
                            <Text style={{ color: 'black', fontWeight: "bold", fontSize: 15 }}>{data.title}</Text>
                        </View>
                        <TouchableOpacity activeOpacity={1} onPress={handlepress}>
                            <View>
                                <Entypo name='chevron-down' color={'grey'} size={22} />

                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ borderBottomColor: "#dbdcdc", borderBottomWidth: 2, marginTop: 16 }} />
                </View>
            ))}


            <View style={{ borderBottomColor: "#dbdcdc", borderBottomWidth: 8, marginTop: 18 }} />

        </View>

    )
}

export default Productsdropdownloop;

const styles = StyleSheet.create({
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