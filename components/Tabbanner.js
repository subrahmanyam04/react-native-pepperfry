import React from "react";
import { Image, StyleSheet, View } from "react-native";


const Tabbanner = () => {
    return (
        <View style={styles.container}>
            {/* <View style={styles.imgcontainer}> */}
            <Image
                source={{ uri: 'https://ii1.pepperfry.com/assets/afc2f87a-ef7f-421d-b0ee-773f59f51bad.jpg' }}
                style={styles.image}
               
            />
            {/* </View> */}
            
        </View>
    )
}

export default Tabbanner;

const styles = StyleSheet.create({
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