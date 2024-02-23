import React, { useEffect } from "react";
import Tabcard23infor from "./Tabcard23infor";
import { Getcard2Data } from "../Redux/Api/Getcard2data";
import { setCard2data } from "../Redux/Actions/Card2action";
import controls from "./Imports";

const Tabcard2 = ({ card2data, setCard2data }) => {
    const getData = async () => {
        try {
            const students = await Getcard2Data();
            setCard2data(students);
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };
    useEffect(() => { getData(); }, []);
    const route = controls.useRoute();
    const routename = route.params.screen
    let jaggu = card2data.filter(i => i.status === routename)
    return (

        <controls.TouchableOpacity activeOpacity={1} >
            <controls.View style={styles.container}>
                <controls.View style={styles.innercontainer}>
                    {jaggu.map((card2) => (
                        <controls.View style={styles.rowcontainer} key={card2.id}>
                            <controls.View style={styles.rowinnercontainer} >
                                <controls.View>
                                    <controls.Image  source={{ uri: card2.imgurl }} style={styles.image} />
                                    <controls.View style={styles.iconcontainer}>
                                        <controls.View style={styles.iconbackground}>
                                            <controls.Ionicons name="heart-outline" size={20} color="#696969" />
                                        </controls.View>
                                    </controls.View>
                                </controls.View>
                                <Tabcard23infor />
                            </controls.View>
                        </controls.View>
                    ))}
                </controls.View>
            </controls.View>
        </controls.TouchableOpacity>
    )
}
const mapStateToProps = (state) => ({ card2data: state.Card2reducer.card2data, });
const mapDispatchToProps = { setCard2data };
export default controls.connect(mapStateToProps, mapDispatchToProps)(Tabcard2);
const styles = controls.StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 4
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
        width: '100%',
        height: 212,
        resizeMode: 'contain'
    }
})