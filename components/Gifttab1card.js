import React from "react";
import controls from "./Imports";
const Gifttab1card = () => {
    return (
        <controls.View style={styles.container}>
            <controls.View style={styles.subcontainer}>
                <controls.View style={styles.innerrowcontainer}>
                    <controls.View style={styles.rowcontainer1}>
                        <controls.Ionicons name="mail-open-outline" size={50} color="#121212" />
                    </controls.View>
                    <controls.View>
                        <controls.Text style={styles.rowcon1text}>GO GREEN</controls.Text>
                        <controls.Text style={styles.rowcon2text}>Send a Gift Card Via E-mail</controls.Text>
                    </controls.View>
                </controls.View>
                <controls.View style={styles.imagecontainer}>
                    <controls.Image source={{ uri: 'https://images.freekaamaal.com/post_images/1613967771.png' }} style={styles.image} />
                </controls.View>
                <controls.View style={styles.buttoncontainer}>
                    <controls.Button title="BUY E-GIFT CARD" color={controls.Platform.OS === "ios" ? "white" : "red"} />
                </controls.View>
            </controls.View>
        </controls.View>
    )
}
export default Gifttab1card;
const styles = controls.StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 5,
        marginHorizontal: 14,
        backgroundColor: 'white',
        marginTop: 15,
        marginBottom: 60,
        shadowColor: 'lightgrey',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.6,
        shadowRadius: 5,
        elevation: 10,
    },
    subcontainer: {
        flex: 1,
        flexDirection: 'column',
        marginHorizontal: 15,
        marginVertical: 15
    },
    innerrowcontainer: {
        flexDirection: 'row',
    },
    rowcontainer1: {
        marginRight: 10,
    },
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'contain',
    },
    imagecontainer: {
        flex: 1,
        marginTop: 10
    },
    buttoncontainer: {
        marginTop: 14,
        backgroundColor: controls.Platform.OS === "ios" ? "red" : "",
    },
    rowcon1text: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 8,
        marginLeft: 5
    },
    rowcon2text: {
        color: '#848484',
        fontSize: 14,
        marginLeft: 5
    },
})