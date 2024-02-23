import React from "react";
import Drawercomponent from "./Drawercomponent";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Tabcontent from "../pages/Tabcontent";
import Products from "../pages/Products";
import controls from "./Imports";
const Stack = createNativeStackNavigator();
const Navbars = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Main' >
                <Stack.Screen name="Main" component={Drawercomponent} />
                <Stack.Screen name="Tabcontent" component={Tabcontent}
                    options={({ navigation }) => ({
                        headerShown: true,
                        headerLeft: () => (
                            <controls.TouchableOpacity onPress={() => navigation.goBack()}>
                                <controls.View style={{ marginRight: 8, }}>
                                    <controls.Ionicons name="chevron-back-sharp" size={28} color="grey" />
                                </controls.View>
                            </controls.TouchableOpacity>
                        ),
                        headerTitleStyle: { fontSize: 17, fontWeight: 'bold' },
                        headerTitleAlign: "left",
                        headerRight: () => (
                            <controls.View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <controls.Ionicons name="search" size={24} color="black" style={{ marginRight: controls.Platform.OS === "android" ? 10 : 0 }} />
                                <controls.Ionicons name="heart-outline" size={24} color="black" style={{ marginRight: controls.Platform.OS === "android" ? 10 : 0 }} />
                                <controls.Ionicons name="cart-outline" size={24} color="black" />
                            </controls.View>
                        ),
                    })} />
                <Stack.Screen name="Products" component={Products}
                    options={({ navigation }) => ({
                        headerShown: true,
                        headerTitle: '',
                        headerLeft: () => (
                            <controls.TouchableOpacity onPress={() => navigation.goBack()}>
                                <controls.View style={{ marginRight: 8, }}>
                                    <controls.Ionicons name="chevron-back-sharp" size={28} color="grey" />
                                </controls.View>
                            </controls.TouchableOpacity>
                        ),
                        headerTitleStyle: { fontSize: 17, fontWeight: 'bold' },
                        headerRight: () => (
                            <controls.View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <controls.Ionicons name="search" size={24} color="black" style={{ marginRight: 10 }} />
                                <controls.Ionicons name="heart-outline" size={24} color="black" style={{ marginRight: 10 }} />
                                <controls.Ionicons name="cart-outline" size={24} color="black" />
                            </controls.View>
                        ),
                    })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Navbars;