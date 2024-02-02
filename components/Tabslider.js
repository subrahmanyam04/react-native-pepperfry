import { useRoute } from "@react-navigation/native";
import React, { useEffect } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { GetsliderData } from "../Redux/Api/Getsliderdata";
import { setSliderdata } from "../Redux/Actions/Slideraction";
import { connect } from "react-redux";


const Tabslider = ({
    sliderdata,
    setSliderdata
}) => {

    const slidingdata = [
        {
            id: 1,
            url: 'https://ii1.pepperfry.com/assets/w23-clip-ctg-all.png',
            options: '(1643)',
            title: 'All'
        },
        {
            id: 2,
            url: 'https://ii2.pepperfry.com/media/wysiwyg/banners/Fur_Mid_Century_Modern_3_Seater_Sofas.jpg',
            options: '(266)',
            title: 'Modern 3 Seater Sofas'
        },
        {
            id: 3,
            url: 'https://ii2.pepperfry.com/media/wysiwyg/banners/Fur_Contemporary_3_Seater_Sofas.jpg',
            options: '(266)',
            title: 'Mid-Century Modern 3 Seater Sofas'
        },
        {
            id: 4,
            url: 'https://ii2.pepperfry.com/media/wysiwyg/banners/Fur_Lawson_3_Seater_Sofas.jpg',
            options: '(266)',
            title: 'Modern 3 Seater Sofas'
        },
        {
            id: 5,
            url: 'https://ii2.pepperfry.com/media/wysiwyg/banners/Fur_Rolled_Arms_3_Seater_Sofas.jpg',
            options: '(266)',
            title: 'Modern 3 Seater Sofas'
        },
        {
            id: 6,
            url: 'https://ii2.pepperfry.com/media/wysiwyg/banners/Fur_Bucket_3_Seater_Sofas.jpg',
            options: '(266)',
            title: 'Modern 3 Seater Sofas'
        },
        {
            id: 7,
            url: 'https://ii2.pepperfry.com/media/wysiwyg/banners/Fur_Chesterfield_3_Seater_Sofas.jpg',
            options: '(266)',
            title: 'Modern 3 Seater Sofas'
        },
        {
            id: 8,
            url: 'https://ii2.pepperfry.com/media/wysiwyg/banners/Fur_Traditional_3_Seater_Sofas.jpg',
            options: '(266)',
            title: 'Modern 3 Seater Sofas'
        },
    ]

    useEffect(() => {
        getData();

    }, []);

    const getData = async () => {
        try {
            const students = await GetsliderData();
            console.log('data has been received', students)
            setSliderdata(students);
            console.log('iam student data', students)
        } catch (error) {
            console.error('An error occurred:', error);

        }
    };

    const route = useRoute();
    
    const routename = route.params.screen

    let jaggu = sliderdata.filter(i => i.status == routename)
    console.log('i am jaggu', jaggu)

    return (


        <View styles={styles.container} >
            <FlatList
                data={jaggu}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={(itemData) => {
                    return (


                        <View style={styles.innerconatineter} key={itemData.item.id}>

                            <View style={{ marginHorizontal: 2 }}>
                                <View>
                                    <Image source={{ uri: itemData.item.imgurl }} style={{ 
                                        
                                        height: 60, width: '100%', resizeMode: 'contain' }} />
                                </View>

                                <View>
                                    <Text style={[styles.fontstyle,{color: itemData.index === 0 ? "#ff4500" : "black"}]}>{itemData.item.title}</Text>
                                </View>

                                <View>
                                    <Text style={[styles.fontstyle,{color: itemData.index === 0 ? "#ff4500" : "black"}]}>{itemData.item.options}</Text>
                                </View>
                            </View>

                        </View>









                    )
                }}
            />

        </View>









    )
}

const mapStateToProps = (state) => ({

    // sliderdata: state.Sliderreducer.sliderdata,
    sliderdata: state.Sliderreducer.sliderdata,
    // selectedAboutCard: state.Reducer1.selectedAboutCard

});

const mapDispatchToProps = {
    setSliderdata
    // setSelectedAboutCard,

};

export default connect(mapStateToProps, mapDispatchToProps)(Tabslider);

const styles = StyleSheet.create({
    container: {
        flex: 1,
       
    },
    innerconatineter: {
        flex: 1,
        flexDirection: 'row',
        marginHorizontal: 12,
        marginTop:8
        // borderColor: 'black', borderWidth: 1,
    },
    fontstyle: {
        textAlign: 'center',
        fontWeight: '500',
        fontSize: 14
    }


})