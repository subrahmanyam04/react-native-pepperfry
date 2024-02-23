import React from "react";
import controls from "./Imports";

const Aboutleaders3cardsoptic = ({ handlePressed, img, isPressed, fadeAnim, name, role, subtext }) => {
    return (
        <>
            <controls.View style={styles.socialcontainer}>
                <controls.AntDesign name='linkedin-square' color={'grey'} size={24} />
                <controls.AntDesign name='twitter' color={'grey'} size={18} />
            </controls.View>
            <controls.View>
                <controls.TouchableOpacity activeOpacity={1} onPress={handlePressed}>
                    <controls.View style={styles.imagecontainer}>
                        <controls.Image source={{ uri: img }} style={styles.image} />
                    </controls.View>
                    {isPressed ? (
                        <>
                            <controls.Animated.View style={[styles.overlay, { opacity: fadeAnim }]} />
                            <controls.Text style={styles.text} >{name}</controls.Text>
                            <controls.Text style={subtext} >{role}</controls.Text>
                            <controls.Text style={styles.linktext}>Read More</controls.Text>
                        </>
                    ) : null}
                </controls.TouchableOpacity>
            </controls.View>
            <controls.View>
                <controls.Text style={styles.imagetextdescripheading}>{name}</controls.Text>
                <controls.Text style={styles.imagetextdescripsubheading}>{role}</controls.Text>
            </controls.View>
        </>
    )
}

export default Aboutleaders3cardsoptic;

const styles = controls.StyleSheet.create({
    overlay: {
        ...controls.StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        width: '100%',
        height: 'auto',

    },
    image: {
        height: controls.Platform.OS === "ios" ? 154 : 164,
        width: '100%',
        resizeMode: 'contain',
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
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginBottom: 5
    },
    imagetextdescripheading: {
        color: '#121212',
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center',
        marginVertical: 4
    },
    imagetextdescripsubheading: {
        color: '#121212',
        fontSize: 17,
        fontWeight: '500',
        textAlign: 'center',
        lineHeight: 22
    },
})