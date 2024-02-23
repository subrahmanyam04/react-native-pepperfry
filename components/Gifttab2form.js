import React from "react";
import { useState } from 'react';
import Gifttab2infor from "./Gifttab2infor";
import controls from "./Imports";
const Gifttab2form = () => {
    const [number, setNumber] = useState('');
    const [pin, setpin] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const [isFocusedpin, setIsFocusedpin] = useState(false);
    const onChangeNumber = (text) => { setNumber(text); };
    const onChangepin = (text) => { setpin(text); };
    const onFocus = () => { setIsFocused(true); };
    const onFocuspin = () => { setIsFocusedpin(true); };
    const onBlur = () => { setIsFocused(false); };
    const onBlurpin = () => { setIsFocusedpin(false); };
    return (
        <controls.View style={styles.container}>
            <controls.View style={styles.subcontainer}>
                <controls.View style={styles.headingtextcontainer}>
                    <controls.Text style={styles.headingtext}>CHECK CARD BALANCE</controls.Text>
                </controls.View>
                <controls.View style={styles.container2}>
                    <controls.Text style={[styles.placeholder, isFocused || number !== '' ? styles.placeholderFloating : {}]}>Enter Card Number*(16 digit code)</controls.Text>
                    <controls.TextInput
                        style={[styles.input, isFocused ? styles.onfocusinput : {}]}
                        onChangeText={onChangeNumber}
                        value={number}
                        placeholder=""
                        keyboardType="numeric"
                        onFocus={onFocus}
                        onBlur={onBlur}
                        caretHidden={false} 
                        cursorColor='#ff4500'  
                    />
                </controls.View>
                <controls.View style={styles.container2}>
                    <controls.Text style={[styles.placeholder, isFocusedpin || pin !== '' ? styles.placeholderFloating : {}]}>Enter Card PIN*(6 digit code)</controls.Text>
                    <controls.TextInput
                        style={[styles.input, isFocusedpin ? styles.onfocusinput : {}]}
                        onChangeText={onChangepin}
                        value={pin}
                        textContentType="password"
                        placeholder=""
                        keyboardType="numeric"
                        onFocus={onFocuspin}
                        onBlur={onBlurpin}
                        caretHidden={false} 
                        cursorColor='#ff4500'  
                    />
                </controls.View>
                <controls.View style={styles.buttoncontainer}>
                    <controls.TouchableOpacity style={styles.button} onPress={() => { }} activeOpacity={1} >
                        <controls.Text style={styles.buttonText}>Check Card Balance & Validity</controls.Text>
                    </controls.TouchableOpacity>
                </controls.View>
                <controls.View style={styles.horizontalline} />
                 <Gifttab2infor/>
            </controls.View>
        </controls.View>
    )
}
export default Gifttab2form;
const styles = controls.StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 5,
        marginHorizontal: 14,
        backgroundColor: 'white',
        marginTop: 120,
        shadowColor: 'lightgrey',
        shadowOffset: {
            width: 0,
            height: 20,
        },
        shadowOpacity: 0.6,
        shadowRadius: 5,
        elevation: 10, 
    },
    subcontainer: {
        flex: 1,
        flexDirection: 'column',
        marginHorizontal: 15,
        marginVertical: 15
    },
    headingtext: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 17,
        textAlign: 'center'
    },
    headingtextcontainer: {
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        marginTop:5
    },
    container2: {
        marginBottom: 10,
        marginTop: 60
    },
    input: {
        borderBottomWidth: 1,
        borderColor: '#BFBDC1',
    },
    onfocusinput: {
        borderBottomWidth: 2,
        borderColor: '#ff4500',
    },
    placeholder: {
        position: 'absolute',
        bottom:controls.Platform.OS === "ios" ? 2 : 0,
        fontSize: 16,
        color: 'gray',
    },
    placeholderFloating: {
        top: -20,
        fontSize: 18,
        color: 'gray', 
    },
    buttoncontainer: {
        flex: 1,
        marginTop: 60,
    },
    button: {
        borderWidth: 1,
        borderColor: '#ff4500',
        backgroundColor: '#ff4500',
        marginTop: 8,
        padding: 14,
        maxHeight: 100
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18
    },
    horizontalline: {
        borderBottomColor: 'lightgrey', 
        borderBottomWidth: 1,
         marginVertical:40
    },
})