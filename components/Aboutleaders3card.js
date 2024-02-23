import React, { useRef, useState } from "react";
import Aboutleaders3cardsoptic from "./Aboutleader3cardsoptic";
import controls from "./Imports";

const Aboutleaders3card = () => {
    const [isPressed11, setPressed11] = useState(false);
    const [isPressed22, setPressed22] = useState(false);
    const [isPressed33, setPressed33] = useState(false);
    const fadeAnim11 = useRef(new controls.Animated.Value(0)).current;
    const fadeAnim22 = useRef(new controls.Animated.Value(0)).current;
    const fadeAnim33 = useRef(new controls.Animated.Value(0)).current;

    const fadeOuted = (fadeAnim) => {
        controls.Animated.timing(fadeAnim, {
            toValue: 1.8,
            duration: 800,
            useNativeDriver: false,
        }).start();
    };

    const fadeInned = (fadeAnim) => {
        controls.Animated.timing(fadeAnim, {
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
        fadeOuted(fadeAnim11);
        fadeAnim22.setValue(0);
        fadeAnim33.setValue(0);
    };

    const handlePressed1 = () => {
        setPressed22(true);
        setPressed11(false);
        setPressed33(false);
        fadeOuted(fadeAnim22);
        fadeAnim11.setValue(0);
        fadeAnim33.setValue(0);
    };

    const handlePressed2 = () => {
        setPressed33(true);
        setPressed11(false);
        setPressed22(false);
        fadeOuted(fadeAnim33);
        fadeAnim11.setValue(0);
        fadeAnim22.setValue(0);
    };

    const handlePressclosed = () => {
        fadeInned(fadeAnim11);
        fadeInned(fadeAnim22);
        fadeInned(fadeAnim33);
    };
    return (
        <controls.TouchableOpacity activeOpacity={1} onPress={handlePressclosed}>
            <controls.View style={styles.container}>
                <controls.View style={styles.innercontainer}>
                    <controls.View style={styles.rowcontainer}>
                        <Aboutleaders3cardsoptic handlePressed={handlePressed} img={'https://www.pepperfry.ltd/wp-content/uploads/2023/04/Anand.jpg'} isPressed={isPressed11} fadeAnim={fadeAnim11} name={"Anand Batra"} role={"Chief Financial Officer"} subtext={styles.subtext} />
                    </controls.View>

                    <controls.View style={styles.rowcontainer}>
                        <Aboutleaders3cardsoptic handlePressed={handlePressed1} img={'https://www.pepperfry.ltd/wp-content/uploads/2023/04/Sanjay.jpg'} isPressed={isPressed22} fadeAnim={fadeAnim22} name={"Sanjay Netrabile"} role={"Chief Technology Officer"} subtext={styles.subtext} />
                    </controls.View>
                </controls.View>

                <controls.View style={styles.innercontainer2}>
                    <controls.View style={styles.rowcontainer2}>
                        <Aboutleaders3cardsoptic handlePressed={handlePressed2} img={'https://www.pepperfry.ltd/wp-content/uploads/2023/04/Deepak.jpg'} isPressed={isPressed33} fadeAnim={fadeAnim33} name={"Deepak Sharma"} role={"Chief Product Officer"} subtext={styles.subtext3} />
                    </controls.View>
                </controls.View>
            </controls.View>
        </controls.TouchableOpacity>
    )
}

export default Aboutleaders3card;

const styles = controls.StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 10
    },
    innercontainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 22,
        marginTop: 28
    },
    innercontainer2: {
        flexDirection: 'column',
        alignItems: 'center',
        marginHorizontal: 22,
        marginTop: 60
    },
    rowcontainer2: {
        width: '46%',
        flexDirection: 'column',
    },
    rowcontainer: {
        width: '46%',
        flexDirection: 'column',
        height: 230,
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
    subtext3: {
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
})