import React, { useEffect } from "react";
import { setCard1data } from "../Redux/Actions/Card1action";
import { Getcard1Data } from "../Redux/Api/Getcard1data";
import controls from "./Imports";

const Tabcard1 = ({ card1data, setCard1data }) => {
    const getData = async () => {
        try {
            const students = await Getcard1Data();
            setCard1data(students);
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };
    useEffect(() => { getData(); }, []);
    const route = controls.useRoute();
    const routename = route.params.screen
    let jaggu = card1data.filter(i => i.status === routename)
    return (
        <controls.View style={styles.container}>
            <controls.FlatList  data={jaggu}
                renderItem={(itemData) => {
                    return (
                        <controls.View style={styles.container2} key={itemData.item.id}>
                            {
                                itemData.index === 0 ? (
                                    <controls.View style={{marginRight:6}}>
                                        <controls.Image source={{ uri: itemData.item.imgurl }} style={{
                                            width: 140,
                                            height: 216,
                                            resizeMode:'contain'
                                        }} />
                                    </controls.View>
                                ) : (
                                    <>
                                        <controls.View>
                                            <controls.Image source={{ uri: itemData.item.imgurl }} style={styles.image}/>
                                            <controls.View style={styles.iconContainer}>
                                                <controls.View style={styles.iconBackground}>
                                                    <controls.Ionicons name="heart-outline" size={21} color="#696969" />
                                                </controls.View>
                                            </controls.View>
                                        </controls.View>
                                        <controls.View>
                                            <controls.Text style={styles.text1} numberOfLines={2} ellipsizeMode="tail">Milan Fabric 3 Seater Sofa in Sky Blue Colour</controls.Text>
                                        </controls.View>
                                        <controls.View>
                                            <controls.Text style={styles.pricetext}><controls.Text style={styles.firstprice}>₹12,499 </controls.Text><controls.Text style={styles.secondprice}> ₹17,000</controls.Text><controls.Text style={styles.thirdprice}> 72%</controls.Text></controls.Text>
                                        </controls.View>
                                    </>
                                )
                            }
                        </controls.View>
                    )
                }}
                keyExtractor={(item) => item.id} horizontal={true} showsHorizontalScrollIndicator={false}
            />
        </controls.View>
    )
}
const mapStateToProps = (state) => ({ card1data: state.Card1reducer.card1data, });
const mapDispatchToProps = { setCard1data };
export default controls.connect(mapStateToProps, mapDispatchToProps)(Tabcard1);
const styles = controls.StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 26,
    },
    container2: {
        flex: 1,
        flexDirection: "column",
    },
    image: {
        width: 150,
        height: 160,
        marginRight: 1,//  margin between images
        resizeMode:'contain'
    },
    text1: {
        marginTop: 7,
        maxWidth: 139,
        fontSize: 12,    
        fontWeight: '500',
        color: '#363636'
    },
    pricetext: {
        marginTop: 1
    },
    iconContainer: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },
    iconBackground: {
        top: 13,
        right: 12,
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Adjust opacity as needed
        padding: 5,
        borderRadius: 25,
    },
    firstprice: {
        fontWeight: 'bold'
    },
    secondprice: {
        textDecorationLine: 'line-through',
        color: 'black',
        fontSize: 12,
        fontWeight: '500'
    },
    thirdprice: {
        fontWeight: 'bold',
        fontSize: 14.5,
        color: 'green'
    }
})
