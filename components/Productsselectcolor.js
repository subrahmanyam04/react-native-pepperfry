import React from "react";
import controls from "./Imports";
const Productsselectcolor = () => {
    const imageid = [
        { id: 1, url: 'https://ii1.pepperfry.com/media/catalog/product/e/l/494x544/elegant-3-seater-sofa-in-grey-colour-elegant-3-seater-sofa-in-grey-colour-akttix.jpg' },
        { id: 2, url: 'https://ii1.pepperfry.com/media/catalog/product/e/l/494x544/elegant-3-seater-sofa-in-royal-blue-colour-elegant-3-seater-sofa-in-royal-blue-colour-nzrdxo.jpg' },
        { id: 3, url: 'https://ii1.pepperfry.com/media/catalog/product/e/l/494x544/elegant-3-seater-sofa-in-bottle-green-colour-elegant-3-seater-sofa-in-bottle-green-colour-sz5p8h.jpg' },
    ]
    return (
        <controls.View style={styles.container}>
            <controls.View style={styles.innercontainer}>
                <controls.View><controls.Text style={{ color: 'black', fontWeight: 'bold', fontSize: 22 }}>Select Colour</controls.Text></controls.View>
                <controls.View style={{ flex: 1, flexDirection: 'row', marginTop: 6 }}>
                    {imageid.map((img, index) => (
                        <controls.View style={{ marginRight: 4, borderColor: index === 0 ? "#ff4500" : "lightgrey", borderWidth: 2 }} key={img.id}>
                            <controls.Image source={{ uri: img.url }} style={{ width: 64, height: 69, resizeMode: 'contain' }} />
                        </controls.View>
                    ))}
                </controls.View>
            </controls.View>
        <controls.View style={{borderBottomColor:"#dbdcdc",borderBottomWidth:8}}/>
        </controls.View>
    )
}
export default Productsselectcolor;
const styles = controls.StyleSheet.create({
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