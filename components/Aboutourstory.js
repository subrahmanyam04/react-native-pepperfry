import React from "react";
import controls from "./Imports";

const Aboutourstory = () => {
    return (
        <controls.View style={styles.container}>
            <controls.View style={styles.innercontainer}>
                <controls.View style={styles.headcontainer}>
                    <controls.Text style={styles.headtext}>OUR STORY</controls.Text>
                </controls.View>
                <controls.View><controls.Image source={{ uri: 'https://www.pepperfry.ltd/wp-content/uploads/2023/03/mobile-image.jpg' }} alt="hbdf" style={styles.img} /></controls.View>
            </controls.View>
        </controls.View>
    )
}
export default Aboutourstory
const styles = controls.StyleSheet.create({
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