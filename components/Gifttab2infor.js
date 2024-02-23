import React from "react";
import controls from "./Imports";
const Gifttab2infor = () => {
    return (
        <>
            <controls.View style={styles.container}>
                <controls.View><controls.Text style={styles.headingtext}>HOW TO USE A GIFT CARD?</controls.Text></controls.View>
                <controls.View style={styles.chaircontainer}>
                    <controls.FontAwesome5 name='chair' color={'#5B5B5B'} size={32} />
                    <controls.Text style={styles.dicriptext}>Select an item you want to buy from our catalog of 1Mn+ products</controls.Text>
                </controls.View>
                <controls.View style={styles.giftcontainer}>
                    <controls.AntDesign name='gift' color={'#5B5B5B'} size={32} />
                    <controls.Text style={styles.dicriptext}>Select Pepperfry Gift Card as the payment option on Checkout page</controls.Text>
                </controls.View>
            </controls.View>
            <controls.View style={styles.sidetextcontainer}>
                <controls.Text style={styles.sidetext}>Check out our <controls.Text style={styles.sidelinktext} onPress={() => { controls.Linking.openURL('https://www.pepperfry.com/customer/needhelp/faq') }}>FAQs</controls.Text> for more</controls.Text>
            </controls.View>
        </>
    )
}
export default Gifttab2infor;
const styles = controls.StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    chaircontainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20
    },
    giftcontainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20
    },
    dicriptext: {
        maxWidth: 240,
        textAlign: 'center',
        color: 'black',
        fontSize: 16,
        marginTop: 8
    },
    sidetextcontainer: {
        flex: 1,
        maxWidth: 320,
        marginTop: 15,
        marginBottom: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    sidetext: {
        color: 'black',
        fontSize: 14,
        fontWeight: '600'
    },
    sidelinktext: {
        color: '#ff4500'
    },
    headingtext: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 30
    }
})