import React from "react";
import { Image, StyleSheet, View } from "react-native";


const Productbanner = ({imgurl,height}) => {
    return (
        <View style={styles.container}>
            {/* <View style={styles.imgcontainer}> */}
            <Image
                source={{ uri: imgurl }}
                style={{ width: '100%',
                height: height, // Set a fixed height or adjust as needed
                resizeMode: 'contain',}}
               
            />
            {/* </View> */}
            
        </View>
    )
}

export default Productbanner

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:4
      },
    //   imgcontainer:{
    //     flex:0.3,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //   },
    image: {
        width: '100%',
        height: 68, // Set a fixed height or adjust as needed
        resizeMode: 'contain',
      },

    
})