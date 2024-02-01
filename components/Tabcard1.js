import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { Ionicons } from '@expo/vector-icons'


const Tabcard1 = () => {
    const sliderdata = [
        {
            id: 1,
            imageuri: "https://ii1.pepperfry.com/assets/b45eb79d-ac1a-4030-8a8c-725b4dc07355.jpg",
            title: "",

        },
        {
            id: 2,
            imageuri: "https://ii1.pepperfry.com/media/catalog/product/m/i/494x544/milan-fabric-3-seater-sofa-in-sky-blue-colour-milan-fabric-3-seater-sofa-in-sky-blue-colour-kxcoqm.jpg",
            title: "",

        },
        {
            id: 3,
            imageuri: "https://ii1.pepperfry.com/media/catalog/product/j/a/494x544/jack-velvet-3-seater-sofa-in-green-colour-jack-velvet-3-seater-sofa-in-green-colour-ggqbsj.jpg",
            title: "",

        },
        {
            id: 4,
            imageuri: "https://ii1.pepperfry.com/media/catalog/product/p/e/494x544/pelican-fabric-3-seater-sofa-in-navy-blue-colour-pelican-fabric-3-seater-sofa-in-navy-blue-colour-yvkgkx.jpg",
            title: "",

        },
        {
            id: 5,
            imageuri: "https://ii1.pepperfry.com/media/catalog/product/n/e/494x544/nebula-fabric-3-seater-sofa-in-charcoal-grey-colour-nebula-fabric-3-seater-sofa-in-charcoal-grey-col-mk8y9x.jpg",
            title: "",

        }
    ]
    return (
        <View style={styles.container}>

            <FlatList
                data={sliderdata}

                renderItem={(itemData) => {
                    console.log('itemdata', itemData)
                    return (
                        <View style={styles.container2}>

                            {
                                itemData.index === 0 ? (
                                    <View style={{marginRight:6}}>
                                        <Image source={{ uri: itemData.item.imageuri }} style={{
                                            width: 140,
                                            height: 216,
                                            resizeMode:'contain'
                                        }} />
                                    </View>
                                ) : (
                                    <>
                                        <View>
                                            <Image source={{ uri: itemData.item.imageuri }}
                                                style={styles.image}
                                            />
                                            <View style={styles.iconContainer}>
                                                <View style={styles.iconBackground}>
                                                    <Ionicons name="heart-outline" size={21} color="#696969" />
                                                </View>
                                            </View>
                                        </View>
                                        <View>
                                            <Text style={styles.text1} numberOfLines={2} ellipsizeMode="tail">Milan Fabric 3 Seater Sofa in Sky Blue Colour</Text>
                                        </View>
                                        <View>
                                            <Text style={styles.pricetext}>
                                                <Text style={styles.firstprice}>₹12,499 </Text>
                                                <Text style={styles.secondprice}> ₹17,000</Text>
                                                <Text style={styles.thirdprice}> 72%</Text>
                                            </Text>
                                        </View>
                                    </>
                                )
                            }




                        </View>
                    )
                }}
                keyExtractor={(item) => item.id}
                horizontal={true} //  true for horizontal scrolling
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default Tabcard1;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 26,
    },
    container2: {
        flex: 1,
        flexDirection: "column",
    },
    image: {
        width: 150,
        height: 160,
        marginRight: 1,//  margin between images
        resizeMode:'contain'
    },

    text1: {
        marginTop: 7,
        // marginHorizontal: 2,
        maxWidth: 139,
        fontSize: 12,
        
        fontWeight: '500',
        color: '#363636'
    },
    pricetext: {
        marginTop: 1
    },
    iconContainer: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',

    },
    iconBackground: {
        top: 13,
        right: 12,
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Adjust opacity as needed
        padding: 5,
        borderRadius: 25,
        // borderWidth: 1,
        // borderColor: 'black',
    },
    firstprice: {
        fontWeight: 'bold'
    },
    secondprice: {
        textDecorationLine: 'line-through',
        color: 'black',
        fontSize: 12,
        fontWeight: '500'
    },
    thirdprice: {
        fontWeight: 'bold',
        fontSize: 14.5,
        color: 'green'
    }


})
