import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'

const Productsslider1 = () => {
    const sliderdata = [
        {
            id: 1,
            imageuri: "https://ii1.pepperfry.com/media/catalog/product/q/t/236x260/qt-love-seater-sofa-in-brwon-colour-qt-love-seater-sofa-in-brwon-colour-nchyql.jpg",
            title: "",

        },
        {
            id: 2,
            imageuri: "https://ii1.pepperfry.com/media/catalog/product/q/t/236x260/qt-love-seater-teddy-fabric--sofa-in-light-pink--colour-qt-love-seater-teddy-fabric--sofa-in-light-p-1ztqe8.jpg",
            title: "",

        },
        {
            id: 3,
            imageuri: "https://ii1.pepperfry.com/media/catalog/product/q/t/236x260/qt-love-seater-teddy-fabric--sofa-in-grey--colour-qt-love-seater-teddy-fabric--sofa-in-grey--colour-tqxku2.jpg",
            title: "",

        },
        {
            id: 4,
            imageuri: "https://ii1.pepperfry.com/media/catalog/product/q/t/236x260/qt-love-seater-teddy-fabric--sofa-in-royal-green--colour-qt-love-seater-teddy-fabric--sofa-in-royal--sc8my5.jpg",
            title: "",

        },
        {
            id: 5,
            imageuri: "https://ii1.pepperfry.com/media/catalog/product/q/t/236x260/qt-love-seater-teddy-fabric--sofa-in-off-white--colour-qt-love-seater-teddy-fabric--sofa-in-off-whit-1dti1g.jpg",
            title: "",

        },
        {
            id: 6,
            imageuri: "https://ii1.pepperfry.com/media/catalog/product/b/e/236x260/belize-fabric-3-seater-sofa-in-mocha-brown-colour-belize-fabric-3-seater-sofa-in-mocha-brown-colour-sbfyp4.jpg",
            title: "",

        },
    ]
    return (
        <>
        <View style={styles.container}>

            <View style={{ marginBottom: 16 }}>
                <Text style={{ color: 'brown', fontWeight: '900', fontSize: 20 }}>Check Out More Modern Sofa Sets</Text>
            </View>

            <FlatList
                data={sliderdata}

                renderItem={(itemData) => {
                    console.log('itemdata', itemData)
                    return (
                        <View style={styles.container2}>
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
                                <Text style={[styles.text1, { marginTop: 6 }]} numberOfLines={1} ellipsizeMode="tail">Solid Brown Mango Wood Chopping Board</Text>
                            </View>
                            <View>
                                <Text style={[styles.text1, { marginVertical: 4 }]} >By Durian</Text>
                            </View>
                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <Entypo name="star" size={16} color="rgb(255, 169, 134)" />
                                <Entypo name="star" size={16} color="rgb(255, 169, 134)" />
                                <Entypo name="star" size={16} color="rgb(255, 169, 134)" />
                                <Entypo name="star" size={16} color="rgb(255, 169, 134)" />
                                <Entypo name="star" size={16} color="#CCCCCC" />
                                <Text style={{ color: "black", fontSize: 14, fontWeight: '500' }}>{'(106 Sold)'}</Text>
                            </View>
                            <View>
                                <Text style={styles.pricetext}>
                                    <Text style={styles.firstprice}>₹27,390 </Text>
                                    <Text style={styles.secondprice}> ₹499</Text>
                                    <Text style={styles.thirdprice}> 72%</Text>
                                </Text>
                            </View>
                        </View>
                    )
                }}
                keyExtractor={(item) => item.id}
                horizontal={true} //  true for horizontal scrolling
                showsHorizontalScrollIndicator={false}
            />
            
        </View>
        <View style={{ borderBottomColor: "#dbdcdc", borderBottomWidth: 8,marginBottom: 16,marginTop:16 }} />

        </>
    )
}

export default Productsslider1;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:4,
        marginLeft: 8
    },
    container2: {
        flex: 1,
        flexDirection: "column",
    },
    image: {
        width: 155,
        height: 175,
        margin: 2
    },

    text1: {

        marginHorizontal: 2,
        maxWidth: 150,
        fontSize: 12,
        fontWeight: '500',
        color: 'black'
    },
    pricetext: {
        margin: 2
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
        right: 5,
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Adjust opacity as needed
        padding: 5,
        borderRadius: 25,
        // borderWidth: 1,
        // borderColor: 'black',
    },
    firstprice: {
        fontWeight: 'bold',
        fontSize: 16
    },
    secondprice: {
        textDecorationLine: 'line-through',
        color: 'black'
    },
    thirdprice: {
        fontWeight: 'bold',
        fontSize: 14.5,
        color: 'green'
    }


})
