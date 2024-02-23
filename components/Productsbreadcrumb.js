import React from "react";
import controls from "./Imports";

const Productsbreadcrumb = () => {
    const route = controls.useRoute();
    const named = [
        { id: 1, routename: "Home" },
        { id: 2, routename: route.params.secondname },
        { id: 3, routename: 'Sofas' },
        { id: 4, routename: route.params.screens },
        { id: 5, routename: "Chesterfield 3 Seater Sofas" },
    ]
    return (
        <controls.View style={styles.container}>
            <controls.View style={styles.innercontainer}>
                <controls.ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {named.map((data, index) => (
                        <controls.View style={styles.rowcontainer} key={data.id}>
                            <controls.Text style={{ color: 'black', fontSize: 14, fontWeight: '500' }}>{data.routename}</controls.Text>
                            {data.id === 5 ? "" : <controls.Entypo name='chevron-small-right' color={'grey'} size={18} />}
                        </controls.View>
                    ))}
                </controls.ScrollView>
            </controls.View>
        </controls.View>
    )
}
export default Productsbreadcrumb;
const styles = controls.StyleSheet.create({
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