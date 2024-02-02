
import React from "react";
import Drawercomponent from "./Drawercomponent";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer, useNavigation } from '@react-navigation/native'

import Tabcontent from "../pages/Tabcontent";
import { TouchableOpacity, View } from "react-native";
import { Ionicons } from '@expo/vector-icons'


const Stack = createNativeStackNavigator();





const Navbars = () => {

    return (
        <>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{ headerShown: false }}
                    initialRouteName='Main'
                >
                    <Stack.Screen name="Main" component={Drawercomponent} />
                    {/* <Stack.Screen name="Gifttabs" component={Gifttabpages} /> */}

                    <Stack.Screen name="Tabcontent" component={Tabcontent}
                        options={({ navigation }) => ({
                            

                            headerShown: true,
                            headerLeft: () => (

                                <TouchableOpacity onPress={() => navigation.goBack()}>
                                    <View style={{ marginRight: 10, }}>
                                        <Ionicons name="chevron-back-sharp" size={28} color="grey" />
                                    </View>
                                </TouchableOpacity>
                            ),
                            headerTitleStyle: { fontSize: 17, fontWeight: 'bold' },
                            headerRight: () => (
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Ionicons name="search" size={24} color="black" style={{ marginRight: 10 }} />
                                    <Ionicons name="heart-outline" size={24} color="black" style={{ marginRight: 10 }} />
                                    <Ionicons name="cart-outline" size={24} color="black" />
                                </View>
                            ),

                        })}

                    />
                </Stack.Navigator>

            </NavigationContainer>

        </>
    )
}

export default Navbars;