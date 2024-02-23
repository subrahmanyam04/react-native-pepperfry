import React, { useEffect } from "react";
import Tabcontentfooter from "../components/Tabcontentfooter";
import Tabcontentlayout from "../components/Tabcontentlayout";
import controls from "../components/Imports";

const Tabcontent = () => {
    const route = controls.useRoute();
    const navigation = controls.useNavigation();

    useEffect(() => {
        const pagetitle = route.params.screen
        navigation.setOptions({ title: pagetitle, headerTitleAlign: "left" })
    }, [])

    return (
        <controls.SafeAreaView>
            <Tabcontentlayout />
            <Tabcontentfooter />
        </controls.SafeAreaView>
    )
}
export default Tabcontent;