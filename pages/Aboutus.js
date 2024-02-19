import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native"

import Aboutuslayout from "../components/Aboutuslayout";

const Aboutus = () => {
    return(
        <>
        <SafeAreaView>
        <View style={styles.topBorder}/>
        <ScrollView bounces={false} alwaysBounceHorizontal={false} alwaysBounceVertical={false} style={styles.scrollbackground}>

        <Aboutuslayout/>

        </ScrollView>
        </SafeAreaView>
        </>
    )
}

export default Aboutus;

const styles =  StyleSheet.create({
    scrollbackground:{
        backgroundColor:'white'
    },
    topBorder: {
        borderTopWidth: 1,
        borderTopColor: 'lightgrey',
    },
})