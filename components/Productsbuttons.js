import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native";

const Productsbuttons = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.footer}>
            <View style={styles.conatiner}>

                <View style={styles.rowcontainer}>
                    <Text style={{color:'#ff4500',fontWeight:'bold',fontSize:18}}>
                        ADD TO CART
                    </Text>
                </View>

                <View style={[styles.rowcontainer,{backgroundColor:'#ff4500'}]}>
                    <Text style={{color:'white',fontWeight:'bold',fontSize:18}}>
                        BUY NOW
                    </Text>
                </View>


            </View>
        </View>
    )
}

export default Productsbuttons;

const styles = StyleSheet.create({
    footer: {
        position: "absolute",
        bottom: 44,
        left: 0,
        right: 0,
        padding: 2,
        backgroundColor: "white",
    
    },

    conatiner: {
        flex: 1,
        flexDirection: 'row',
        // borderColor: 'black',
        // borderWidth: 1,
        marginHorizontal:2,
        justifyContent:'space-between'
    },
    rowcontainer:{
        width:'49%',
        borderColor: '#ff4500',
        borderWidth: 2,
        paddingVertical:10,
        borderRadius:4,
        justifyContent:'center',
        alignItems:'center',
        marginTop:8,
        marginBottom:10
    }



});