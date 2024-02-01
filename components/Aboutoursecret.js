import React from "react";
import { Image, Linking, StyleSheet, Text, View } from "react-native";


const Aboutoursecret = () => {

    const secretdata = [
        {
            id: 1,
            imgurl: 'https://www.pepperfry.ltd/wp-content/uploads/2023/03/Rectangle-12.jpg',
            imgtitle: "STUDIO PEPPERFRY",
            imgdes: 'Experience An Omnichannel World',
            imgpara: 'Pioneers of the omnichannel business model, Pepperfry opened its first Studio (a ‘one-of-a-kind’ experience center) in 2014. Our studios are typically located on retail high streets in prominent neighborhoods across cities and have helped transform India’s retail landscape with a footprint of more than 200 studios in over 100 cities...'
        },
        {
            id: 2,
            imgurl: 'https://www.pepperfry.ltd/wp-content/uploads/2023/03/Group-301.jpg',
            imgtitle: 'PEPCART',
            imgdes: 'Our Best In Class Big-Box Supply Chain',
            imgpara: "India’s furniture market used to be hyperlocal. Pepperfry disrupted the very nature of this market by creating India’s largest big-box supply chain network. PepCart provides first-mile and last-mile logistics services to buyers and sellers in over 500 cities. PepCart has successfully delivered more than 10 million ..."
        },
        {
            id: 3,
            imgurl: 'https://www.pepperfry.ltd/wp-content/uploads/2023/03/Rectangle-4317.jpg',
            imgtitle: 'D2C BRANDS',
            imgdes: 'Home Grown By Indian Artisans',
            imgpara: 'Pepperfry identified key gaps in product and price categories for customers looking for great furniture and home goods and decided to fill these gaps with a bouquet of D2C brands. These brands (Mudramark, Amberville, Bohemiana, CasaCraft, Mintwud, and Woodsworth) offer a wide range of products that encompass unique styles, cater to distin...'
        },
        {
            id: 4,
            imgurl: 'https://www.pepperfry.ltd/wp-content/uploads/2023/03/Rectangle-4318.jpg',
            imgtitle: 'COMMERCIAL PROJECTS',
            imgdes: 'Commercial Design & Build Services',
            imgpara: 'Pepperfry acquired BrandMakerr in August 2022 to expand its presence into commercial projects. BrandMakerr brings over six years of experience in commercial interior solutions and has worked with over 20 brands (like KFC, Subway, Taj Hotels, IBIS, Max, BIAL, Pantaloons, Raheja’s and Amazon) across multiple locations....'
        },
    ]

    const prices = [
        {
            id:1,
            rate1: '11 Million+',
            reason1: 'Happy Customers',
            rate2: '204',
            reason2: 'Pepperfry Studios'
        },
        {
            id:2,
            rate1: '90K+',
            reason1: 'Products To Choose From',
            rate2: '6500+',
            reason2: 'Pincodes'
        },
        {
            id:3,
            rate1: '173+',
            reason1: 'Cities',
            rate2: '',
            reason2: ''
        },
    ]

    return (


        <View style={styles.container}>

            <View style={styles.innercontainer}>
                <View style={styles.headcontainer}>
                    <Text style={styles.headtext}>OUR SECRET SAUCE</Text>
                </View>
                {secretdata.map((data) => (

                    <View style={styles.informationcontainer} key={data.id}>
                        <View style={styles.imgcontainer}>
                            <Image source={{ uri: data.imgurl }} alt="hbdf" style={styles.img} />
                        </View>
                        <View>
                            <Text style={styles.imgtitle}>{data.imgtitle}</Text>
                        </View>
                        <View>
                            <Text style={styles.imgdescription}>{data.imgdes}</Text>
                        </View>
                        <View>
                            <Text style={styles.imgparagraph}>
                                {data.imgpara}
                            </Text>
                        </View>
                        <View>
                            <Text onPress={() => Linking.openURL('https://www.pepperfry.com/')} style={styles.imgreadmorelink}>
                                Read more
                            </Text>
                        </View>

                    </View>



                ))}

                {/* price and subcrips */}
                <View style={styles.subcripcontainer}>

                    {prices.map((dam) => (
                        <View style={styles.subcripinnercontainer} key={dam.id}>
                            <View style={styles.subcripinnerrowcontainer}>
                                <Text style={styles.numbertext}>{dam.rate1}</Text>
                                <Text style={styles.numbersubtext}>{dam.reason1}</Text>
                            </View>
                            <View style={styles.subcripinnerrowcontainer}>
                                <Text style={styles.numbertext}>{dam.rate2}</Text>
                                <Text style={styles.numbersubtext}>{dam.reason2}</Text>
                            </View>


                        </View>
                    ))}



                </View>


            </View>

        </View>

    )
}

export default Aboutoursecret

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10
    },
    innercontainer: {
        flex: 1,
        marginHorizontal: 22,
        flexDirection: 'column'
    },
    informationcontainer: {
        flex: 1,
        flexDirection: 'column',
        marginBottom: 40
    },
    headcontainer: {
        marginTop: 34,
        marginBottom: 18
    },
    headtext: {
        textAlign: 'center',
        color: '#000000',
        fontSize: 35,
        fontWeight: 'bold'
    },
    imgcontainer: {
        //    marginTop:24
    },
    img: {
        height: 180,
        width: '100%',
        resizeMode: 'contain'
    },
    imgtitle: {
        color: '#000000',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 8
    },
    imgdescription: {
        color: '#000000',
        fontSize: 24,
        paddingHorizontal: 10,
        marginTop: 10,
        marginBottom: 10,
        fontWeight: '500',
        textAlign: 'center',
        marginVertical: 1
    },
    imgparagraph: {
        color: '#000000',
        fontSize: 20,
        fontWeight: '400',
        textAlign: 'center',
        paddingHorizontal: 4,
        lineHeight: 26
    },
    imgreadmorelink: {
        color: '#ff4500',
        fontSize: 16,
        textDecorationLine: 'underline',
        textDecorationStyle: 'solid',
        textAlign: 'center',
        marginTop: 2
    },
    subcripcontainer: {
        flex: 1,
        // borderColor: 'black',
        // borderWidth: 1,
        marginBottom: 10
    },
    subcripinnercontainer: {
        flex: 1,
        marginHorizontal: 15,
        // borderColor: 'black',
        // borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop:24
    },
    subcripinnerrowcontainer: {
        width: '46%',
        // borderColor: 'black',
        // borderWidth: 1
    },
    numbertext: {
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 26
    },
    numbersubtext: {
        color: '#000000',
        fontSize: 16
    }

})