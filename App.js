
import { StatusBar } from 'expo-status-bar';
import Navbars from './components/Navbars';
import { Provider } from 'react-redux';
import store from './Redux/store';


export default function App() {
  console.log('hii')
  return (
    <>
    
    <StatusBar  style="light" 
        backgroundColor="#311432"  /> 
    <Provider store={store}>
    <Navbars/>
    </Provider>
      
    </>

  );
}

