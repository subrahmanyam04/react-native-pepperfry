import React from "react";
import controls from "./Imports";

const Tabsubnavbar = () => {
    return (
        <controls.View style={styles.container}>
            <controls.View style={styles.innercontainer}>
                <controls.View style={styles.rowcontainer}>
                    <controls.View><controls.Text style={styles.fontstyle}>Categories <controls.Ionicons name='chevron-up' color={'black'} size={14} /></controls.Text></controls.View>
                </controls.View>
                <controls.View style={styles.rowcontainer}>
                    <controls.Text style={styles.fontstyle}><controls.MaterialCommunityIcons name='arrow-up-down' color={'black'} size={14} /> Sort By</controls.Text><controls.Text style={styles.subtext}>Relevance</controls.Text>
                </controls.View>
                <controls.View style={styles.rowcontainer}>
                    <controls.Text style={styles.fontstyle}><controls.Entypo name='sound-mix' color={'black'} size={14} /> Filter</controls.Text><controls.Text style={styles.subtext}>0 Filters Applied</controls.Text>
                </controls.View>
            </controls.View>
        </controls.View>
    )
}
export default Tabsubnavbar;
const styles = controls.StyleSheet.create({
    container: {
        flex: 1
    },
    innercontainer: {
        flex: 1,
        flexDirection: 'row',
        borderBottomColor: 'lightgrey',
        borderBottomWidth: 1
    },
    rowcontainer: {
        flex: 1,
        flexDirection: 'column',
        borderRightColor: 'lightgrey',
        borderRightWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 4,
        padding: 6,
    },
    fontstyle: {
        fontWeight: '500',
        color: '#363636',
        fontSize: 14
    },
    subtext: {
        fontSize: 13,
        fontWeight: '400',
        color: '#5C5C5C'
    }
})