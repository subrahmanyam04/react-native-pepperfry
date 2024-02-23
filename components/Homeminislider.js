import React from "react";
import controls from "./Imports";

const Homeminislider = () => {
    const imagedata = [
        { id: 1, imgurl: "https://ii1.pepperfry.com/assets/ca87569c-46dd-4f22-ad49-8db72399463e.jpg", },
        { id: 2, imgurl: "https://ii1.pepperfry.com/assets/ca87569c-46dd-4f22-ad49-8db72399463e.jpg", },
        { id: 3, imgurl: "https://ii1.pepperfry.com/assets/ca87569c-46dd-4f22-ad49-8db72399463e.jpg", },

    ]
    return (
        <controls.View style={styles.container}>
            <controls.FlatList data={imagedata} bounces={false} alwaysBounceHorizontal={false}
                renderItem={(itemData) => {
                    return (
                        <controls.Image source={{ uri: itemData.item.imgurl }} style={styles.image} />
                    )
                }}
                keyExtractor={(item) => item.id} horizontal={true} showsHorizontalScrollIndicator={false}
            />
        </controls.View>
    )
}
export default Homeminislider
const styles = controls.StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 15,
        marginHorizontal: 3
    },
    image: {
        width: 350,
        height: 100,
        margin: 2
    },
})