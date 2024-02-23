import React, { useState } from "react";
import controls from "./Imports";
const Productsquantity = () => {
    const [open, setopen] = useState(false)
    const handlepress = () => { setopen(!open); }
    return(
        <controls.View style={styles.container}>
            <controls.View style={styles.innercontainer}>
            <controls.TouchableOpacity activeOpacity={1} onPress={handlepress}>
                    <controls.View style={styles.rowcontainer}>
                        <controls.View>
                            <controls.Text style={{ color: 'black', fontSize: 18 }}>QTY1</controls.Text>
                        </controls.View>
                        <controls.View>
                            {open ? <controls.Entypo name='chevron-small-up' color={'grey'} size={28} /> : <controls.Entypo name='chevron-small-down' color={'grey'} size={28} />}
                        </controls.View>
                    </controls.View>
                </controls.TouchableOpacity>
            </controls.View>
            <controls.View style={{ borderBottomColor: "#dbdcdc", borderBottomWidth: 8 }} />
        </controls.View> 
    )
}
export default Productsquantity;
const styles = controls.StyleSheet.create({
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