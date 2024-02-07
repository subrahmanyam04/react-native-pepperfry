import React, { useEffect } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons, Entypo } from '@expo/vector-icons'
import Tabcard23infor from "./Tabcard23infor";
import { Getcard3Data } from "../Redux/Api/Getcard3data";
import { setCard3data } from "../Redux/Actions/Card3action";
import { useNavigation, useRoute } from "@react-navigation/native";
import { connect } from "react-redux";
import AsyncStorage from '@react-native-async-storage/async-storage';


const Tabdynamiccard3 = ({
    card3data,
    setCard3data,
}) => {

    const card2data = [
        {
            id: 1,
            imgurl: 'https://ii1.pepperfry.com/media/catalog/product/d/a/494x544/daroo-3-seater-sofa-in-camel-beige-by-febonic-daroo-3-seater-sofa-in-camel-beige-by-febonic-o8dhfm.jpg'
        },
        {
            id: 2,
            imgurl: 'https://ii1.pepperfry.com/media/catalog/product/b/a/494x544/baley-3-seater-sofa-in-lama-black-colour-baley-3-seater-sofa-in-lama-black-colour-skjtv1.jpg'
        },
        {
            id: 3,
            imgurl: 'https://ii1.pepperfry.com/media/catalog/product/j/a/494x544/jack-velvet-3-seater-sofa-in-green-colour-jack-velvet-3-seater-sofa-in-green-colour-ggqbsj.jpg'
        },
        {
            id: 4,
            imgurl: 'https://ii1.pepperfry.com/media/catalog/product/b/a/494x544/bali-fabric-3-seater-sofa-in-jeans-blue-colour-bali-fabric-3-seater-sofa-in-jeans-blue-colour-hq2mso.jpg'
        },

    ]

    useEffect(() => {
        getData();

    }, []);


    const getData = async () => {
        try {
            const students = await Getcard3Data();
            console.log('data has been received', students)
            setCard3data(students);
            console.log('iam student data', students)
        } catch (error) {
            console.error('An error occurred:', error);

        }
    };


    const route = useRoute();
    const routename = route.params.screen
    console.log('rpute name in acrd2', routename)
    let jaggu = card3data.filter(i => i.status === routename)
    console.log('i am jaggu', jaggu)

    const navigation = useNavigation();


    const handleCardClick = async (aboutcard) => {
        console.log("aboutcard data is here", aboutcard);
        const aboutcarddataString = JSON.stringify(aboutcard);
        try {
            await AsyncStorage.setItem('aboutcarddata', aboutcarddataString);
            console.log('Data stored successfully');
            navigation.navigate('Products',{screens:aboutcard[0].innerstatus,secondname:aboutcard[0].status})
        } catch (error) {
            console.error('Error storing data:', error);
        }
    };

    return (
        <>
            <View style={styles.container}>

                <View style={styles.innercontainer}>

                    {jaggu.map((card3) => (


                        <View style={styles.rowcontainer} key={card3.id}>
                            <TouchableOpacity activeOpacity={1} onPress={() => handleCardClick(card3.aboutcard)}>
                                <View style={styles.rowinnercontainer}>
                                    {/* image here is */}
                                    <View>
                                        <Image
                                            source={{ uri: card3.imgurl }}
                                            style={styles.image}
                                        />
                                        <View style={styles.iconcontainer}>
                                            <View style={styles.iconbackground}>
                                                <Ionicons name="heart-outline" size={20} color="#696969" />
                                            </View>
                                        </View>
                                    </View>

                                    {/* details of that image */}

                                    {/* entire Information of the card is in this below file */}


                                    <Tabcard23infor />

                                    {/* entire Information of the card is in this above file*/}

                                </View>
                            </TouchableOpacity>
                        </View>




                    ))}
                </View>

            </View>
        </>
    )
}

const mapStateToProps = (state) => ({


    card3data: state.Card3reducer.card3data,


});

const mapDispatchToProps = {
    setCard3data,
    // setSelectedAboutCard


};

export default connect(mapStateToProps, mapDispatchToProps)(Tabdynamiccard3);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 50
    },
    innercontainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    rowcontainer: {
        // borderColor: 'black',
        // borderWidth: 1,
        width: '49%',
        marginTop: 10
    },
    rowinnercontainer: {
        flex: 1,
        flexDirection: 'column'
    },
    iconcontainer: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    iconbackground: {
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        top: 14,
        right: 6,
        padding: 5,
        borderRadius: 30
    },
    image: {
        width: 'auto',
        height: 212,
        resizeMode: 'contain'
    }
})