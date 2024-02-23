import React, { useState, useRef } from "react";
import Aboutleaders3card from "./Aboutleaders3card";
import controls from "./Imports";
import Aboutusleaderextension from "./Aboutusleaderextension";

const Aboutleaders = () => {
    const [isPressed, setPressed] = useState(false);
    const [isPressed1, setPressed1] = useState(false);
    const fadeAnim1 = useRef(new controls.Animated.Value(0)).current;
    const fadeAnim2 = useRef(new controls.Animated.Value(0)).current;
    const fadeOut = (fadeAnim) => {
        controls.Animated.timing(fadeAnim, {
            toValue: 1.8,
            duration: 1000,
            useNativeDriver: false,
        }).start();
    };

    const fadeIn = (fadeAnim) => {
        controls.Animated.timing(fadeAnim, {
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
        fadeOut(fadeAnim1);
        fadeAnim2.setValue(0);
    };

    const handlePress1 = () => {
        setPressed1(true);
        setPressed(false);
        fadeOut(fadeAnim2);
        fadeAnim1.setValue(0);
    };
    const handlePressclose = () => { fadeIn(fadeAnim1); fadeIn(fadeAnim2); };
    return (
        <controls.TouchableOpacity activeOpacity={1} onPress={handlePressclose}>
            <controls.View styles={styles.container} >
                <controls.View style={styles.innercontainer}>
                    <controls.View style={styles.headcontainer}>
                        <controls.Text style={styles.headtext}>MEET OUR LEADERS</controls.Text>
                    </controls.View>
                    
                    <Aboutusleaderextension img={'https://www.pepperfry.ltd/wp-content/uploads/2023/04/Ashish.jpg'} name={'Ashish Shah'} role={"Chief Executive Officer"} handlePress={handlePress} isPressed={isPressed} fadeAnim1={fadeAnim1} />

                    <Aboutusleaderextension img={'https://www.pepperfry.ltd/wp-content/uploads/2023/04/Hussaine.jpg'} name={'Hussaine Kesury'} role={"Chief Activation Officer"} handlePress={handlePress1} isPressed={isPressed1} fadeAnim1={fadeAnim2} />

                </controls.View>
            </controls.View>
            <Aboutleaders3card />
        </controls.TouchableOpacity>
    )
}

export default Aboutleaders;

const styles = controls.StyleSheet.create({
    container: {
        flex: 1
    },
    innercontainer: {
        flex: 1,
        marginHorizontal: 22,
        flexDirection: 'column'
    },
    headcontainer: {
        marginTop: 34,
        marginBottom: 10
    },
    headtext: {
        textAlign: 'center',
        color: '#000000',
        fontSize: 26,
        fontWeight: '900'
    },
})