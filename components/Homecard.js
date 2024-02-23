import React from "react";
import controls from "./Imports";
const Homecard = () => {
    const images = [
        { id: 1, imguri1: "https://ii1.pepperfry.com/assets/dff7495e-1424-4b6b-8aa5-75c53a426897.jpg", imguri2: "https://ii1.pepperfry.com/assets/27ceaa07-82b4-4ea2-8e8c-8962d18cd6b2.jpg" },
        { id: 2, imguri1: "https://ii1.pepperfry.com/assets/cfe1d5a2-ec56-4d29-b8ae-7a3737760f08.jpg", imguri2: "https://ii1.pepperfry.com/assets/d6d8204d-d893-4afc-9224-39862ef5a0af.jpg" },
        { id: 3, imguri1: "https://ii1.pepperfry.com/assets/0a1858af-22b7-4214-9f2c-6a4ab1b64f2a.jpg", imguri2: "https://ii1.pepperfry.com/assets/1760129f-afc9-4aad-b5bb-ccabadb9371e.jpg" },
    ]
    return (
        <controls.View style={styles.maincontainercontainer}>
            <controls.Text style={styles.headingtext}>Brand Bazaar</controls.Text>
            {images.map((img) => (
                <controls.View key={img.id} style={styles.container}>
                    <controls.View style={styles.container1}>
                        <controls.Image source={{ uri: img.imguri1 }} style={styles.image} />
                        <controls.Text style={styles.text1}>Use Coupon: EXTRA5</controls.Text>
                        <controls.Text numberOfLines={1} ellipsizeMode="tail" style={styles.text2}>250+ Products On Platters, Coffee Mugs, Vases, Showpieces & More</controls.Text>
                    </controls.View>
                    <controls.View style={styles.container2}>
                        <controls.Image source={{ uri: img.imguri2 }} style={styles.image} />
                        <controls.Text style={styles.text1}>Use Coupon: EXTRA5</controls.Text>
                        <controls.Text numberOfLines={1} ellipsizeMode="tail" style={styles.text2}>250+ Products On Platters, Coffee Mugs, Vases, Showpieces & More</controls.Text>
                    </controls.View>
                </controls.View>
            ))}
        </controls.View>
    )
}
export default Homecard
const styles = controls.StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        marginTop: 10,
        marginHorizontal: 1
    },
    maincontainer: {
        flex: 1,
        marginTop: 25,
    },
    container1: {
        flex: 1,
        flexDirection: "column",
        marginLeft: 3,
        marginRight: 3,
    },
    container2: {
        flex: 1,
        flexDirection: 'column',
        marginRight: 3,
        marginLeft: 3,
    },
    image: {
        height: 200,
        width: '100%',
    },
    text1: {
        color: '#5B5B5B',
        fontWeight: 'bold',
        fontSize: 17,
        marginTop: 3
    },
    text2: {
        color: '#848484'
    },
    headingtext: {
        color: '#8b4513',
        fontWeight: 'bold',
        fontSize: 17,
        marginLeft: 4,
        marginTop: 15,
        marginBottom: 2
    }
})

