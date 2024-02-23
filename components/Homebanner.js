import React from "react";
import controls from "./Imports";
const Homebanner = () => {
    return (
        <controls.View style={styles.container}>
            <controls.Image source={{ uri: 'https://ii1.pepperfry.com/assets/1c4fe76d-ed00-416d-aac9-1f8ad38c478c.jpg' }} style={styles.image} />
        </controls.View>
    )
}
export default Homebanner
const styles = controls.StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:5
      },
    image: {
        width: '100%',
        height: 250, 
        resizeMode: 'contain',
      },  
})