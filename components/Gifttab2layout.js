import React from "react";
import Gifttab2form from "./Gifttab2form";
import controls from "./Imports";
const Gifttab2layout = () => {
    return (
            <controls.View style={styles.container}>
                <controls.ImageBackground source={{uri:'https://ii1.pepperfry.com/media/catalog/studio/155/1695727144_erode_web.jpg'}} style={styles.image}>
                 <Gifttab2form/> 
                </controls.ImageBackground>
            </controls.View>
    )
}
export default Gifttab2layout;
const styles = controls.StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: '100%', 
        height: '100%',
        resizeMode:'contain'
      },
      headingtext:{
        color:'black',
        fontSize:16,
        fontWeight:'bold',
        textAlign:'center',
        marginTop:70
      },
      subheadingtext:{
        color:'black',
        textAlign:'center',
      }
})