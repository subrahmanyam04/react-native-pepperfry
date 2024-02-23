import React from "react";
import controls from "./Imports";
const Aboutusleaderextension = ({ handlePress, isPressed, fadeAnim1, name, role, img }) => {
    return (
        <controls.View style={styles.framecontainer}>
            <controls.View style={styles.socialcontainer}>
                <controls.AntDesign name='linkedin-square' color={'grey'} size={24} />
                <controls.AntDesign name='twitter' color={'grey'} size={24} />
            </controls.View>
            <controls.View style={styles.imagecontainer}>
                <controls.TouchableOpacity activeOpacity={1} onPress={handlePress}>
                    <controls.Image source={{ uri: img }} style={styles.image} />
                    {isPressed ? (
                        <>
                            <controls.Animated.View style={[styles.overlay, { opacity: fadeAnim1 }]} />
                            <controls.Text style={styles.text} numberOfLines={1} ellipsizeMode="tail">{name}</controls.Text>
                            <controls.Text style={styles.subtext}>{role}</controls.Text>
                            <controls.Text style={styles.linktext}>Read More</controls.Text>
                        </>
                    ) : null}
                </controls.TouchableOpacity>
            </controls.View>
            <controls.View>
                <controls.Text style={styles.imagetextdescripheading}>{name}</controls.Text>
                <controls.Text style={styles.imagetextdescripsubheading}>{role}</controls.Text>
            </controls.View>
        </controls.View>
    )
}
export default Aboutusleaderextension;
const styles = controls.StyleSheet.create({
    overlay: {
        ...controls.StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        width: '100%',
        height: 'auto',
    },
    framecontainer: {
        flex: 1,
        flexDirection: 'column'
    },
    imagecontainer: {
        marginTop: 2,
        marginBottom: 5
    },
    image: {
        height: controls.Platform.OS === "ios" ? 332 : 346,
        width: '100%',
        resizeMode: 'contain'
    },
    text: {
        position: 'absolute',
        bottom: 200,
        left: 80,
        right: 80,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: "center",
        color: 'white',
        fontSize: 24,
        fontWeight: '500',
    },
    subtext: {
        position: 'absolute',
        bottom: 164,
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
        bottom: 140,
        left: 20,
        right: 10,
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
        justifyContent: 'flex-end'
    },
    imagetextdescripheading: {
        color: '#121212',
        fontSize: 24,
        fontWeight: '700',
        textAlign: 'center'
    },
    imagetextdescripsubheading: {
        color: '#121212',
        fontSize: 22,
        fontWeight: '400',
        textAlign: 'center',
        marginVertical: 4
    }
})