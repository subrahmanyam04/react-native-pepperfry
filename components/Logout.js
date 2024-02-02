import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { firebase } from '../firebase'
import { Platform } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Settoken } from "../Redux/Actions/Tokenaction";
import { connect } from "react-redux";
import { Ionicons } from '@expo/vector-icons'
const Logout = ({ Settoken, token }) => {

    console.log('token in my account', token)


    const handleLogout = async () => {
        try {
            await firebase.auth().signOut();
            // Remove the stored data securely using AsyncStorage
            await AsyncStorage.clear();
            console.log('Token and email removed successfully!');
            Settoken('');
        } catch (error) {
            console.error('Error during logout:', error.message);
        }
    };
    return (

        <>
           
                <TouchableOpacity onPress={handleLogout} activeOpacity={1}>
                 <View style={styles.container}>
            <View style={{ marginHorizontal: 20 }}>
                    <Ionicons name='exit-outline' color={'black'} size={24} />
                </View>
                <View>
                    <Text style={styles.logoutfont} >Logout</Text>
                </View>
                </View >
            </TouchableOpacity>
        

          

     
          </> 
    )
}

const mapStateToProps = (state) => ({

    // sliderdata: state.Sliderreducer.sliderdata,
    // card1data: state.Card1reducer.card1data,
    token: state.Tokenreducer.token

    // selectedAboutCard: state.Reducer1.selectedAboutCard

});

const mapDispatchToProps = {
    Settoken
    // setSelectedAboutCard,

};


export default connect(mapStateToProps, mapDispatchToProps)(Logout);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        borderBottomColor: 'lightgrey',
        borderBottomWidth: 2,
        paddingVertical: 14,
        marginVertical: 5,
        backgroundColor: 'white',
        // ...Platform.select({
        //     ios: {
        //       shadowColor: 'black',
        //       shadowOffset: { width: 0, height: 2 },
        //       shadowOpacity: 0.2,
        //       shadowRadius: 4,
        //     },
        //     android: {
        //       elevation: 3,
        //     },
        //   }),

    },
    logoutfont: {
        fontWeight: 'bold',
        fontSize: 18
    }
})