import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { windowWidth } from "../Util/Dimensions";

windowWidth
const Aboutushead = () => {
    const headings = [
        {
            id: 1,
            head1: 'WHAT ARE WE',
            head2: 'WHAT WE DO'
        },
        {
            id: 2,
            head1: 'ESG INITIATIVES',
            head2: 'INVESTOR RELATIONS'
        }
    ]

    return (
        <>

            <View style={styles.container}>
                <View style={styles.innercontainer}>
                    {/* image with heading */}
                    <View style={styles.imagecontainer}>

                        <View style={{ borderBottomColor: '#D4D4D4', borderBottomWidth: 2 }}>
                            <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Pepperfry_logo.svg/2560px-Pepperfry_logo.svg.png' }} alt="sjf" style={styles.bannerlogoimg} />

                        </View>
                        <Text style={{ fontSize: 12, color: '#121212', marginTop: 1 }}>C O R P O R A T E</Text>
                    </View>

                    {/* heading titles */}
                    {headings.map((titles) => (
                        <View style={styles.headingrowcontainers} key={titles.id}>

                            <View style={styles.headingrowcontainerinner}>
                                <Text style={styles.headingrowcontainerinnertext}>{titles.head1}</Text>
                            </View>
                            <View style={styles.headingrowcontainerinner}>
                                <Text style={styles.headingrowcontainerinnertext}>{titles.head2}</Text>
                            </View>

                        </View>

                    ))}

                    {/* image banner */}
                    <View style={styles.bannerimgcontainer}>
                        <Image source={{ uri: 'https://www.pepperfry.ltd/wp-content/uploads/2023/03/12.jpg' }} alt="bvhb" style={{ height: 400, width: '100%', resizeMode: 'contain' }} />
                    </View>

                    {/* About us title information */}
                    <View style={styles.inforcontainer}>
                        <View style={styles.headtextcontainer}>
                            <Text style={styles.headingtext}>ABOUT US</Text>
                        </View>

                        <View style={styles.textinforcontainer}>
                            <View style={styles.textinforinnercontainer}>
                                <View>
                                    <Text style={styles.informationtext}>In 2012, Ambareesh Murty and Ashish Shah pioneered omnichannel retail to launch Pepperfry, India’s leading e-commerce marketplace for furniture and home goods.
                                    </Text>
                                </View>
                                <View>
                                    <Text style={styles.informationtext}>In the last decade, Pepperfry has disrupted the tenets of classical retail by combining an online virtual catalogue, an extensive in-house supply chain, and a large omnichannel footprint covering more than 100 cities in India. Life can be a ‘bed of roses’ (if the bed is from Pepperfry).
                                    </Text>
                                </View>
                            </View>
                        </View>


                    </View>

                </View>


            </View>
        </>
    )
}

export default Aboutushead;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    innercontainer: {
        flex: 1,
        flexDirection: 'column',
        marginHorizontal: 20
    },
    imagecontainer: {
        justifyContent: 'center',
        alignItems: 'center',

    },
    bannerlogoimg: {
        height: 55,
        width: 120,
        resizeMode: 'contain',

    },
    headingrowcontainers: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 15,
    },
    headingrowcontainerinner: {
        width: '50%'
    },
    headingrowcontainerinnertext: {
        fontSize: 15,
        color: '#2A292B',
        textAlign: 'center'
    },
    bannerimg: {
        height: 400,
        width: '100%',
        resizeMode: 'contain'
    },
    bannerimgcontainer: {
        marginTop: 25
    },
    inforcontainer: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 15,
        // borderColor: 'black',
        // borderWidth: 1,
        marginBottom: 10
    },
    textinforcontainer: {
        flex: 1,
        marginHorizontal: 20,
        justifyContent: 'center',
        // borderColor: 'black',
        // borderWidth: 1
    },
    textinforinnercontainer: {
        flex: 1,
        marginHorizontal: 10,
        justifyContent: 'center',
        // borderColor: 'black',
        // borderWidth:1
    },
    headingtext: {
        textAlign: 'center',
        color: '#000000',
        fontSize: 26,
        fontWeight: '900'
    },
    headtextcontainer: {
        marginTop: 15,
        marginBottom: 15
    },
    informationtext: {
        fontSize: 14,
        paddingHorizontal:4,
        textAlign: 'center',
        color: '#000000',
        lineHeight: 24,
        fontWeight:'400'
    }

})