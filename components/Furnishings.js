import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import React, { useState } from 'react';
import { AntDesign, MaterialIcons } from '@expo/vector-icons'

const styles = StyleSheet.create({
    mainconatiner: {
        borderBottomColor: 'lightgrey',
        borderBottomWidth: 1
    },
    container: {
        flex: 1,
        // marginTop: 10, 
        backgroundColor: 'white'

    },
    subcontainer: {
        flexDirection: 'row',
        marginTop: 15,
        // marginHorizontal: 10,
        marginBottom: 12
    },
    iconcontainer: {
        marginHorizontal: 2
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
        maxWidth: 315
    },



    // container2.......................................

    dropdowmpannelcontainer: {
        backgroundColor: '#EAEFF2',
        // borderWidth: 1,
        // borderColor: 'black',
    },
    pannelinnercontainer: {
        flex: 1,
        // marginHorizontal: 18,
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

    //    nested containers

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
        // fontSize:14,
    }


});

const Furnishings = () => {
    const [isContainer2Visible, setContainer2Visible] = useState(false);
    const [isnestedcontainer1Visible, setnestedcontainer1Visible] = useState(false);
    const [isnestedcontainer2Visible, setnestedcontainer2Visible] = useState(false);

    // main container   
    const handleContainerClick = () => {
        setContainer2Visible(!isContainer2Visible);
        setnestedcontainer1Visible('');
        setnestedcontainer2Visible('');
    };

    const handlenestedcontainer1Click = () => {
        setnestedcontainer1Visible(!isnestedcontainer1Visible);

    };

    const handlenestedcontainer2Click = () => {
        setnestedcontainer2Visible(!isnestedcontainer2Visible);

    };


  const titles = [
        {
            id:1,
            tilname:'Futons',
            onpressind:'',
            icon:""
        },
        {
            id:2,
            tilname:'Chaise Loungers',
            onpressind:'',
            icon:""
        },
        {
            id:3,
            tilname:'Bean Bags',
            onpressind:'',
            icon:""
        },
        {
            id:4,
            tilname:'Recliners',
            onpressind:'',
            icon:"plus"
        },
        {
            id:5,
            tilname:'Sofa Chairs',
            onpressind:'',
            icon:"plus"
        },
        {
            id:6,
            tilname:'Settees & Benches',
            onpressind:'',
            icon:"plus"
        },
        {
            id:7,
            tilname:'Ottomans',
            onpressind:'',
            icon:""
        },
        {
            id:8,
            tilname:'Chairs',
            onpressind:'',
            icon:"plus"
        },
        {
            id:9,
            tilname:'Gaming Chairs',
            onpressind:'',
            icon:""
        },
        {
            id:10,
            tilname:'Stool & Pouffes',
            onpressind:'',
            icon:"plus"
        },
        {
            id:11,
            tilname:'Shoe Racks',
            onpressind:'',
            icon:"plus"
        },
        {
            id:12,
            tilname:'Center Tables',
            onpressind:'',
            icon:"plus"
        },
        {
            id:13,
            tilname:'Side Tables',
            onpressind:'',
            icon:"plus"
        },
        {
            id:14,
            tilname:'TV & Media Units',
            onpressind:'',
            icon:""
        },
        {
            id:15,
            tilname:'Ceabinets & Sideboards',
            onpressind:'',
            icon:""
        },
        {
            id:16,
            tilname:'Book Shalves',
            onpressind:'',
            icon:""
        },
        {
            id:17,
            tilname:'Book Cases',
            onpressind:'',
            icon:""
        },
        {
            id:18,
            tilname:'Dining Sets',
            onpressind:'',
            icon:"plus"
        },
        {
            id:19,
            tilname:'Dining Chairs',
            onpressind:'',
            icon:""
        },
        {
            id:20,
            tilname:'Dining Tables',
            onpressind:'',
            icon:""
        },
        {
            id:21,
            tilname:'Crockery Units',
            onpressind:'',
            icon:""
        },
        {
            id:22,
            tilname:'Bar Furniture',
            onpressind:'',
            icon:"plus"
        },
        {
            id:23,
            tilname:'Beds',
            onpressind:'',
            icon:"plus"
        },
        {
            id:24,
            tilname:'Besides Tables',
            onpressind:'',
            icon:""
        },
        {
            id:25,
            tilname:'Linen Trunks',
            onpressind:'',
            icon:""
        },
        {
            id:26,
            tilname:'Chest of Drawers',
            onpressind:'',
            icon:""
        },
        {
            id:27,
            tilname:'Dressing Tables',
            onpressind:'',
            icon:"plus"
        }
    ]


    return (
        <>
            <View style={styles.mainconatiner}>

                {/* main containerss withe image and white bacckground */}

                <TouchableOpacity onPress={handleContainerClick} activeOpacity={1}>
                    <View style={styles.container}>

                        <View style={styles.subcontainer}>

                            <View style={styles.imagecontainer}>
                                <Image source={{ uri: 'https://ii1.pepperfry.com/media/wysiwyg/banners/furnishingsappliances_13042023.jpg' }} style={styles.image} />
                            </View>

                            <View>
                                <Text style={styles.headingtext}>Furnishings</Text>
                                <Text style={styles.subtext} numberOfLines={1} ellipsizeMode="tail">Sofas,Sectional Sofas,Sofa Cum Beds, Futons,Chaise Loungers</Text>
                            </View>

                            <View style={styles.iconcontainer}>
                                {isContainer2Visible ? (
                                    <MaterialIcons name='keyboard-arrow-up' color={'#5B5B5B'} size={24} />
                                ) : <MaterialIcons name='keyboard-arrow-down' color={'#5B5B5B'} size={24} />}
                            </View>

                        </View>

                    </View>
                </TouchableOpacity>



                {/* 1 */}
                {/* inner containers ......Sofas.............(Start)which container nested containers */}

                {isContainer2Visible ? (
                    <View style={styles.dropdowmpannelcontainer}>

                        <View style={styles.pannelinnercontainer}>

                            <TouchableOpacity onPress={handlenestedcontainer1Click} activeOpacity={1}>
                                <View style={styles.innercontainer}>

                                    <View>
                                        <Text style={styles.innercontainerheadtext}>Sofas</Text>
                                    </View>



                                    <View style={styles.iconcontainer}>
                                        {isnestedcontainer1Visible ? (
                                            <AntDesign name='minus' color={'#5B5B5B'} size={18} />
                                        ) : <AntDesign name='plus' color={'#5B5B5B'} size={18} />}
                                    </View>

                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                ) : null}

                {/* inner containers ......Sofas.............(Ending)which container nested containers */}


                {/* nested containers here for ................Sofas...........(start) */}

                {isnestedcontainer1Visible ? (
                    <View style={styles.nestedmaincontainer}>
                        <View style={styles.nestedcontainer}>
                            <View>
                                <Text style={styles.nestedtext}>3 Seater Sofas</Text>
                            </View>
                            <View>
                                <Text style={styles.nestedtext}>2 Seater Sofas</Text>
                            </View>
                            <View>
                                <Text style={styles.nestedtext}>1 Seater Sofas</Text>
                            </View>
                            <View>
                                <Text style={styles.nestedtext}>Sofa Sets</Text>
                            </View>
                        </View>
                    </View>
                ) : null}
                {/* nested containers here for ................Sofas...........(End) */}


                {/* 2 */}
                {/* inner containers ....Sectional Sofas......(Start)which container nested containers */}

                {isContainer2Visible ? (
                    <View style={styles.dropdowmpannelcontainer}>

                        <View style={styles.pannelinnercontainer}>

                            <TouchableOpacity onPress={handlenestedcontainer2Click} activeOpacity={1}>
                                <View style={styles.innercontainer}>

                                    <View>
                                        <Text style={styles.innercontainerheadtext}>Sectional Sofas</Text>
                                    </View>


                                    <View style={styles.iconcontainer}>
                                        {isnestedcontainer2Visible ? (
                                            <AntDesign name='minus' color={'#5B5B5B'} size={18} />
                                        ) : <AntDesign name='plus' color={'#5B5B5B'} size={18} />}
                                    </View>

                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                ) : null}

                {/* inner containers ....Sectional Sofas......(End)which container nested containers */}

                {/* nested containers here for ................Sectional Sofas...........(start) */}

                {isnestedcontainer2Visible ? (
                    <View style={styles.nestedmaincontainer}>
                        <View style={styles.nestedcontainer}>
                            <View>
                                <Text style={styles.nestedtext}>LHS Sectional</Text>
                            </View>
                            <View>
                                <Text style={styles.nestedtext}>RHS Sectional</Text>
                            </View>
                            <View>
                                <Text style={styles.nestedtext}>Corner Sofas</Text>
                            </View>

                        </View>
                    </View>
                ) : null}
                {/* nested containers here for ................Sectional Sofas...........(End) */}

                {/* 3 */}
                {/* inner containers ......Sofa Cum Beds.......(Start)which container nested containers */}

                {isContainer2Visible ? (
                    <View style={styles.dropdowmpannelcontainer}>

                        <View style={styles.pannelinnercontainer}>

                            <TouchableOpacity activeOpacity={1}>
                                <View style={styles.innercontainer}>

                                    <View>
                                        <Text style={styles.innercontainerheadtext}>Sofa Cum Beds</Text>
                                    </View>

                                    {/* <View style={styles.iconcontainer}>
                                        {isnestedcontainer1Visible ? (
                                            <AntDesign name='minus' color={'#5B5B5B'} size={18} />
                                        ) : <AntDesign name='plus' color={'#5B5B5B'} size={18} />}
                                    </View> */}

                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                ) : null}

                {/* inner containers ...Sofa Cum Beds........(Ending)which container nested containers */}

                {/* 4 */}
                {/* inner containers ......Futons.......(Start)which container nested containers */}

                {titles.map((add) => (
                    <React.Fragment key={add.id}>
                        {isContainer2Visible ? (
                            <View style={styles.dropdowmpannelcontainer}>

                                <View style={styles.pannelinnercontainer}>

                                    <TouchableOpacity activeOpacity={1}>
                                        <View style={styles.innercontainer}>

                                            <View>
                                                <Text style={styles.innercontainerheadtext}>{add.tilname}</Text>
                                            </View>

                                            <View style={styles.iconcontainer}>
                                                <AntDesign name={add.icon} color={'#5B5B5B'} size={18} />
                                            </View>

                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        ) : null}
                    </React.Fragment>
                ))}
            </View>

        </>
    )
}

export default Furnishings;

