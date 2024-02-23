import { createDrawerNavigator } from "@react-navigation/drawer";
import Aboutus from "../pages/Aboutus";
import Bottomtabnavigator from "./Bottomtabnavigator";
import { useNavigation } from '@react-navigation/native';
import controls from "./Imports";
const drawer = createDrawerNavigator();
const Drawercomponent = () => {
  const navigation = useNavigation();
  const renderHeaderRightIcon = () => (
    <controls.View style={{ flexDirection: 'row', marginRight: 10 }}>
      <controls.Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHlrY9jyo62tkc5DgLLGgmjIXWeDd9-JnQKKFYtkNZMg&s'}} style={[{height:24,aspectRatio: 1},controls.Platform.OS === "ios" ? {marginRight:"120%"} :{marginRight:"70%"}]}/>
      <controls.Ionicons name="search" size={24} color="black" style={{ marginRight: 10 }} />
      <controls.Ionicons name="heart-outline" size={24} color="black" style={{ marginRight: 10 }} />
      <controls.Ionicons name="cart-outline" size={24} color="black" />
    </controls.View>
  );
  return (
    <drawer.Navigator
      screenOptions={{
        drawerInactiveTintColor:'rgba(28,28,30,0.68)',
        drawerActiveTintColor: 'rgba(28,28,30,0.68)',
        drawerActiveBackgroundColor: 'white',
      }}>
      <drawer.Screen name='Home1' component={Bottomtabnavigator} options={{ headerTitle: '', headerRight: () => renderHeaderRightIcon() }} />
      <drawer.Screen name='Aboutus' component={Aboutus}
        options={() => ({
          headerTitle: 'About Us',
          headerLeft: () => (
            <controls.Ionicons
              name='arrow-back'
              color={'black'}
              size={24}
              onPress={() => navigation.goBack()}
              style={{ marginLeft: 10 }}
            />
          ),
        })}
      />
    </drawer.Navigator>
  )
}
export default Drawercomponent;