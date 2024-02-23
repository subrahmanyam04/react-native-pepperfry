import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Home from "../pages/Home";
import Myaccount from "../pages/Myaccount";
import Giftcard from "../pages/Giftcard";
import Categories from "../pages/Categories";
import Store from "../pages/Store";
import controls from "./Imports";
const bottom = createBottomTabNavigator();
const Bottomtabnavigator = () => {
    return (      
                <bottom.Navigator
                    screenOptions={{
                        tabBarStyle: { backgroundColor: 'white', width: '100%', alignSelf: 'center' },
                        tabBarActiveTintColor: '#ff4500',
                        tabBarInactiveTintColor: 'black',
                    }}
                >
                    <bottom.Screen name='Home' component={Home} options={{
                        headerShown: false,
                        tabBarIcon: ({ color, size }) => (
                            <controls.Ionicons name='home-outline' color={color} size={size} />
                        ),
                    }}
                    />
                    <bottom.Screen name='Myaccount' component={Myaccount}
                        options={{
                            headerShown: false, tabBarIcon: ({ color, size }) => (
                                <controls.Ionicons name='person-outline' size={size} color={color} />
                            ),
                        }} />
                    <bottom.Screen name='Giftcard' component={Giftcard}
                        options={{ 
                            headerShown: false,
                            tabBarIcon: ({ color, size }) => (
                                <controls.Ionicons name='gift-outline' size={size} color={color} />
                            ),
                        }} />
                    <bottom.Screen name='Store' component={Store}
                        options={{
                            headerShown: false,
                            tabBarIcon: ({ color, size }) => (
                                <controls.Ionicons name='location-outline' size={size} color={color} />
                            ),
                        }} />
                    <bottom.Screen name='Categories' component={Categories}
                        options={{
                            headerShown: false,
                            tabBarIcon: ({ color, size }) => (
                                <controls.Ionicons name='information-circle-outline' size={size} color={color} />
                            ),
                        }} />
                </bottom.Navigator>
    )
}
export default Bottomtabnavigator;