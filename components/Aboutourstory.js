import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";


const Aboutourstory = () => {


    return (


        <View style={styles.container}>

            <View style={styles.innercontainer}>
                <View style={styles.headcontainer}>
                    <Text style={styles.headtext}>OUR STORY</Text>
                </View>


                <View>
                    <Image source={{ uri: 'https://www.pepperfry.ltd/wp-content/uploads/2023/03/mobile-image.jpg' }} alt="hbdf" style={styles.img} />
                </View>


            </View>

        </View>

    )
}

export default Aboutourstory

const styles = StyleSheet.create({
    container: {
        flex: 1,
      
        marginTop: 10
    },
    innercontainer: {
        flex: 1,
        marginHorizontal: 22,
        flexDirection: 'column'
    },
  
    headcontainer: {
        marginTop: 30, 
    },
    headtext: {
        textAlign: 'center',
        color: '#000000',
        fontSize: 26,
        fontWeight: '900'
    },
    img: {
        height: 600,
        width: '100%',
        resizeMode: 'contain',
    },
 
})