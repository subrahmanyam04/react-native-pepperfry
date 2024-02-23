import React, { lazy } from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Giftcardtabs = () => {
    const Tab = createMaterialTopTabNavigator();
    const Gifttabpage1 = lazy(()=> import("./Gifttabpage1"))
    const Gifttabpage2 = lazy(()=> import("./Gifttabpage2"))
    return (
        <Tab.Navigator
            screenOptions={{
                swipeEnabled: false,
                tabBarActiveTintColor: '#ff4500',
                tabBarInactiveTintColor: 'black', 
                tabBarIndicatorStyle: { backgroundColor: '#ff4500' }, 
                tabBarLabelStyle: { fontWeight: 'bold', fontSize: 14 },
                tabBarPressColor: 'transparent',
                tabBarPressOpacity: 1,
                tabBarStyle: { height: 50},
            }} >
            <Tab.Screen name="BUY GIFT CARD" component={Gifttabpage1} />
            <Tab.Screen name="REDEEM GIFT CARD" component={Gifttabpage2} />
        </Tab.Navigator>
    )
}

export default Giftcardtabs;




