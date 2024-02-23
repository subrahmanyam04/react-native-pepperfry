import controls from "./Imports";

export const styles = controls.StyleSheet.create({
    mainconatiner: {
        borderBottomColor: 'lightgrey',
        borderBottomWidth: 1
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    subcontainer: {
        flexDirection: 'row',
        marginTop: 12,
        marginBottom: 12
    },
    image: {
        height: 30,
        width: 35,
        resizeMode: 'contain',
        marginTop: 6,
        marginHorizontal: 10
    },
    headingtext: {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'black'
    },
    subtext: {
        color: 'grey',
        fontSize: 13,
        fontWeight: '500',
    },
    dropdowmpannelcontainer: {
        backgroundColor: '#EAEFF2',
    },
    pannelinnercontainer: {
        flex: 1,
        marginVertical: 8
    },
    innercontainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    innercontainerheadtext: {
        fontWeight: '500',
        color: '#3B3B3B',
        fontSize: 16,
        marginHorizontal: 12
    },

    Activeheadertext: {
        fontWeight: '500',
        color: 'red',
        fontSize: 16,
        marginHorizontal: 12
    },
    nestedmaincontainer: {
        flex: 1,
        backgroundColor: '#D9E4EC',
    },
    nestedcontainer: {
        flex: 1,
        flexDirection: 'column',
        marginHorizontal: 30
    },
    nestedtext: {
        color: 'black',
        marginVertical: 6,
    },
    Activetextcolor: {
        color: 'red',
        marginVertical: 6,
    }
});