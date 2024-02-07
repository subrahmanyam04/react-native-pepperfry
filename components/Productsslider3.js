import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'

const Productsslider3 = () => {
    const sliderdata = [
        {
            id: 1,
            imageuri: "https://ii1.pepperfry.com/media/catalog/product/e/l/236x260/elegant-3-seater-sofa-in-grey-colour-elegant-3-seater-sofa-in-grey-colour-akttix.jpg",
            title: "",

        },
        {
            id: 2,
            imageuri: "https://ii1.pepperfry.com/media/catalog/product/m/u/236x260/multicolor-floral-280-tc-cotton-blend-single-bed-bedsheet-with-1-pillow-cover-by-hosta-homes-multico-m3vkab.jpg",
            title: "",

        },
        {
            id: 3,
            imageuri: "https://ii1.pepperfry.com/media/catalog/product/s/i/236x260/silver-2-ltrs-induction-base-outer-lid-aluminium-pressure-cooker-silver-2-ltrs-induction-base-outer--jdowx3.jpg",
            title: "",

        },
        {
            id: 4,
            imageuri: "https://ii1.pepperfry.com/media/catalog/product/s/t/236x260/steel-ironing-board-with-iron-holder-in-multicolour--l--54--w--14-5--h--36-inches--by-peng-essential-hc2i7m.jpg",
            title: "",

        },
        {
            id: 5,
            imageuri: "https://ii1.pepperfry.com/media/catalog/product/d/a/236x260/daroo-3-seater-sofa-in-camel-beige-by-febonic-daroo-3-seater-sofa-in-camel-beige-by-febonic-o8dhfm.jpg",
            title: "",

        },
        {
            id: 6,
            imageuri: "https://ii1.pepperfry.com/media/catalog/product/a/r/236x260/art-of-jodhpur-multicolour-solid-wood-13---width:-13-x-4-5-inch-wall-clock-art-of-jodhpur-multicolou-qewpd2.jpg",
            title: "",

        },
    ]
    return (
       
        <View style={styles.container}>

            <View style={{ marginBottom: 16 }}>
                <Text style={{ color: 'brown', fontWeight: '900', fontSize: 20 }}>Recently Viewed</Text>
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
        

      
    )
}

export default Productsslider3;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:4,
        marginLeft: 8,
      marginBottom:28,
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