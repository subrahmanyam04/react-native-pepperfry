import React, { useRef, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Animated, Image } from "react-native";
import { AntDesign } from '@expo/vector-icons';

const Aboutleaders3card = () => {
    const [isPressed11, setPressed11] = useState(false);
    const [isPressed22, setPressed22] = useState(false);
    const [isPressed33, setPressed33] = useState(false);
    const fadeAnim11 = useRef(new Animated.Value(0)).current;
    const fadeAnim22 = useRef(new Animated.Value(0)).current;
    const fadeAnim33 = useRef(new Animated.Value(0)).current;

    const fadeOuted = (fadeAnim) => {
        Animated.timing(fadeAnim, {
            toValue: 1.8,
            duration: 800,
            useNativeDriver: false,
        }).start();
    };

    const fadeInned = (fadeAnim) => {
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 800,
            useNativeDriver: false,
        }).start(() => {
            setPressed11(false);
            setPressed22(false);
            setPressed33(false);
        });
    };

    const handlePressed = () => {
        setPressed11(true);
        setPressed22(false);
        setPressed33(false);
        // here when opening the overlay
        fadeOuted(fadeAnim11);
        fadeAnim22.setValue(0);
        fadeAnim33.setValue(0);
    };

    const handlePressed1 = () => {
        setPressed22(true);
        setPressed11(false);
        setPressed33(false);
        // here when opening the overlay
        fadeOuted(fadeAnim22);
        fadeAnim11.setValue(0);
        fadeAnim33.setValue(0);
    };

    const handlePressed2 = () => {
        setPressed33(true);
        setPressed11(false);
        setPressed22(false);
        // here when opening the overlay
        fadeOuted(fadeAnim33);
        fadeAnim11.setValue(0);
        fadeAnim22.setValue(0);
    };

    const handlePressclosed = () => {
        // here take place when closed
        fadeInned(fadeAnim11);
        fadeInned(fadeAnim22);
        fadeInned(fadeAnim33);
    };
    return (
        <TouchableOpacity activeOpacity={1} onPress={handlePressclosed}>
            <View style={styles.container}>
                <View style={styles.innercontainer}>
                    <View style={styles.rowcontainer}>
                        {/* linked in twitter icons 1*/}
                        <View style={styles.socialcontainer}>
                            <AntDesign name='linkedin-square' color={'grey'} size={24} />
                            <AntDesign name='twitter' color={'grey'} size={18} />
                        </View>
                        {/* image 1*/}
                        <View>
                        <TouchableOpacity activeOpacity={1} onPress={handlePressed}>
                            <View style={styles.imagecontainer}>
                            <Image source={{ uri: 'https://www.pepperfry.ltd/wp-content/uploads/2023/04/Anand.jpg' }} style={styles.image} />
                            </View>
                            {isPressed11 ? (
                                <>
                                    <Animated.View style={[styles.overlay, { opacity: fadeAnim11 }]} />
                                    <Text style={styles.text} >Anand Batra</Text>
                                    <Text style={styles.subtext} >Chief Financial Officer</Text>
                                    <Text style={styles.linktext}>Read More</Text>
                                </>
                            ) : null}
                        </TouchableOpacity>
                        </View>
                        {/* image description 1*/}
                        <View>
                            <Text style={styles.imagetextdescripheading}>Anand Batra</Text>
                            <Text style={styles.imagetextdescripsubheading}>Chief Financial Officer</Text>
                        </View>
                    </View>
                    

                    {/* 2 */}

                    <View style={styles.rowcontainer}>
                        {/* linked in twitter icons 2*/}
                        <View style={styles.socialcontainer}>
                            <AntDesign name='linkedin-square' color={'grey'} size={24} />
                            <AntDesign name='twitter' color={'grey'} size={18} />
                        </View>
                        {/* image 2*/}
                     <View>
                        <TouchableOpacity activeOpacity={1} onPress={handlePressed1}>
                        <View style={styles.imagecontainer}>
                            <Image source={{ uri: 'https://www.pepperfry.ltd/wp-content/uploads/2023/04/Sanjay.jpg' }} style={styles.image} /></View>
                            {isPressed22 ? (
                                <>
                                    <Animated.View style={[styles.overlay, { opacity: fadeAnim22 }]} />
                                    <Text style={styles.text} >Sanjay Netrabile</Text>
                                    <Text style={styles.subtext} >Chief Technology Officer</Text>
                                    <Text style={styles.linktext}>Read More</Text>
                                </>
                            ) : null}
                        </TouchableOpacity>
                        {/* image description 2*/}
                       </View>
                       <View>
                       <Text style={styles.imagetextdescripheading}>Sanjay Netrabile</Text>
                            <Text style={styles.imagetextdescripsubheading}>Chief Technology Officer</Text>
                       </View>
                    </View>

                </View>

                {/* container 2 for single card in the middle of the page */}

                <View style={styles.innercontainer2}>
                    <View style={styles.rowcontainer2}>
                        {/* linked in twitter icons 3*/}
                        <View style={styles.socialcontainer}>
                            <AntDesign name='linkedin-square' color={'grey'} size={24} />
                            <AntDesign name='twitter' color={'grey'} size={18} />
                        </View>
                        {/* image 3*/}
                        <TouchableOpacity activeOpacity={1} onPress={handlePressed2}>
                        <View style={styles.imagecontainer}>
                            <Image source={{ uri: 'https://www.pepperfry.ltd/wp-content/uploads/2023/04/Deepak.jpg' }} style={styles.image} /></View>
                            {isPressed33 ? (
                                <>
                                    <Animated.View style={[styles.overlay, { opacity: fadeAnim33 }]} />
                                    <Text style={styles.text} >Deepak Sharma</Text>
                                    <Text style={styles.subtext3} >Chief Product Officer</Text>
                                    <Text style={styles.linktext}>Read More</Text>
                                </>
                            ) : null}
                        </TouchableOpacity>
                        {/* image description 3*/}
                        
                    </View>
                    <View>
                            <Text style={styles.imagetextdescripheading}>Deepak Sharma</Text>
                            <Text style={styles.imagetextdescripsubheading}>Chief Product Officer</Text>
                        </View>
                </View>

            </View>
        </TouchableOpacity>
    )
}

