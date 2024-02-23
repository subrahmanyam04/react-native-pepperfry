import React from "react";
import controls from "./Imports";
const Homedbcardslider = () => {
    const images = [
        { id:1, imgrul1: 'https://ii1.pepperfry.com/media/wysiwyg/banners/Furniture_LogoIcon_2x_0307.jpg', title1: 'Furniture', imgrul2: 'https://ii1.pepperfry.com/media/wysiwyg/banners/SofaSeating_LogoIcon_2x_2906.jpg', title2:'Sofa & Seating', },
        { id:2, imgrul1: 'https://ii1.pepperfry.com/media/wysiwyg/banners/mattressesappliances_13042023.jpg', title1: 'Mattresses', imgrul2: 'https://ii1.pepperfry.com/media/wysiwyg/banners/home_decorappliances_13042023.jpg', title2:'Home Decor', },
        { id:3, imgrul1: 'https://ii1.pepperfry.com/media/wysiwyg/banners/furnishingsappliances_13042023.jpg', title1: 'Furnishings', imgrul2: 'https://ii1.pepperfry.com/media/wysiwyg/banners/kitchen_and_diningappliances_13042023.jpg', title2:'Kitchen & Dining', },
        { id:4, imgrul1: 'https://ii1.pepperfry.com/media/wysiwyg/banners/lamps_and_lightingappliances_13042023.jpg', title1: 'Lamps & Lighting', imgrul2: 'https://ii1.pepperfry.com/media/wysiwyg/banners/utility_13012023.jpg', title2:'Home Utility', },
        { id:5, imgrul1: 'https://ii1.pepperfry.com/media/wysiwyg/banners/appliances_13042023.jpg', title1: 'Appliances', imgrul2: 'https://ii1.pepperfry.com/media/wysiwyg/banners/modularappliances_13042023.jpg', title2:'Modular',},
    ]
    return (
        <controls.View style={styles.container}>
            <controls.FlatList data={images} bounces={false} alwaysBounceHorizontal={false}
                renderItem={(itemData) => {
                    return (
                        <controls.View style={styles.seccontainer}>
                            <controls.View>
                                <controls.Image source={{ uri: itemData.item.imgrul1 }} style={styles.image} />
                                <controls.Text style={styles.dbtext}>{itemData.item.title1}</controls.Text>
                            </controls.View>
                            <controls.View style={styles.verfic}>
                                <controls.Image source={{ uri: itemData.item.imgrul2 }} style={styles.image}/>
                                <controls.Text style={styles.dbtext}>{itemData.item.title2}</controls.Text>
                            </controls.View>
                        </controls.View>
                    )
                }}
                keyExtractor={(item) => item.id}  horizontal={true} showsHorizontalScrollIndicator={false} />
        </controls.View>
    )
}
export default Homedbcardslider;
const styles = controls.StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal:2,
        marginVertical:10
    },
    seccontainer: {
        flex: 1,
        flexDirection: 'column',
    },
    image: {
        width: 95,
        height: 90,
        margin:5,
        borderRadius:4,
        resizeMode:'contain'   
    },
    verfic:{
       marginTop:10,
    },
    dbtext:{
        textAlign:'center',
        color:'#333333',
        fontWeight:'bold',
        fontSize:12
    }
})