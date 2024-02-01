import React, { useState, useRef } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View, Animated } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import Aboutleaders3card from "./Aboutleaders3card";


const Aboutleaders = () => {
    const [isPressed, setPressed] = useState(false);
    const [isPressed1, setPressed1] = useState(false);
    const fadeAnim1 = useRef(new Animated.Value(0)).current;
    const fadeAnim2 = useRef(new Animated.Value(0)).current;

    const fadeOut = (fadeAnim) => {
        Animated.timing(fadeAnim, {
            toValue: 1.8,
            duration: 1000,
            useNativeDriver: false,
        }).start();
    };

    const fadeIn = (fadeAnim) => {
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: false,
        }).start(() => {
            setPressed(false);
            setPressed1(false);
        });
    };

    const handlePress = () => {
        setPressed(true);
        setPressed1(false);
        // here when opening the overlay
        fadeOut(fadeAnim1);
        fadeAnim2.setValue(0); 
    };

    const handlePress1 = () => {
        setPressed1(true);
        setPressed(false);
        // here when opening the overlay
        fadeOut(fadeAnim2);
        fadeAnim1.setValue(0);
    };

    const handlePressclose = () => {
        // here take place when closed
        fadeIn(fadeAnim1);
        fadeIn(fadeAnim2);
     
    };

    return (

        <TouchableOpacity activeOpacity={1} onPress={handlePressclose}>
            <View styles={styles.container} >
                <View style={styles.innercontainer}>
                    <View style={styles.headcontainer}>
                        <Text style={styles.headtext}>MEET OUR LEADERS</Text>
                    </View>

                    <View style={styles.framecontainer}>
                        {/* linked in twitter icons */}
                        <View style={styles.socialcontainer}>
                            <AntDesign name='linkedin-square' color={'grey'} size={24} />
                            <AntDesign name='twitter' color={'grey'} size={24} />
                        </View>
                        {/* overlayed image */}
                        <View style={styles.imagecontainer}>
                            <TouchableOpacity activeOpacity={1} onPress={handlePress}>
                                <Image source={{ uri: 'https://www.pepperfry.ltd/wp-content/uploads/2023/04/Ashish.jpg' }} style={styles.image} />
                                {isPressed ? (
                                    <>
                                        <Animated.View style={[styles.overlay, { opacity: fadeAnim1 }]} />
                                        <Text style={styles.text} numberOfLines={1} ellipsizeMode="tail">Ashish Shah</Text>
                                        <Text style={styles.subtext}>Chief Executive Officer</Text>
                                        <Text style={styles.linktext}>Read More</Text>
                                    </>
                                ) : null}
                            </TouchableOpacity>
                        </View>
                        {/* image description */}
                        <View>
                            <Text style={styles.imagetextdescripheading}>Ashish Shah</Text>
                            <Text style={styles.imagetextdescripsubheading}>Chief Executive Officer</Text>
                        </View>
                    </View>

                    {/* image 2 */}
                    <View style={styles.framecontainer}>
                        {/* linked in twitter icons */}
                        <View style={styles.socialcontainer}>
                            <AntDesign name='linkedin-square' color={'grey'} size={24} />
                            <AntDesign name='twitter' color={'grey'} size={24} />
                        </View>
                        {/* overlayed image */}
                        <View style={styles.imagecontainer}>
                            <TouchableOpacity activeOpacity={1} onPress={handlePress1}>
                                <Image source={{ uri: 'https://www.pepperfry.ltd/wp-content/uploads/2023/04/Hussaine.jpg' }} style={styles.image} />
                                {isPressed1 ? (
                                    <>
                                        <Animated.View style={[styles.overlay, { opacity: fadeAnim2 }]} />
                                        <Text style={styles.text} >Hussaine Kesury</Text>
                                        <Text style={styles.subtext}>Chief Activation Officer</Text>
                                        <Text style={styles.linktext}>Read More</Text>
                                    </>
                                ) : null}
                            </TouchableOpacity>
                        </View>
                        {/* image description */}
                        <View>
                            <Text style={styles.imagetextdescripheading}>Hussaine Kesury</Text>
                            <Text style={styles.imagetextdescripsubheading}>Chief Activation Officer</Text>
                        </View>
                    </View>
                </View>
            </View>
            <Aboutleaders3card />
        </TouchableOpacity>
    )
}

export default Aboutleaders;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        width: '100%',
        height: 'auto',
        // top: 2,
        // marginRight: 2,
        // marginLeft: 2
    },
    innercontainer: {
        flex: 1,
        marginHorizontal: 22,
        flexDirection: 'column'
    },
    framecontainer: {
        flex: 1,
        flexDirection: 'column'
    },
    headcontainer: {
        marginTop: 34,
        marginBottom: 10
    },
    headtext: {
        textAlign: 'center',
        color: '#000000',
        fontSize: 32,
        fontWeight: 'bold'
    },
    imagecontainer:{
          marginTop:2,
          marginBottom:5
    },
    image:{
         height:350,
         width:'100%',
         resizeMode:'contain'
    },
    text: {
        position: 'absolute',
        bottom: 200,
        left: 80,
        right:80,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: "center",
        color: 'white',
        fontSize: 24, 
        fontWeight: '500',
    },
    subtext: {
        position: 'absolute',
        bottom:164, 
        left: 20,
        right: 10,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: "center",
        color: 'white',
        fontSize: 24, 
        fontWeight: '300', 
    },
    linktext: {
        position: 'absolute',
        bottom:140,
        left: 20,
        right: 10,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: "center",
        color: '#ff4500', 
        fontSize: 14, 
        fontWeight: '400', 
    },
    socialcontainer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-end'
    },
    imagetextdescripheading:{
         color:'#121212',
         fontSize:24,
         fontWeight:'700',
         textAlign:'center'
    },
    imagetextdescripsubheading:{
        color:'#121212',
        fontSize:22,
        fontWeight:'400',
        textAlign:'center',
        marginVertical:4  
    }
})