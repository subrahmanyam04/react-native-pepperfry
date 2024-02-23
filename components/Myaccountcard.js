import React from "react";
import controls from "./Imports";
const Myaccountcard = () => {
    const carddata = [
        { id: 1, icontype1: 'Feather', icon1: 'shopping-cart', title1: 'My Orders', subtitle1: 'Track your order,check details and more', icon2: 'wallet-outline', icontype2: 'Ionicons', title2: 'My Wallet', subtitle2: '5,000 Credits Expires Today', },
        { id: 2, icon1: 'star', icontype1: 'Feather', title1: 'My Reviews', subtitle1: 'Share your experience with us', icon2: 'heart', title2: 'Wishlist', icontype2: 'Feather', subtitle2: 'Your favourites,all in one place', },
        { id: 3, icontype1: 'Ionicons', icon1: 'timer-outline', title1: 'Recently Viewed', subtitle1: 'View your browsing history', icontype2: 'Feather', icon2: 'send', title2: 'Address Book', subtitle2: 'Save or change your addresses', },
        { id: 4, icontype1: 'Feather', icon1: 'key', title1: 'Two Step Verfication', subtitle1: 'Additional layer of security for your account', icontype2: 'AntDesign', icon2: 'customerservice', title2: 'Need Help', subtitle2: 'Chat with our customer support team', }
    ]
    return (
        <controls.View style={styles.container}>
            {carddata.map((data) => (
                <controls.View style={styles.subconatiner} key={data.id}>
                    <controls.View style={styles.firstcolcontainer}>
                        <controls.View style={styles.innerconatiner}>
                            <controls.View style={{ alignItems: 'center' }}>
                                {data.icontype1 === 'Ionicons' ? (<controls.Ionicons name={data.icon1} color={'#484547'} size={40} />) : data.icontype1 === 'Feather' ? (<controls.Feather name={data.icon1} color={'#484547'} size={40} />) : (<controls.AntDesign name={data.icon1} color={'#484547'} size={40} />)}
                            </controls.View>
                            <controls.View><controls.Text style={styles.titletext}>{data.title1}</controls.Text></controls.View>
                            <controls.View><controls.Text style={styles.subtext}>{data.subtitle1}</controls.Text></controls.View>
                        </controls.View>
                    </controls.View>
                    <controls.View style={[styles.firstcolcontainer, { marginLeft: 2 }]}>
                        <controls.View style={styles.innerconatiner}>
                            <controls.View style={{ alignItems: 'center' }}>
                                {data.icontype2 === 'Ionicons' ? (<controls.Ionicons name={data.icon2} color={'#484547'} size={40} />) : data.icontype2 === 'Feather' ? (<controls.Feather name={data.icon2} color={'#484547'} size={40} />) : (<controls.AntDesign name={data.icon2} color={'#484547'} size={40} />)}
                            </controls.View>
                            <controls.View><controls.Text style={styles.titletext}>{data.title2}</controls.Text></controls.View>
                            <controls.View><controls.Text style={styles.subtext}>{data.subtitle2}</controls.Text></controls.View>
                        </controls.View>
                    </controls.View>
                </controls.View>
            ))}
        </controls.View>
    )
}
export default Myaccountcard
const styles = controls.StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 2,
        marginTop: 6,
    },
    subconatiner: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 3
    },
    firstcolcontainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        flexDirection: 'column',
        backgroundColor: 'white',
        width: '50%',
        ...controls.Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 4,
            },
            android: {
                elevation: 3,
            },
        }),
    },
    innerconatiner: {
        marginVertical: 30
    },
    titletext: {
        color: 'black',
        marginVertical: 4,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold'
    },
    subtext: {
        color: '#5B5B5B',
        fontSize: 16,
        textAlign: 'center',
        maxWidth: 180
    }
})