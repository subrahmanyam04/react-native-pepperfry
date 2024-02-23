import React from "react";
import controls from "./Imports";
const Homestatictime = () => {
    return (
        <controls.View style={styles.container}>
            <controls.View style={styles.verfication}>
                <controls.Text style={styles.text1}>Shop What The Fry Deals</controls.Text>
            </controls.View>
            <controls.View style={styles.verfication}>
                <controls.Text style={styles.timertext}><controls.Ionicons name="timer-outline" size={15} color="#D8232A" /> Ending in 14h : 12m : 30s</controls.Text>
            </controls.View>
        </controls.View>
    )
}
export default Homestatictime;
const styles = controls.StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        marginTop: 25,
        marginHorizontal: 1
    },
    verfication: {
        marginHorizontal: 3.5
    },
    text1: {
        fontWeight: 'bold',
        fontSize: 17,
        color: '#8b4513'
    },
    timertext: {
        fontWeight: 'bold',
        fontSize: 14.5,
        color: '#D8232A',
        marginTop: 4.5
    }
})

