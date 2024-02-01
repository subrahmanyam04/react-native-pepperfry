
import React, { useEffect } from "react";
import { useNavigation, useRoute } from '@react-navigation/native';
import Tabcontentfooter from "../components/Tabcontentfooter";
import Tabcontentlayout from "../components/Tabcontentlayout";

const Tabcontent = () => {
    const route = useRoute();
    const navigation = useNavigation();

    useEffect(() => {
        const pagetitle = route.params.screen
        navigation.setOptions({
            title: pagetitle,
        })
    }, [])

    return (
        <>
            <Tabcontentlayout />
            <Tabcontentfooter />
        </>
    )
}

export default Tabcontent;