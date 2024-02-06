import React, { useState } from "react";
import { StyleSheet, Text,  TouchableOpacity, View } from "react-native";
import { Entypo } from '@expo/vector-icons'

const Productsquantity = () => {
    const [open, setopen] = useState(false)

    const handlepress = () => {
        setopen(!open);
    }
    return(
        <View style={styles.container}>
            <View style={styles.innercontainer}>
            <TouchableOpacity activeOpacity={1} onPress={handlepress}>
                    <View style={styles.rowcontainer}>
                        <View>
                            <Text style={{ color: 'black', fontSize: 18 }}>QTY1</Text>
                        </View>
                        <View>
                            {open ? <Entypo name='chevron-small-up' color={'grey'} size={28} /> : <Entypo name='chevron-small-down' color={'grey'} size={28} />}

                        </View>
                    </View>
                </TouchableOpacity>
           
            </View>
            <View style={{ borderBottomColor: "#dbdcdc", borderBottomWidth: 8 }} />
        </View>
        
    )
}

export default Productsquantity;

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginBottom: 10,
        marginTop:4
    },
    innercontainer:{
        flex:1,
        flexDirection:'column',
        marginHorizontal:8,
        marginBottom:14
    },
    rowcontainer: {
        flex: 1,
        flexDirection: 'row',
        borderRadius:2,
        borderColor:'#858785',
        borderWidth:1,
        paddingHorizontal:14,
        paddingVertical:4,
        width:'26%'  
    },
})