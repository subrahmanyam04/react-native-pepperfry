import { StatusBar } from 'expo-status-bar';
import Navbars from './components/Navbars';
import { Provider } from 'react-redux';
import store from './Redux/store';
import controls from './components/Imports';
export default function App() {
  return (
    <> 
    <StatusBar style={controls.Platform.OS === "ios" ? "dark" : "light"}
        backgroundColor="#311432"  /> 
    <Provider store={store}>
    <Navbars/>
    </Provider>  
    </>
  );
}

