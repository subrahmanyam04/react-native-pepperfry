import React from "react";
import controls from "./Imports";
const Homebanner2 = () => {
    return (
        <controls.View style={styles.container}>
            <controls.Image source={{ uri: 'https://ii1.pepperfry.com/assets/3e3fd451-8c91-45eb-920d-79937573815a.jpg' }} style={styles.image}   />    
        </controls.View>
    )
}
export default Homebanner2
const styles = controls.StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal:4,  
      },
    image: {
        width: '100%',
        height: 96, 
        resizeMode:'contain',
      },
})