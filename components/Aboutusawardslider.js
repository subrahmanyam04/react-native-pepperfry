import React, { useRef, useState } from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from '@expo/vector-icons'
import { windowWidth } from "../Util/Dimensions";

const Aboutusawardslider = () => {
    const flatListRef = useRef();
    const [currentIndex, setCurrentIndex] = useState(0);
    const icondata = [
        {
            id: 1,
            url: 'https://www.pepperfry.ltd/wp-content/uploads/2023/02/award_logo3-1.png',
            year: '2022',
            infor: 'Most Resilient Supply Chain of the year and Supply Chain Strategy & Design Best in Network Planning Optimization of the year'
        },
        {
            id: 2,
            url: 'https://www.pepperfry.ltd/wp-content/uploads/2023/02/award_logo2-1.png',
            year: '2022',
            infor: 'Express Logistics & Supply Chain Leadership Awards – Customer Intimacy & Service Excellence Company of the year'
        },
        {
            id: 3,
            url: 'https://www.pepperfry.ltd/wp-content/uploads/2023/02/award_logo1-1.png',
            year: '2022',
            infor: 'Home Trendsetter Award – Architecture Reconnect Summit'
        },
        {
            id: 4,
            url: 'https://www.pepperfry.ltd/wp-content/uploads/2023/02/award_logo1-1.png',
            year: '2014',
            infor: 'Home Trendsetter Award – Architecture Reconnect Summit'
        },
        {
            id: 5,
            url: 'https://www.pepperfry.ltd/wp-content/uploads/2023/02/award_logo1-1.png',
            year: '2011',
            infor: 'Home Trendsetter Award – Architecture Reconnect Summit'
        },

    ]


    const handleNext = () => {
        if (currentIndex < icondata.length - 1) {
            setCurrentIndex(currentIndex + 1);
            flatListRef.current.scrollToIndex({
                index: currentIndex + 1,
                animated: true,
            });
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
            flatListRef.current.scrollToIndex({
                index: currentIndex - 1,
                animated: true,
            });
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.innercontainer}>
                <View style={styles.headingtextcontainer}>
                    <Text style={styles.headingtext}>
                        AWARDS AND RECOGNITION
                    </Text>
                </View>
                <FlatList
                    data={icondata}
                    ref={flatListRef}
                    horizontal={true}
                    pagingEnabled={true}
                    alwaysBounceHorizontal={false}
                    bounces={false}
                    showsHorizontalScrollIndicator={false}
                    renderItem={(itemData) => {
                        return (
                            <View style={styles.subcontainer} key={itemData.item.id}>

                                <View style={styles.iconimagecontainer}>
                                    <Image source={{ uri: itemData.item.url }} style={styles.image} />
                                </View>

                                <View>
                                    <Text style={styles.yeartext}>{itemData.item.year}</Text>
                                </View>

                                <View>
                                    <Text style={styles.infortext}>
                                        {itemData.item.infor}
                                    </Text>
                                </View>

                            </View>

                        )
                    }}
                    keyExtractor={(item) => item.id}
                />

                <View style={styles.navigationButtons}>

                    <TouchableOpacity onPress={handlePrev} activeOpacity={1} >

                        <AntDesign name='left' color={'grey'} size={28} />

                    </TouchableOpacity>

                    <TouchableOpacity onPress={handleNext} activeOpacity={1}>

                        <AntDesign name='right' color={'grey'} size={28} />

                    </TouchableOpacity>
                </View>


            </View>

        </View>
    )
}

export default Aboutusawardslider;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    innercontainer: {
        flex: 1,
        marginHorizontal: 22
    },
    subcontainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 80,
        marginBottom: 50,
        width: windowWidth - 44
    },
    navigationButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        bottom: 180,
    },
    iconimagecontainer: {
        backgroundColor: 'grey',
        width: 108,
        height: 108,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 60
    },
    image: {
        width: 60,
        height: 60,
        resizeMode: 'contain'
    },
    yeartext: {
        color: 'black',
        fontSize: 24,
        fontWeight: '700',
        marginVertical: 6
    },
    infortext: {
        color: 'black',
        fontSize: 18,
        fontWeight: '300',
        textAlign: 'center',
        lineHeight: 28,
        paddingHorizontal: 28,
        marginBottom: 24
    },
    headingtext: {
        color: 'black',
        fontWeight: '900',
        fontSize: 28,
        lineHeight:42,
        textAlign: 'center'
    },
    headingtextcontainer: {
        marginTop: 42,
        marginBottom: 24
    }

})