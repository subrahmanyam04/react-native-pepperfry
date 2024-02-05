import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";


const Productsselectcolor = () => {
    const imageid = [
        {
            id: 1,
            url: 'https://ii1.pepperfry.com/media/catalog/product/e/l/494x544/elegant-3-seater-sofa-in-grey-colour-elegant-3-seater-sofa-in-grey-colour-akttix.jpg'
        },
        {
            id: 2,
            url: 'https://ii1.pepperfry.com/media/catalog/product/e/l/494x544/elegant-3-seater-sofa-in-royal-blue-colour-elegant-3-seater-sofa-in-royal-blue-colour-nzrdxo.jpg'
        },
        {
            id: 3,
            url: 'https://ii1.pepperfry.com/media/catalog/product/e/l/494x544/elegant-3-seater-sofa-in-bottle-green-colour-elegant-3-seater-sofa-in-bottle-green-colour-sz5p8h.jpg'
        },
    ]
    return (
        <View style={styles.container}>
            <View style={styles.innercontainer}>
                <View>
                    <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 22 }}>Select Colour</Text>
                </View>

                <View style={{ flex: 1, flexDirection: 'row', marginTop: 6 }}>
                    {imageid.map((img, index) => (
                        <View style={{ marginRight: 4, borderColor: index === 0 ? "#ff4500" : "lightgrey", borderWidth: 2 }} key={img.id}>
                            <Image source={{ uri: img.url }} style={{ width: 64, height: 69, resizeMode: 'contain' }} />
                        </View>
                    ))}

                </View>

            </View>
        <View style={{borderBottomColor:"#dbdcdc",borderBottomWidth:8}}/>
        </View>
    )
}

export default Productsselectcolor;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    innercontainer: {
        flex: 1,
        flexDirection: 'column',
        marginHorizontal: 8,
        marginVertical: 26,
        
    }
}) 