export default Aboutleaders3card;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 10
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        width: '100%',
        height: 'auto',

    },

    innercontainer: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 22,
        marginTop:28

    },
    innercontainer2: {
        // flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        marginHorizontal: 22,
        marginTop: 60
    },
    rowcontainer2: {
        width: '46%',
        flexDirection: 'column',
        // borderColor: 'black',
        // borderWidth: 2
        // height: 250,
    },
    rowcontainer: {
        width: '46%',
        flexDirection: 'column',
        height: 240,
        // borderColor: 'black',
        // borderWidth: 2
    },

    image: {
      
        height: 164,
        width: '100%',
        resizeMode: 'contain',
        
        // marginTop: 4
    },

    text: {
        position: 'absolute',
        bottom: 100,
        left: 5,
        right: 5,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: "center",
        color: 'white',
        fontSize: 17,
        fontWeight: '700',
    },
    subtext: {
        position: 'absolute',
        bottom: 50,
        left: 5,
        right: 5,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: "center",
        color: 'white',
        fontSize: 16,
        lineHeight: 24,
        fontWeight: '400',
    },
    subtext3:{
        position: 'absolute',
        bottom: 50,
        left: 5,
        right: 5,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: "center",
        color: 'white',
        fontSize: 17,
        lineHeight: 24,
        fontWeight: '400',
    },
    linktext: {
        position: 'absolute',
        bottom: 30,
        left: 5,
        right: 5,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: "center",
        color: '#ff4500',
        fontSize: 14,
        fontWeight: '400',
    },
   
    socialcontainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginBottom:5
    },
    imagetextdescripheading:{
        color:'#121212',
        fontSize:18,
        fontWeight:'600',
        textAlign:'center',
        marginVertical:4
    },
    imagetextdescripsubheading:{
        color:'#121212',
        fontSize:17,
        fontWeight:'500',
        textAlign:'center',
        lineHeight:22
     
    },
   
})