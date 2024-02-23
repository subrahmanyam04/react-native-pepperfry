import React, { useEffect, useState } from "react";
import { windowWidth } from "../Util/Dimensions";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Productsoverlaycomponent from "./Productsoverlaycomponent";
import controls from "./Imports";
const Productsimageslider = () => {
    const [activeindex, setactiveindex] = useState(0)
    const handlescroll = (event) => {
        const scrollposition = event.nativeEvent.contentOffset.x;
        const index = Math.round(scrollposition / windowWidth);
        setactiveindex(index)
    }
    const route = controls.useRoute();
    const [receivedimges,setimges]=useState([])
    useEffect(() => { retrieveData(); }, [])
    const retrieveData = async () => {
        try {
            const storedDataString = await AsyncStorage.getItem('aboutcarddata');
            if (storedDataString !== null) {
                const storedData = JSON.parse(storedDataString);
                setimges(storedData[0].imgesurl)
            } 
        } catch (error) {
            console.error('Error retrieving data:', error);
        } };
    return (
        <controls.View style={styles.container}>
            <controls.View style={{ flex: 1, flexDirection: 'column', marginVertical: 8, marginHorizontal: 8 }}>
                <controls.Text style={{ color: '#343534', fontWeight: '600', fontSize: 16 }}>Elegant {route.params.screens} in Grey Colour.</controls.Text>
                <controls.Text style={{ color: '#ff4500', fontWeight: '500', fontSize: 16, marginVertical: 2 }}>By The Alankarr.</controls.Text>
                <controls.Text>
                    <controls.Ionicons name="eye-outline" size={14} color="#181818" />
                    <controls.Text style={{ color: '#484a49', fontSize: 12, fontWeight: '500' }}> 33 People are Viewing this Product Right Now</controls.Text>
                </controls.Text>
            </controls.View>
            <controls.FlatList data={receivedimges} horizontal={true} pagingEnabled={true} alwaysBounceHorizontal={false} bounces={false} showsHorizontalScrollIndicator={false}
                renderItem={(itemData) => {
                    return (
                        <>
                        <controls.View style={styles.subconatiner} key={itemData.item.id}>
                            <controls.View><controls.Image source={{ uri: itemData.item.imgurl }} style={styles.image} /></controls.View>
                        </controls.View>
                        {controls.Platform.OS === "ios" ? <Productsoverlaycomponent /> : ""}
                        </>
                    )
                }}
                onScroll={handlescroll} keyExtractor={(item) => item.imgurl}
            />
            {controls.Platform.OS === "android" ?  <Productsoverlaycomponent/> : "" }
            <controls.View style={styles.dottericoncontainer}>
                {receivedimges && receivedimges.map((data, index) => (
                    <controls.View style={{ marginHorizontal: 4 }} key={data.imgurl}>
                        {activeindex === index ? (<controls.Octicons name='dot-fill' color={'#ff4500'} size={16} />) : (<controls.Octicons name='dot' color={'grey'} size={16} />)}
                    </controls.View>
                ))}
            </controls.View>
        </controls.View>
    )
}
export default Productsimageslider;
const styles = controls.StyleSheet.create({
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