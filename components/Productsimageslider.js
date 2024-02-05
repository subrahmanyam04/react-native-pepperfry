import React, { useState } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { windowWidth } from "../Util/Dimensions";
import { Octicons, Ionicons, Feather, MaterialCommunityIcons } from '@expo/vector-icons'
import { useRoute } from "@react-navigation/native";

const Productsimageslider = () => {
    const [activeindex, setactiveindex] = useState(0)

    const imageuels = [
        {
            id: 1,
            url: 'https://ii1.pepperfry.com/media/catalog/product/e/l/800x400/elegant-3-seater-sofa-in-grey-colour-elegant-3-seater-sofa-in-grey-colour-zkgiy3.jpg',
        },
        {
            id: 2,
            url: 'https://ii1.pepperfry.com/media/catalog/product/e/l/800x400/elegant-3-seater-sofa-in-grey-colour-elegant-3-seater-sofa-in-grey-colour-zkgiy3.jpg',
        },
        {
            id: 3,
            url: 'https://ii1.pepperfry.com/media/catalog/product/e/l/800x400/elegant-3-seater-sofa-in-grey-colour-elegant-3-seater-sofa-in-grey-colour-zkgiy3.jpg',
        },
    ]

    const handlescroll = (event) => {
        const scrollposition = event.nativeEvent.contentOffset.x;
        const index = Math.round(scrollposition / windowWidth);
        setactiveindex(index)
    }

    const route = useRoute();

    return (
        <View style={styles.container}>
            
            <View style={{ flex: 1, flexDirection: 'column', marginVertical: 8, marginHorizontal: 8 }}>
                <Text style={{ color: '#343534', fontWeight: '600', fontSize: 16 }}>
                    Elegant {route.params.screens} in Grey Colour.
                </Text>
                <Text style={{ color: '#ff4500', fontWeight: '500', fontSize: 16, marginVertical: 2 }}>
                    By The Alankarr.
                </Text>


                <Text>
                    <Ionicons name="eye-outline" size={14} color="#181818" />
                    <Text style={{ color: '#484a49', fontSize: 12, fontWeight: '500' }}> 33 People are Viewing this Product Right Now</Text>
                </Text>

            </View>
            <FlatList
                data={imageuels}
                horizontal={true}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
                renderItem={(itemData) => {
                    return (
                        <View style={styles.subconatiner} key={itemData.item.id}>
                            <View>
                                <Image source={{ uri: itemData.item.url }} style={styles.image} />
                            </View>
                        </View>
                    )
                }}
                onScroll={handlescroll}
                keyExtractor={(item) => item.id}
            />

            {/* sharecontainer */}

            <View style={styles.iconContainer}>
                <View style={styles.iconBackgroundshare}>
                    <Feather name="share-2" size={24} color="#181818" />
                </View>
            </View>


            {/* wishlist container */}
            <View style={styles.iconContainer}>
                <View style={styles.iconBackground}>
                    <Ionicons name="heart-outline" size={28} color="#181818" />
                </View>
            </View>

            {/* similar products */}

            {/* text container */}
            <View style={styles.iconContainertext}>
                <View style={styles.iconBackgroundtext}>
                    <MaterialCommunityIcons name="cards-outline" size={28} color="#181818" style={{ marginHorizontal: 4 }} />
                    <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 14, marginHorizontal: 4 }}>View Similar Items</Text>
                </View>
            </View>

            {/* dotted container goes here */}
            <View style={styles.dottericoncontainer}>
                {imageuels.map((data, index) => (
                    <View style={{ marginHorizontal: 4 }} key={data.id}>
                        {activeindex === index ? (<Octicons name='dot-fill' color={'#ff4500'} size={16} />) : (<Octicons name='dot' color={'grey'} size={16} />)}
                    </View>
                ))}
            </View>

        </View>
    )
}

export default Productsimageslider;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderBottomColor: 'grey',
        borderBottomWidth: 0.75
    },
    subconatiner: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#F0F8FF',
        width: windowWidth
    },
    image: {
        height: 197,
        width: '100%',
        resizeMode: 'contain'
    },
    dottericoncontainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 1
    },
    iconContainer: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    iconBackground: {
        bottom: 6,
        right: 12,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: 6,
        borderRadius: 100,
    },
    iconBackgroundshare: {
        bottom: 60,
        right: 12,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        padding: 8,
        borderRadius: 100,
    },
    iconContainertext: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    iconBackgroundtext: {
        padding: 8,
        top: 220,
        left: 10,
        borderRadius: 22,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: 'white'
    }

})