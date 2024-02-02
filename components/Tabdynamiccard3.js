import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Ionicons, Entypo } from '@expo/vector-icons'
import Tabcard23infor from "./Tabcard23infor";
const Tabdynamiccard3 = () => {

    const card2data = [
        {
            id: 1,
            imgurl: 'https://ii1.pepperfry.com/media/catalog/product/d/a/494x544/daroo-3-seater-sofa-in-camel-beige-by-febonic-daroo-3-seater-sofa-in-camel-beige-by-febonic-o8dhfm.jpg'
        },
        {
            id: 2,
            imgurl: 'https://ii1.pepperfry.com/media/catalog/product/b/a/494x544/baley-3-seater-sofa-in-lama-black-colour-baley-3-seater-sofa-in-lama-black-colour-skjtv1.jpg'
        },
        {
            id: 3,
            imgurl: 'https://ii1.pepperfry.com/media/catalog/product/j/a/494x544/jack-velvet-3-seater-sofa-in-green-colour-jack-velvet-3-seater-sofa-in-green-colour-ggqbsj.jpg'
        },
        {
            id: 4,
            imgurl: 'https://ii1.pepperfry.com/media/catalog/product/b/a/494x544/bali-fabric-3-seater-sofa-in-jeans-blue-colour-bali-fabric-3-seater-sofa-in-jeans-blue-colour-hq2mso.jpg'
        },

    ]

    return (
        <>
            <View style={styles.container}>

                <View style={styles.innercontainer}>

                    {card2data.map((card3) => (


                        <View style={styles.rowcontainer} key={card3.id}>

                            <View style={styles.rowinnercontainer}>
                                {/* image here is */}
                                <View>
                                    <Image
                                        source={{ uri: 'https://ii1.pepperfry.com/media/catalog/product/d/a/494x544/daroo-3-seater-sofa-in-camel-beige-by-febonic-daroo-3-seater-sofa-in-camel-beige-by-febonic-o8dhfm.jpg' }}
                                        style={styles.image}
                                    />
                                    <View style={styles.iconcontainer}>
                                        <View style={styles.iconbackground}>
                                            <Ionicons name="heart-outline" size={20} color="#696969" />
                                        </View>
                                    </View>
                                </View>

                                {/* details of that image */}

                                {/* entire Information of the card is in this below file */}

                                <Tabcard23infor />

                                {/* entire Information of the card is in this above file*/}

                            </View>
                        </View>




                    ))}
                </View>

            </View>
        </>
    )
}

export default Tabdynamiccard3;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 50
    },
    innercontainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    rowcontainer: {
        // borderColor: 'black',
        // borderWidth: 1,
        width: '49%',
        marginTop: 10
    },
    rowinnercontainer: {
        flex: 1,
        flexDirection: 'column'
    },
    iconcontainer: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    iconbackground: {
        backgroundColor: "rgba(255, 255, 255, 0.4)",
        top: 14,
        right: 6,
        padding: 5,
        borderRadius: 30
    },
    image: {
        width: 'auto',
        height: 210,
        resizeMode: 'contain'
    }
})