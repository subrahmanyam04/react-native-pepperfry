import React from "react";
import controls from "./Imports";
const Homebanner3 = () => {
    return (
        <controls.View style={styles.container}>
            <controls.Image source={{ uri: 'https://ii1.pepperfry.com/assets/00e88457-e578-4895-95a7-d511913bc6ad.jpg' }} style={styles.image}   />
        </controls.View>
    )
}
export default Homebanner3
const styles = controls.StyleSheet.create({
    container: {
        flex:1,
       marginTop:20
      },
    image: {
        width: '100%',
        height: 180, 
        resizeMode: 'contain',
      },  
})