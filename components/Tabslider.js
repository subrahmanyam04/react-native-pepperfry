import { useRoute } from "@react-navigation/native";
import React, { useEffect } from "react";
import { GetsliderData } from "../Redux/Api/Getsliderdata";
import { setSliderdata } from "../Redux/Actions/Slideraction";
import controls from "./Imports";

const Tabslider = ({  sliderdata, setSliderdata }) => {
    const getData = async () => {
        try {
            const students = await GetsliderData();
            setSliderdata(students);
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };
    useEffect(() => { getData(); }, []);
    const route = useRoute();
    const routename = route.params.screen
    let jaggu = sliderdata.filter(i => i.status == routename)
    return (
        <controls.View styles={styles.container} >
            <controls.FlatList data={jaggu} horizontal={true} showsHorizontalScrollIndicator={false}
                renderItem={(itemData) => {
                    return (
                        <controls.View style={styles.innerconatineter} key={itemData.item.id}>
                            <controls.View style={{ marginHorizontal: 2 }}>
                                <controls.View>
                                    <controls.Image source={{ uri: itemData.item.imgurl }} style={{ height: 60, width: '100%', resizeMode: 'contain' }} />
                                </controls.View>
                                <controls.View><controls.Text style={[styles.fontstyle,{color: itemData.index === 0 ? "#ff4500" : "black"}]}>{itemData.item.title}</controls.Text></controls.View>
                                <controls.View><controls.Text style={[styles.fontstyle,{color: itemData.index === 0 ? "#ff4500" : "black"}]}>{itemData.item.options}</controls.Text></controls.View>
                            </controls.View>
                        </controls.View>
                    )
                }}
            />
        </controls.View>
    )
}
const mapStateToProps = (state) => ({ sliderdata: state.Sliderreducer.sliderdata, });
const mapDispatchToProps = { setSliderdata };
export default controls.connect(mapStateToProps, mapDispatchToProps)(Tabslider);
const styles = controls.StyleSheet.create({
    container: {
        flex: 1,
    },
    innerconatineter: {
        flex: 1,
        flexDirection: 'row',
        marginHorizontal: 12,
        marginTop:8
    },
    fontstyle: {
        textAlign: 'center',
        fontWeight: '500',
        fontSize: 14
    }
})