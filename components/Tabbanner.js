import React from "react";
import controls from "./Imports";
const Tabbanner = () => {
    return (
        <controls.View style={styles.container}>
            <controls.Image source={{ uri: 'https://ii1.pepperfry.com/assets/afc2f87a-ef7f-421d-b0ee-773f59f51bad.jpg' }} style={styles.image} />    
        </controls.View>
    )
}
export default Tabbanner;
const styles = controls.StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:4,
      },
    image: {
        width: '100%',
        height: 70, // Set a fixed height or adjust as needed
        resizeMode: 'contain',
      },
})