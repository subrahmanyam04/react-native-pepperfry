import React from "react";
import controls from "./Imports";
const Productbanner = ({ imgurl, height }) => {
    return (
        <controls.View style={styles.container}>
            <controls.Image source={{ uri: imgurl }} style={{ width: '100%', height: height, resizeMode: 'contain', }} />
        </controls.View>
    )
}
export default Productbanner
const styles = controls.StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 4
    },
})