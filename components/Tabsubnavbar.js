import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons, MaterialCommunityIcons, Entypo } from '@expo/vector-icons'

const Tabsubnavbar = () => {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.innercontainer}>

                    <View style={styles.rowcontainer}>
                        <View>
                            <Text style={styles.fontstyle}>
                                Categories <Ionicons name='chevron-up' color={'black'} size={14} />
                            </Text>
                        </View>


                    </View>

                    <View style={styles.rowcontainer}>
                        <Text style={styles.fontstyle}>
                            <MaterialCommunityIcons name='arrow-up-down' color={'black'} size={14} /> Sort By
                        </Text>
                        <Text style={styles.subtext}>Relevance</Text>
                    </View>

                    <View style={styles.rowcontainer}>
                        <Text style={styles.fontstyle}>
                            <Entypo name='sound-mix' color={'black'} size={14} /> Filter
                        </Text>
                        <Text style={styles.subtext}>0 Filters Applied</Text>
                    </View>

                </View>



            </View>


        </>

    )
}

export default Tabsubnavbar;

const styles = StyleSheet.create({
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