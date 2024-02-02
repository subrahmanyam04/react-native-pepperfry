import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Ionicons, Entypo } from '@expo/vector-icons'

const Tabcard23infor = () => {
    return (
        <>
            <View style={{ marginTop: 8, flex: 1, flexDirection: 'row' }}>
                <View style={{ borderColor: 'grey', borderWidth: 1, padding: 3, borderRadius: 30, marginHorizontal: 10 }}>
                    <Image source={{ uri: "https://cdn.pixabay.com/photo/2013/07/12/19/20/rainbow-colors-154569_1280.png" }}
                        style={{ height: 14, width: 14, resizeMode: 'contain' }}
                    />
                </View>
                <View>
                    <Text style={{ color: "#242424", fontWeight: '800', fontSize: 12, marginTop: 1 }}>+4 more colors</Text>
                </View>
            </View>


            <View style={{ flex: 1, flexDirection: 'column', marginHorizontal: 4 }}>

                <View>
                    <Text style={{ color: '#292929', fontWeight: '700', fontSize: 14, lineHeight: 20, marginTop: 6 }}>
                        Baley 3 Seater Sofa In Lama Black Colour
                    </Text>
                </View>

                <View>
                    <Text style={{ color: '#707070', fontWeight: '700', fontSize: 12, marginVertical: 4 }}>
                        By Trevi Furniture
                    </Text>
                </View>

                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Entypo name="star" size={16} color="rgb(255, 169, 134)" />
                    <Entypo name="star" size={16} color="rgb(255, 169, 134)" />
                    <Entypo name="star" size={16} color="rgb(255, 169, 134)" />
                    <Entypo name="star" size={16} color="rgb(255, 169, 134)" />
                    <Entypo name="star" size={16} color="#CCCCCC" />
                    <Text style={{ color: "black", fontSize: 14, fontWeight: '500' }}>{'(106 Sold)'}</Text>
                </View>

                <View>
                    <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 14, marginVertical: 2 }}>
                        Today's Deal
                    </Text>
                </View>

                <View >
                    <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 18 }}>
                        ₹18,199 <Text style={{ color: '#6B6B6B', fontWeight: '700', fontSize: 14, textDecorationLine: 'line-through' }}> ₹10,199</Text>
                    </Text>

                </View>

                <View style={{ marginVertical: 2 }}>
                    <Text style={{ color: '#5C5C5C', fontSize: 14, fontWeight: '900' }}>
                        You Save ₹1,199 <Text style={{ color: 'green', fontSize: 14, fontWeight: '900' }}>{'(44% off)'}</Text>
                    </Text>
                </View>

                <View>
                    <Text numberOfLines={2} ellipsizeMode='tail' style={{ color: 'blue', fontSize: 12, fontWeight: '500' }}>
                        Earn 250 Extra pepperfry Credits {'(worth'}
                        <Text style={{ fontWeight: '800' }}>{' ₹250)'}</Text>
                    </Text>
                </View>

                <View style={{ marginTop: 3, marginBottom: 8 }}>
                    <Text style={{ color: '#5C5C5C', fontWeight: '700', fontSize: 12 }}>Ships in<Text style={{ fontWeight: '900' }}> 6 days</Text></Text>
                </View>

            </View>

        </>
    )
}

export default Tabcard23infor;