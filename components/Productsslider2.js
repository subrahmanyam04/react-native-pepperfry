import React from "react";
import controls from "./Imports";
const Productsslider2 = () => {
    const sliderdata = [
        { id: 1, imageuri: "https://ii1.pepperfry.com/media/catalog/product/c/a/236x260/calvin---hobbes-silk-cushion-cover-by-stybuzz-calvin---hobbes-silk-cushion-cover-by-stybuzz-yahuyb.jpg", title: "", },
        { id: 2, imageuri: "https://ii1.pepperfry.com/media/catalog/product/t/a/236x260/taro-bed-side-table-in-walnut-finish-by-mintwud-taro-bed-side-table-in-walnut-finish-by-mintwud-evjomx.jpg", title: "", },
        { id: 3, imageuri: "https://ii1.pepperfry.com/media/catalog/product/s/t/236x260/steel-ironing-board-with-iron-holder-in-multicolour--l--54--w--14-5--h--36-inches--by-peng-essential-8a3iea.jpg", title: "", },
        { id: 4, imageuri: "https://ii1.pepperfry.com/media/catalog/product/s/t/236x260/steel-ironing-board-with-iron-holder-in-multicolour--l--54--w--14-5--h--36-inches--by-peng-essential-hc2i7m.jpg", title: "", },
        { id: 5, imageuri: "https://ii1.pepperfry.com/media/catalog/product/s/t/236x260/steel-ironing-board-with-iron-holder-in-multicolour--l--57-8--w--17--h--36-inches--by-peng-essential-56ytky.jpg", title: "", },
        { id: 6, imageuri: "https://ii1.pepperfry.com/media/catalog/product/a/r/236x260/art-of-jodhpur-multicolour-solid-wood-13---width:-13-x-4-5-inch-wall-clock-art-of-jodhpur-multicolou-qewpd2.jpg", title: "", },
    ]
    return (
        <>
        <controls.View style={styles.container}>
            <controls.View style={{ marginBottom: 16 }}>
                <controls.Text style={{ color: 'brown', fontWeight: '900', fontSize: 20 }}>See What Other Customers Viewed</controls.Text>
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
                                <controls.Entypo name="star" size={16} color="rgb(255, 169, 134)" />
                                <controls.Entypo name="star" size={16} color="rgb(255, 169, 134)" />
                                <controls.Entypo name="star" size={16} color="rgb(255, 169, 134)" />
                                <controls.Entypo name="star" size={16} color="rgb(255, 169, 134)" />
                                <controls.Entypo name="star" size={16} color="#CCCCCC" />
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
export default Productsslider2;
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
