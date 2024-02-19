
import { StatusBar } from 'expo-status-bar';
import Navbars from './components/Navbars';
import { Provider } from 'react-redux';
import store from './Redux/store';
import { Platform } from 'react-native';


export default function App() {
  console.log('hii')
  return (
    <>
    
    <StatusBar style={Platform.OS === "ios" ? "dark" : "light"}
        backgroundColor="#311432"  /> 
    <Provider store={store}>
    <Navbars/>
    </Provider>
      
    </>

  );
}

