import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'

const Productsslider2 = () => {
    const sliderdata = [
        {
            id: 1,
            imageuri: "https://ii1.pepperfry.com/media/catalog/product/c/a/236x260/calvin---hobbes-silk-cushion-cover-by-stybuzz-calvin---hobbes-silk-cushion-cover-by-stybuzz-yahuyb.jpg",
            title: "",

        },
        {
            id: 2,
            imageuri: "https://ii1.pepperfry.com/media/catalog/product/t/a/236x260/taro-bed-side-table-in-walnut-finish-by-mintwud-taro-bed-side-table-in-walnut-finish-by-mintwud-evjomx.jpg",
            title: "",

        },
        {
            id: 3,
            imageuri: "https://ii1.pepperfry.com/media/catalog/product/s/t/236x260/steel-ironing-board-with-iron-holder-in-multicolour--l--54--w--14-5--h--36-inches--by-peng-essential-8a3iea.jpg",
            title: "",

        },
        {
            id: 4,
            imageuri: "https://ii1.pepperfry.com/media/catalog/product/s/t/236x260/steel-ironing-board-with-iron-holder-in-multicolour--l--54--w--14-5--h--36-inches--by-peng-essential-hc2i7m.jpg",
            title: "",

        },
        {
            id: 5,
            imageuri: "https://ii1.pepperfry.com/media/catalog/product/s/t/236x260/steel-ironing-board-with-iron-holder-in-multicolour--l--57-8--w--17--h--36-inches--by-peng-essential-56ytky.jpg",
            title: "",

        },
        {
            id: 6,
            imageuri: "https://ii1.pepperfry.com/media/catalog/product/a/r/236x260/art-of-jodhpur-multicolour-solid-wood-13---width:-13-x-4-5-inch-wall-clock-art-of-jodhpur-multicolou-qewpd2.jpg",
            title: "",

        },
    ]
    return (
        <>
        <View style={styles.container}>

            <View style={{ marginBottom: 16 }}>
                <Text style={{ color: 'brown', fontWeight: '900', fontSize: 20 }}>See What Other Customers Viewed</Text>
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

export default Productsslider2;

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
