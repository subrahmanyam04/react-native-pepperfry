import React from "react";
import controls from "./Imports";

const Productsbuttons = () => {
    return (
        <controls.View style={styles.footer}>
            <controls.View style={styles.conatiner}>
                <controls.View style={styles.rowcontainer}>
                    <controls.Text style={{color:'#ff4500',fontWeight:'bold',fontSize:18}}>ADD TO CART</controls.Text>
                </controls.View>
                <controls.View style={[styles.rowcontainer,{backgroundColor:'#ff4500'}]}>
                    <controls.Text style={{color:'white',fontWeight:'bold',fontSize:18}}>BUY NOW</controls.Text>
                </controls.View>
            </controls.View>
        </controls.View>
    )
}
export default Productsbuttons;
const styles = controls.StyleSheet.create({
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