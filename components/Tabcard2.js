import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Ionicons } from '@expo/vector-icons'
const Tabcard2 = () => {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.innercontainer}>

                    <View style={styles.rowcontainer}>

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

                            {/* icon  with multicolor */}

                            <View style={{ marginTop: 8, flex: 1, flexDirection: 'row' }}>
                                <View style={{ borderColor: 'grey', borderWidth: 1, padding: 3, borderRadius: 30, marginHorizontal: 10 }}>
                                    <Image source={{ uri: "https://cdn.pixabay.com/photo/2013/07/12/19/20/rainbow-colors-154569_1280.png" }}
                                        style={{ height: 14, width: 14, resizeMode: 'contain' }}
                                    />
                                </View>
                                <View>
                                    <Text style={{ color: "#242424", fontWeight: '800', fontSize: 12, marginTop: 1 }}>+4 more colors</Text>
                                </View>
                            </View>
                        

                        <View style={{flex:1,flexDirection:'column',marginHorizontal:2}}>

                            <View>
                                <Text>
                                Baley 3 Seater Sofa In Lama Black Colour 
                                </Text>
                            </View>

                            <View>
                                <Text>
                                Trevi Furniture  
                                </Text>
                            </View>

                            <View>
                                <Text>
                                stars 
                                </Text>
                            </View>

                            <View>
                                <Text>
                                Today's Deal 
                                </Text>
                            </View>

                            <View>
                                <Text>
                                ₹18,199
                                </Text>
                            </View>

                            <View>
                                <Text>
                                YouSave
                                </Text>
                            </View>

                            <View>
                                <Text>
                                Earn
                                </Text>
                            </View>

                        </View>





                        </View>
                    </View>






                </View>

            </View>
        </>
    )
}

export default Tabcard2;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom:60
    },
    innercontainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    rowcontainer: {
        borderColor: 'black',
        borderWidth: 1,
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