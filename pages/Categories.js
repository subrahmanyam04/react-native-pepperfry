import React from 'react';
import Catgeorylayout from "../components/Catgeorylayout";
import controls from "../components/Imports";

const Categories = () => {
    return (
            <controls.View style={styles.container}>
                <controls.PagesTopborder />
                <controls.SafeAreaView>
                <Catgeorylayout />
                </controls.SafeAreaView>
            </controls.View>
    )
}
export default Categories;
const styles = controls.StyleSheet.create({ container: { flex: 1, backgroundColor: 'white' }, });