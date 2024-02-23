import Giftcardtabs from "../components/Giftcardtabs";
import React from 'react';
import controls from "../components/Imports";

const Giftcard = () => {
    return (
            <controls.View style={styles.container}>    
                <controls.PagesTopborder />
                <controls.SafeAreaView/>
                <Giftcardtabs />
                <controls.SafeAreaView/>
                <controls.PagesBottomborder />    
            </controls.View>   
    )
}

export default Giftcard;
const styles = controls.StyleSheet.create({ container: { flex: 1, }, })

