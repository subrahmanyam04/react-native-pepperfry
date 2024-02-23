import React from "react";
import controls from "./Imports";
const Homedbcardslider2 = () => {
    const images = [
        { id: 1, imgrul1: 'https://ii1.pepperfry.com/assets/c3c9be57-b28f-4c50-bbc4-0705596ebf72.jpg', title1: 'Queen Size Beds', imgrul2: 'https://ii1.pepperfry.com/assets/cea8b53d-502d-41d3-9298-db27c75f0079.jpg', title2: 'Cushion Covers', },
        { id: 2, imgrul1: 'https://ii1.pepperfry.com/assets/43aff034-e50c-4ab1-8475-940d4f9c27cb.jpg', title1: 'Shelf Floor Lamps', imgrul2: 'https://ii1.pepperfry.com/assets/ed2377a8-caf5-44a7-b6b3-ab9802ff4347.jpg', title2: 'Staff Collection', },
        { id: 3, imgrul1: 'https://ii1.pepperfry.com/assets/44ce6be6-9eab-499c-ab5b-a0c2dc119e71.jpg', title1: 'Grid Mattress', imgrul2: 'https://ii1.pepperfry.com/assets/ac096791-49d1-4862-a903-a2901920daf3.jpg', title2: 'Table Vases', }
    ]
    return (
        <controls.View style={styles.container}>
            <controls.Text style={styles.headingtext}>Follow Home Interior Trends</controls.Text>
            <controls.FlatList data={images} bounces={false} alwaysBounceHorizontal={false}
                renderItem={(itemData) => {
                    return (
                        <controls.View style={styles.seccontainer}>
                            <controls.View>
                                <controls.Image source={{ uri: itemData.item.imgrul1 }} style={styles.image} />
                                <controls.Text style={styles.dbtext}>{itemData.item.title1}</controls.Text>
                                <controls.Text style={styles.subdbtext}>1500+ Options,Starting at ₹144</controls.Text>
                            </controls.View>
                            <controls.View style={styles.verfic}>
                                <controls.Image source={{ uri: itemData.item.imgrul2 }} style={styles.image} />
                                <controls.Text style={styles.dbtext}>{itemData.item.title2}</controls.Text>
                                <controls.Text style={styles.subdbtext}>1500+ Options,Starting at ₹144</controls.Text>
                            </controls.View>
                        </controls.View>
                    )
                }} keyExtractor={(item) => item.id} horizontal={true} showsHorizontalScrollIndicator={false}
            />
        </controls.View>
    )
}

export default Homedbcardslider2;

const styles = controls.StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 2,
        marginVertical: 10
    },
    seccontainer: {
        flex: 1,
        flexDirection: 'column',
    },
    image: {
        width: 240,
        height: 260,
        margin: 2,
        borderRadius: 2,
        resizeMode: 'contain'
    },
    verfic: {
        marginTop: 10,
    },
    dbtext: {
        color: '#333333',
        fontWeight: 'bold',
        fontSize: 16,
        marginHorizontal: 2
    },
    subdbtext: {
        color: '#848484',
        fontWeight: '500',
        marginHorizontal: 2
    },
    headingtext:{
        color:'#8b4513',
        fontWeight:'bold',
        fontSize: 18,
        marginTop:25,
        marginBottom:10
    }
})