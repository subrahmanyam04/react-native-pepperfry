import React, { useEffect } from "react";
import Tabcard23infor from "./Tabcard23infor";
import { Getcard3Data } from "../Redux/Api/Getcard3data";
import { setCard3data } from "../Redux/Actions/Card3action";
import AsyncStorage from '@react-native-async-storage/async-storage';
import controls from "./Imports";

const Tabdynamiccard3 = ({ card3data, setCard3data, }) => {
    const getData = async () => {
        try {
            const students = await Getcard3Data();
            setCard3data(students);
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };
    useEffect(() => { getData(); }, []);
    const route = controls.useRoute();
    const routename = route.params.screen
    let jaggu = card3data.filter(i => i.status === routename)
    const navigation = controls.useNavigation();
    const handleCardClick = async (aboutcard) => {
        const aboutcarddataString = JSON.stringify(aboutcard);
        try {
            await AsyncStorage.setItem('aboutcarddata', aboutcarddataString);
            navigation.navigate('Products', { screens: aboutcard[0].innerstatus, secondname: aboutcard[0].status })
        } catch (error) {
            console.error('Error storing data:', error);
        }
    };
    return (
        <controls.View style={styles.container}>
            <controls.View style={styles.innercontainer}>
                {jaggu.map((card3) => (
                    <controls.View style={styles.rowcontainer} key={card3.id}>
                        <controls.TouchableOpacity activeOpacity={1} onPress={() => handleCardClick(card3.aboutcard)}>
                            <controls.View style={styles.rowinnercontainer}>
                                <controls.View>
                                    <controls.Image source={{ uri: card3.imgurl }} style={styles.image} />
                                    <controls.View style={styles.iconcontainer}>
                                        <controls.View style={styles.iconbackground}>
                                            <controls.Ionicons name="heart-outline" size={20} color="#696969" />
                                        </controls.View>
                                    </controls.View>
                                </controls.View>
                                <Tabcard23infor />
                            </controls.View>
                        </controls.TouchableOpacity>
                    </controls.View>
                ))}
            </controls.View>
        </controls.View>
    )
}
const mapStateToProps = (state) => ({ card3data: state.Card3reducer.card3data, });
const mapDispatchToProps = { setCard3data, };
export default controls.connect(mapStateToProps, mapDispatchToProps)(Tabdynamiccard3);
const styles = controls.StyleSheet.create({
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