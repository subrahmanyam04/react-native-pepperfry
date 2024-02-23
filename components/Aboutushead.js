import React from "react";
import controls from "./Imports";
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
            <controls.View style={styles.container}>
                <controls.View style={styles.innercontainer}>
                    <controls.View style={styles.imagecontainer}>
                        <controls.View style={{ borderBottomColor: '#D4D4D4', borderBottomWidth: 2 }}>
                            <controls.Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Pepperfry_logo.svg/2560px-Pepperfry_logo.svg.png' }} alt="sjf" style={styles.bannerlogoimg} />
                        </controls.View>
                        <controls.Text style={{ fontSize: 12, color: '#121212', marginTop: 1 }}>C O R P O R A T E</controls.Text>
                    </controls.View>
                    {headings.map((titles) => (
                        <controls.View style={styles.headingrowcontainers} key={titles.id}>
                            <controls.View style={styles.headingrowcontainerinner}>
                                <controls.Text style={styles.headingrowcontainerinnertext}>{titles.head1}</controls.Text>
                            </controls.View>
                            <controls.View style={styles.headingrowcontainerinner}>
                                <controls.Text style={styles.headingrowcontainerinnertext}>{titles.head2}</controls.Text>
                            </controls.View>
                        </controls.View>
                    ))}
                    <controls.View style={styles.bannerimgcontainer}>
                        <controls.Image source={{ uri: 'https://www.pepperfry.ltd/wp-content/uploads/2023/03/12.jpg' }} alt="bvhb" style={{ height: 400, width: '100%', resizeMode: 'contain' }} />
                    </controls.View>
                    <controls.View style={styles.inforcontainer}>
                        <controls.View style={styles.headtextcontainer}>
                            <controls.Text style={styles.headingtext}>ABOUT US</controls.Text>
                        </controls.View>
                        <controls.View style={styles.textinforcontainer}>
                            <controls.View style={styles.textinforinnercontainer}>
                                <controls.View><controls.Text style={styles.informationtext}>In 2012, Ambareesh Murty and Ashish Shah pioneered omnichannel retail to launch Pepperfry, India’s leading e-commerce marketplace for furniture and home goods.</controls.Text></controls.View>
                                <controls.View><controls.Text style={styles.informationtext}>In the last decade, Pepperfry has disrupted the tenets of classical retail by combining an online virtual catalogue, an extensive in-house supply chain, and a large omnichannel footprint covering more than 100 cities in India. Life can be a ‘bed of roses’ (if the bed is from Pepperfry).</controls.Text></controls.View>
                            </controls.View>
                        </controls.View>
                    </controls.View>
                </controls.View>
            </controls.View>
    )
}
export default Aboutushead;
const styles = controls.StyleSheet.create({
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
        marginBottom: 10
    },
    textinforcontainer: {
        flex: 1,
        marginHorizontal: 20,
        justifyContent: 'center',
    },
    textinforinnercontainer: {
        flex: 1,
        marginHorizontal: 10,
        justifyContent: 'center',
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