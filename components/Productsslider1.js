import React from "react";
import { Entypo } from '@expo/vector-icons'
import controls from "./Imports";

const Productsslider1 = () => {
    const sliderdata = [
        { id: 1, imageuri: "https://ii1.pepperfry.com/media/catalog/product/q/t/236x260/qt-love-seater-sofa-in-brwon-colour-qt-love-seater-sofa-in-brwon-colour-nchyql.jpg", title: "", },
        { id: 2, imageuri: "https://ii1.pepperfry.com/media/catalog/product/q/t/236x260/qt-love-seater-teddy-fabric--sofa-in-light-pink--colour-qt-love-seater-teddy-fabric--sofa-in-light-p-1ztqe8.jpg", title: "", },
        { id: 3, imageuri: "https://ii1.pepperfry.com/media/catalog/product/q/t/236x260/qt-love-seater-teddy-fabric--sofa-in-grey--colour-qt-love-seater-teddy-fabric--sofa-in-grey--colour-tqxku2.jpg", title: "", },
        { id: 4, imageuri: "https://ii1.pepperfry.com/media/catalog/product/q/t/236x260/qt-love-seater-teddy-fabric--sofa-in-royal-green--colour-qt-love-seater-teddy-fabric--sofa-in-royal--sc8my5.jpg", title: "", },
        { id: 5, imageuri: "https://ii1.pepperfry.com/media/catalog/product/q/t/236x260/qt-love-seater-teddy-fabric--sofa-in-off-white--colour-qt-love-seater-teddy-fabric--sofa-in-off-whit-1dti1g.jpg", title: "", },
        { id: 6, imageuri: "https://ii1.pepperfry.com/media/catalog/product/b/e/236x260/belize-fabric-3-seater-sofa-in-mocha-brown-colour-belize-fabric-3-seater-sofa-in-mocha-brown-colour-sbfyp4.jpg", title: "", },
    ]
    return (
        <>
        <controls.View style={styles.container}>
            <controls.View style={{ marginBottom: 16 }}>
                <controls.Text style={{ color: 'brown', fontWeight: '900', fontSize: 20 }}>Check Out More Modern Sofa Sets</controls.Text>
            </controls.View>
            <controls.FlatList data={sliderdata}
                renderItem={(itemData) => {
                    return (
                        <controls.View style={styles.container2}>
                            <controls.View>
                                <controls.Image source={{ uri: itemData.item.imageuri }} style={styles.image} />
                                <controls.View style={styles.iconContainer}>
                                    <controls.View style={styles.iconBackground}>
                                        <controls.Ionicons name="heart-outline" size={21} color="#696969" />
                                    </controls.View>
                                </controls.View>
                            </controls.View>
                            <controls.View>
                                <controls.Text style={[styles.text1, { marginTop: 6 }]} numberOfLines={1} ellipsizeMode="tail">Solid Brown Mango Wood Chopping Board</controls.Text>
                            </controls.View>
                            <controls.View>
                                <controls.Text style={[styles.text1, { marginVertical: 4 }]} >By Durian</controls.Text>
                            </controls.View>
                            <controls.View style={{ flex: 1, flexDirection: 'row' }}>
                                <Entypo name="star" size={16} color="rgb(255, 169, 134)" />
                                <Entypo name="star" size={16} color="rgb(255, 169, 134)" />
                                <Entypo name="star" size={16} color="rgb(255, 169, 134)" />
                                <Entypo name="star" size={16} color="rgb(255, 169, 134)" />
                                <Entypo name="star" size={16} color="#CCCCCC" />
                                <controls.Text style={{ color: "black", fontSize: 14, fontWeight: '500' }}>{'(106 Sold)'}</controls.Text>
                            </controls.View>
                            <controls.View>
                                <controls.Text style={styles.pricetext}>
                                    <controls.Text style={styles.firstprice}>₹27,390 </controls.Text>
                                    <controls.Text style={styles.secondprice}> ₹499</controls.Text>
                                    <controls.Text style={styles.thirdprice}> 72%</controls.Text>
                                </controls.Text>
                            </controls.View>
                        </controls.View>
                    )
                }}
                keyExtractor={(item) => item.id} horizontal={true} showsHorizontalScrollIndicator={false}
            />
        </controls.View>
        <controls.View style={{ borderBottomColor: "#dbdcdc", borderBottomWidth: 8,marginBottom: 16,marginTop:16 }} />
        </>
    )
}
export default Productsslider1;
const styles = controls.StyleSheet.create({
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
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: 5,
        borderRadius: 25,
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
