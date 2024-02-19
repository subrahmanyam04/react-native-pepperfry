import React, { useEffect, useRef, useState } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { windowWidth } from "../Util/Dimensions";

const Aboutinstagram = () => {

    const [activeindex, setactiveindex] = useState(0)
    const flatListRef = useRef();
    const sliderdata = [
        {
            id: 1,
            url: 'https://www.pepperfry.ltd/wp-content/uploads/2023/04/slide3.jpg',
            lettericon: 'A',
            username: 'aparna_pb',
            userid: '@plantastic_sanni'

        },
        {
            id: 2,
            url: 'https://www.pepperfry.ltd/wp-content/uploads/2023/04/slide1.jpg',
            lettericon: 'H',
            username: 'houz_la_kiko',
            userid: '@houz_la_kiko'

        },
        {
            id: 3,
            url: 'https://www.pepperfry.ltd/wp-content/uploads/2023/04/slide4.jpg',
            lettericon: 'M',
            username: 'mycradleofdreams',
            userid: '@mycradleofdreams'

        },
        {
            id: 4,
            url: 'https://www.pepperfry.ltd/wp-content/uploads/2023/04/slide2.jpg',
            lettericon: 'P',
            username: 'plantastic_sanni',
            userid: '@plantastic_sanni'

        },
    ]


    const marginHorizontal = 22
    const screenWidth = windowWidth - 2 * marginHorizontal
    //  console.log('i am window',windowWidth)
    const handlescroll = (event) => {
        const scrollposition = event.nativeEvent.contentOffset.x;
        // console.log('i am positon',scrollposition)
        //here the at the scroll postion will be window length 
        //for eample 1.342 in then scoll it will be 342+342
        const index = Math.round(scrollposition / screenWidth);
        //here the at the index will be sroll/original window lenght means 
        //for eample 1.342/342 in then scoll it will be 342+342 / 342
        // console.log('i am index',index)
        setactiveindex(index)
    }

    // autoplay 

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (activeindex === sliderdata.length - 1) {
                flatListRef.current.scrollToIndex({
                    index: 0,
                    animated: false
                });
            } else {
                flatListRef.current.scrollToIndex({
                    index: activeindex + 1,
                    animated: true
                });
            }
        }, 2000);

        // Clear the interval when the component is unmounted
        return () => clearInterval(intervalId);
    }, [activeindex]);




    return (
        <View style={styles.container}>
            <View style={styles.innercontainer}>
                <View style={styles.headingtextcontainer}>
                    <Text style={styles.headingtext}>
                        COMMUNITY
                    </Text>
                </View>
                <FlatList
                    data={sliderdata}
                    horizontal={true}
                    pagingEnabled={true}
                    bounces={false}
                    alwaysBounceHorizontal={false}
                    showsHorizontalScrollIndicator={false}
                    ref={flatListRef}
                    // getItemLayout={getItemLayout}
                    renderItem={(itemData) => {
                        return (
                            <View style={styles.subconatiner} key={itemData.item.id}>

                                <View>
                                    <Image source={{ uri: itemData.item.url }} style={styles.image} />
                                </View>

                                <View style={styles.lettercontainer}>
                                    <Text style={styles.lettericon}>{itemData.item.lettericon}</Text>
                                </View>

                                <View style={styles.useridcontainer}>
                                    <Text style={styles.userid}>{itemData.item.username}</Text>
                                </View>

                                <View>
                                    <Text style={styles.userlink}>{itemData.item.userid}</Text>
                                </View>

                                <View style={styles.iconcontainer}>
                                    <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png' }} style={{ height: 45, width: 28, resizeMode: 'contain' }} />

                                </View>


                            </View>
                        )
                    }}
                    onScroll={handlescroll}
                    keyExtractor={(item) => item.id}
                />


            </View>
        </View>
    )
}

export default Aboutinstagram;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 30
    },
    innercontainer: {
        flex: 1,
        marginHorizontal: 22
    },
    subconatiner: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#F0F8FF',
        width: windowWidth - 44
    },
    flatcontainer: {
        flex: 1,
        flexDirection: 'row'
    },
    image: {
        height: 185,
        width: '100%',
        resizeMode: 'contain'
    },
    lettercontainer: {
        backgroundColor: '#FF2800',
        borderRadius: 20,
        height: 40,
        width: 40,
        bottom: 20,
        left: '45%',
        right: '45%',
        alignItems: 'center'
    },
    lettericon: {
        color: 'white',
        fontWeight: '500',
        marginTop: 4,
        fontSize: 22
    },
    useridcontainer: {
        marginTop: 1
    },
    userid: {
        color: 'black',
        fontWeight: '500',
        fontSize: 18,
        textAlign: 'center'
    },
    userlink: {
        color: 'black',
        fontSize: 14,
        // fontWeight:'400',
        textAlign: 'center',
        marginVertical: 4
    },
    iconcontainer: {
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '4%'
    },
    headingtext:{
        color:'black',
        fontSize:26,
        fontWeight:'900',
        textAlign:'center'
    },
    headingtextcontainer:{
        marginBottom:16,
        marginTop:8
    }
})