import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native";

const Tabcontentfooter = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.footer}>
            <View style={styles.conatiner}>
                {/* 1 */}
                <TouchableOpacity activeOpacity={1} onPress={() => { navigation.navigate('Home') }}>
                    <View style={styles.rowcontainer}>
                        <View>
                            <Ionicons name='home-outline' color={'#ff4500'} size={24} />
                        </View>
                        <View>
                            <Text style={styles.rowcontainerhometext}>Home</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                {/* 2 */}
                <TouchableOpacity activeOpacity={1} onPress={() => { navigation.navigate('Myaccount') }}>
                    <View style={styles.rowcontainer}>
                        <View>
                            <Ionicons name='person-outline' size={24} color={'black'} />
                        </View>
                        <View>
                            <Text style={styles.rowcontainertext}>Myaccount</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                {/* 3 */}
                <TouchableOpacity activeOpacity={1} onPress={() => { navigation.navigate('Giftcard') }}>
                    <View style={styles.rowcontainer}>
                        <View>
                            <Ionicons name='gift-outline' size={24} color={'black'} />
                        </View>
                        <View>
                            <Text style={styles.rowcontainertext}>Gift Card</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                {/* 4 */}
                <TouchableOpacity activeOpacity={1} onPress={() => { navigation.navigate('Store') }}>
                    <View style={styles.rowcontainer}>
                        <View>
                            <Ionicons name='location-outline' size={24} color={'black'} />
                        </View>
                        <View>
                            <Text style={styles.rowcontainertext}>Store</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                {/* 5 */}
                <TouchableOpacity activeOpacity={1} onPress={() => { navigation.navigate('Categories') }}>
                    <View style={styles.rowcontainer}>
                        <View>
                            <Ionicons name='information-circle-outline' size={24} color={'black'} />
                        </View>
                        <View>
                            <Text style={styles.rowcontainertext}>Categories</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Tabcontentfooter;

const styles = StyleSheet.create({
    footer: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        padding: 2,
        backgroundColor: "white",
        borderTopWidth: 1,
        borderTopColor: "#ccc",
    },
    footerText: {
        fontSize: 16,
        color: "#333", // Set your desired text color
    },
    conatiner: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    rowcontainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // borderColor: 'black',
        // borderWidth: 1
    },
    rowcontainertext: {
        color: 'black',
        fontSize: 12
    },
    rowcontainerhometext: {
        color: '#ff4500',
        fontSize: 12
    },
});