import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Entypo } from '@expo/vector-icons'
import { useRoute } from "@react-navigation/native";

const Productsbreadcrumb = () => {

    const route = useRoute();
   
    const named = [
        {
            id: 1,
            routename: "Home"
        },
        {
            id: 2,
            routename: route.params.secondname
        },
        {
            id: 3,
            routename: 'Sofas'
        },
        {
            id: 4,
            routename: route.params.screens
        },
        {
            id: 5,
            routename: "'Chesterfield 3 Seater Sofas'"
        },
    ]

    return (
        <View style={styles.container}>
            <View style={styles.innercontainer}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {named.map((data, index) => (
                        <View style={styles.rowcontainer} key={data.id}>

                            <Text style={{ color: 'black', fontSize: 14, fontWeight: '500' }}>{data.routename}</Text>

                            {index === named.length - 1 ? '' : <Entypo name='chevron-small-right' color={'grey'} size={18} />
                            }
                        </View>

                    ))}

                </ScrollView>
            </View>
        </View>
    )
}

export default Productsbreadcrumb;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderBottomColor: 'lightgrey',
        borderBottomWidth: 2,
    },
    innercontainer: {
        flex: 1,
        marginHorizontal: 6,

    },
    rowcontainer: {
        flex: 1,
        flexDirection: 'row',
        marginVertical: 6,

    }
})