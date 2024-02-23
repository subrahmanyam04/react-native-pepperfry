import { firebase } from '../firebase'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Settoken } from "../Redux/Actions/Tokenaction";
import controls from "./Imports";

const Logout = ({ Settoken, token }) => {
    const handleLogout = async () => {
        try {
            await firebase.auth().signOut();
            await AsyncStorage.clear();
            Settoken('');
        } catch (error) { console.error('Error during logout:', error.message); }
    };
    return (
        <controls.TouchableOpacity onPress={handleLogout} activeOpacity={1}>
            <controls.View style={styles.container}>
                <controls.View style={{ marginHorizontal: 20 }}>
                    <controls.Ionicons name='exit-outline' color={'black'} size={24} />
                </controls.View>
                <controls.View><controls.Text style={styles.logoutfont} >Logout</controls.Text></controls.View></controls.View >
        </controls.TouchableOpacity>
    )
}
const mapStateToProps = (state) => ({ token: state.Tokenreducer.token });
const mapDispatchToProps = { Settoken };
export default controls.connect(mapStateToProps, mapDispatchToProps)(Logout);
const styles = controls.StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        borderBottomColor: 'lightgrey',
        borderBottomWidth: 2,
        paddingVertical: 14,
        marginVertical: 5,
        backgroundColor: 'white',
        ...controls.Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 4,
            },
            android: {
                elevation: 3,
            },
        }),
    },
    logoutfont: {
        fontWeight: 'bold',
        fontSize: 18
    }
})