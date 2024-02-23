import React from "react";
import controls from "./Imports";
const Homeslider3 = () => {
    const sliderdata = [
        { id: 1, imageuri: "https://ii1.pepperfry.com/assets/18bbf728-2080-43cb-b904-a308c9347d52.jpg", title: "", subtitle: "" },
        { id: 2, imageuri: "https://ii2.pepperfry.com/media/catalog/product/h/o/494x544/home-gold-aluminium-showpiece-by-purestory-home-gold-aluminium-showpiece-by-purestory-hf2ylf.jpg", title: "Pepperfry India", subtitle: "Pepperfry store" },
        { id: 3, imageuri: "https://ii3.pepperfry.com/media/catalog/product/s/o/494x544/solid--wood-chopping-board-solid--wood-chopping-board-ptecpy.jpg", title: "Pepperfry India", subtitle: "Pepperfry store" },
        { id: 4, imageuri: "https://ii1.pepperfry.com/media/catalog/product/w/h/494x544/white-iron-table-candle-holder-set-of-1-piece-by-hosley-white-iron-table-candle-holder-set-of-1-piec-eqzu0q.jpg", title: "Pepperfry India", subtitle: "Pepperfry store" },
        { id: 5, imageuri: "https://ii1.pepperfry.com/media/catalog/product/m/u/494x544/multicolor-chenille-abstract-5-x-7-feet-machine-made-carpet-by-braids-multicolor-chenille-abstract-5-w1prgd.jpg", title: "Pepperfry India", subtitle: "Pepperfry store" },
        { id: 6, imageuri: "https://ii1.pepperfry.com/media/catalog/product/w/h/494x544/white-polyester-solid-16x16-inches--set-of-2--cushion-inserts-by-mfd-home-furnishing-white-polyester-kyzklx.jpg", title: "Pepperfry India", subtitle: "Pepperfry store" },
    ]
    return (
        <controls.View style={styles.container}>
            <controls.FlatList data={sliderdata} bounces={false} alwaysBounceHorizontal={false}
                renderItem={(itemData) => {
                    return (
                        <controls.View style={styles.container2}>
                            <controls.Image source={{ uri: itemData.item.imageuri }} style={[ { width: itemData.index === 0 ? 140 : 155,height: 180 },styles.image ]}/>
                            {itemData.index !== 0 && <controls.View style={styles.overlay} />}
                            <controls.Text style={styles.text} numberOfLines={1} ellipsizeMode="tail">{itemData.item.title}</controls.Text>
                            <controls.Text style={styles.subtext} >{itemData.item.subtitle}</controls.Text>
                        </controls.View>
                    )
                }}
                keyExtractor={(item) => item.id} horizontal={true} showsHorizontalScrollIndicator={false}
            />
        </controls.View>
    )
}
export default Homeslider3;
const styles = controls.StyleSheet.create({
    overlay: {
        ...controls.StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.69)', 
        width: 155,
        height: 180,
        top: 2,
        marginRight: 2,
        marginLeft: 2
    },
    container: {
        flex: 1,
        marginTop: 25,
        marginHorizontal: 3
    },
    container2: {
        position: 'relative',
        overflow: 'hidden',
    },
    image: {
        margin: 2,
    },
    text1: {
        marginTop: 6,
        marginHorizontal: 2,
        maxWidth: 150,
        fontSize: 12,
        color: 'black'
    },
    pricetext: {
        margin: 2
    },
    text: {
        position: 'absolute',
        bottom: 80,
        left: 9,
        right: 10,
        color: 'white',
        fontSize: 23,
        fontWeight: 'bold',
    },
    subtext: {
        position: 'absolute',
        bottom: 58, // Adjust as needed
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: "center",
        color: 'white', // Change text color as needed
        fontSize: 14, // Change font size as needed
        fontWeight: 'bold', // Adjust font weight as needed
    },
})
