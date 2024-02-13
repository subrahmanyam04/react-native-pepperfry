import React, { useEffect } from "react";
import { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, StatusBar, Image, TextInput, Button, TouchableOpacity } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons'
import { windowHeight } from "../Util/Dimensions";
import { EvilIcons } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage';
// import * as SecureStore from 'expo-secure-store';
import { firebase } from '../firebase'
import { connect } from 'react-redux';
import { Settoken } from "../Redux/Actions/Tokenaction";
import "expo-dev-client"
import { Entypo } from '@expo/vector-icons'
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

const Signupmodalform = ({ Settoken, token }) => {

    const [modalVisible, setModalVisible] = useState(false);
    const [login, setLogin] = useState(false);
    const [error, seterror] = useState(false);
    const [perror, setperror] = useState('');


    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const handleEmailChange = (text) => {
        setEmail(text);
    };

    console.log('token ok fine', token)
    const handlePasswordChange = (text) => {
        setPassword(text);
    };

    GoogleSignin.configure({
        webClientId: '518917201034-32cov3h39la2nqmtf12o90vvs0vv75ji.apps.googleusercontent.com',
    });

    useFocusEffect(
        // Hook from react-native navigation runs an effect when the screen comes into focus
        React.useCallback(() => {
            // memoization method doesn't call the function on every rendering
            // Check for the presence of token when the screen comes into focus
            if (!token) {
                setModalVisible(true);
            }
            // Cleanup function when the component is unmounted or loses focus
            // return () => {
            //     setModalVisible(false);
            // };
        }, [token])
    );

    const closeModal = () => {
        setModalVisible(false);
        setEmail('')
        setPassword('')
        seterror('')
        setperror('')
        navigation.navigate('Home')
    };

    const handlesignup = async (email, password) => {

        try {
            if (!email || !password) {
                Alert.alert('Please enter both email and password');
                return;
            }
            await firebase.auth().createUserWithEmailAndPassword(email, password)
            // Get the current user information
            const currentUser = firebase.auth().currentUser;
            console.log('i am current user in sidhddn', currentUser)
            const idToken = await currentUser.getIdToken();
            const userEmail = currentUser.email;
            const userName = currentUser.displayName;
            const userProfile = currentUser.photoURL
            // Store the user token and email in AsyncStorage
            const authData = JSON.stringify({ idToken, userEmail, userName, userProfile });
            await AsyncStorage.setItem('userAuthData', authData);
            retrieveUserAuthData()
            setEmail('')
            setPassword('')
            console.log('ok')
        } catch (error) {
            Alert.alert('User credentials already exists please signin')
            console.log('its error')
            setLogin(true)
        }
    }

    useEffect(() => {
        retrieveUserAuthData()
    }, [])

    const retrieveUserAuthData = async () => {
        try {
            const storedToken = await AsyncStorage.getItem('userAuthData');
            const storedAuthDataArray = JSON.parse(storedToken);
            console.log('i am ..............', storedAuthDataArray)
            Settoken(storedAuthDataArray);
        } catch (error) {
            console.error('Error retrieving user authentication data:', error);
            throw error;
        }
    }


    const handlesignin = async (email, password) => {
        try {
            // Check if email and password are provided
            if (!email || !password) {
                Alert.alert('please enter both email amd password')
                return;
            }
            await firebase.auth().signInWithEmailAndPassword(email, password)
            // Get the current user information
            const currentUser = firebase.auth().currentUser;
            console.log('i am current user in sidhddn', currentUser)
            const idToken = await currentUser.getIdToken();
            const userEmail = currentUser.email;
            const userName = currentUser.displayName
            const userProfile = currentUser.photoURL
            // Store the user token and email in AsyncStorage
            const authData = JSON.stringify({ idToken, userEmail, userName, userProfile });
            await AsyncStorage.setItem('userAuthData', authData);
            retrieveUserAuthData()
            setEmail('')
            setPassword('')
            setModalVisible(false)
            console.log('ok')
        } catch (error) {
            Alert.alert('you have entered wrong email or password')
            // seterror(true)
            console.log('its error')
        }
    }

    async function onGoogleButtonPress() {
        // Check if your device supports Google Play
        // await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
        // Get the users ID token
        const { idToken } = await GoogleSignin.signIn();
        console.log('this google sign in token', idToken)
        const currentUser = auth().currentUser;
        console.log("iam currentuser",currentUser)
        // // const idToken2 = await currentUser.getIdToken;
        const userEmail = auth().currentUser.email;
        console.log('iam useremail',userEmail)
        const userName = auth().currentUser.displayName
        console.log('iam useremail',userName)
        const userProfile = auth().currentUser.photoURL
        console.log('iam useremail',userProfile)
        // console.log('this google sign in token2', idToken2)
        const authData = JSON.stringify({ idToken, userEmail, userName, userProfile });
        await AsyncStorage.setItem('userAuthData', authData);

        // Retrieve the stored token and update the state
        // const storedToken = await AsyncStorage.getItem('userAuthData'); 
        // Settoken(storedToken);
        retrieveUserAuthData()
        setEmail('')
        setPassword('')
        setModalVisible(false)
        console.log('ok')
        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);

        // Sign-in the user with the credential
        const user = auth().signInWithCredential(googleCredential);
        user.then((users) => {
            console.log("i am the user",users);
        })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={closeModal}>

            <View style={styles.modalBackground}>
                <View style={styles.modalContainer}>

                    <View style={styles.iconcontainer}>
                        <Feather onPress={closeModal} name="x" color={'red'} size={30} />
                    </View>

                    {/* Actual form starts from here */}

                    <View style={styles.subofmaincontianer}>
                        {/* image */}
                        <View style={styles.imagecontainer}>
                            <Image source={{ uri: 'https://ii1.pepperfry.com/assets/7e9657cd-cb98-40cf-989d-5e5c1d9d4fa5.jpg' }} style={{ width: '100%', height: 100, resizeMode: 'contain' }} />
                        </View>

                        <View>
                            <Text style={styles.modalText}>Sign Up Or Log In</Text>
                        </View>

                        <View style={{ marginBottom: 10 }}>
                            <TextInput
                                style={styles.input}

                                onChangeText={handleEmailChange}
                                value={email}
                                placeholder="Enter Your Mail Id"
                                caretHidden={false} // Show the cursor
                                cursorColor='#ff4500'  // Set the cursor color to red
                            // keyboardType="numeric"
                            />
                            {error ? <Text>please enter the valid mail id</Text> : ""}
                        </View>
                        <View style={{ marginBottom: 10 }}>
                            <TextInput
                                style={styles.input}
                                onChangeText={handlePasswordChange}
                                value={password}
                                placeholder="Enter Password"
                                caretHidden={false} // Show the cursor
                                cursorColor='#ff4500'
                                secureTextEntry={!showPassword} //password text is here
                            />
                            <View style={{ position: 'absolute', top: 0, bottom: 10, left: 0, right: 10, justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                                {showPassword ? (
                                    <Entypo name='eye' color={'black'} size={18} onPress={toggleShowPassword} />
                                ) : (
                                    <Entypo name='eye-with-line' color={'black'} size={18} onPress={toggleShowPassword} />
                                )}


                            </View>
                        </View>

                        <View>
                            {login ? <Button color={'#ff4500'} onPress={() => handlesignin(email, password)} title="Sign In" /> : <Button onPress={() => handlesignup(email, password)} title="Sign Up" />}
                        </View>

                        <View style={styles.signverficmethodscontainer}>
                            <Text style={styles.signverficmethods}>If you don't have an account
                                <Text style={styles.signtextbuttons} onPress={() => setLogin(false)}>  SIGN UP </Text>
                                <Text> else </Text>
                                <Text style={styles.signtextbuttons} onPress={() => setLogin(true)}> SIGN IN</Text>
                            </Text>
                        </View>


                        <View style={styles.termstextcontainer}>
                            <Text style={{ textAlign: 'center' }}>By continuing, you agree to our Terms & Conditions</Text>
                            <Text style={[styles.termstext, { textAlign: 'center' }]}>Or</Text>
                            <Text style={{ textAlign: 'center' }}>continue with</Text>
                        </View>


                        {/* google sign in button */}

                        <View>
                            <TouchableOpacity activeOpacity={1}
                                onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}>
                                <View style={styles.googlecontainer}>

                                    <Image source={{ uri: 'https://w7.pngwing.com/pngs/989/129/png-transparent-google-logo-google-search-meng-meng-company-text-logo-thumbnail.png' }} style={{ width: 40, height: 35, resizeMode: 'contain' }} />

                                    <Text style={styles.socialtext}> GOOGLE</Text>
                                </View>
                            </TouchableOpacity>
                        </View>


                        {/* Facebook sign in button */}

                        <View>
                            <TouchableOpacity activeOpacity={1}>
                                <View style={styles.googlecontainer}>

                                    <EvilIcons name='sc-facebook' color={'blue'} size={40} />
                                    <Text style={styles.socialtext}>FACEBOOK</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </View>
        </Modal>
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

export default connect(mapStateToProps, mapDispatchToProps)(Signupmodalform);




const styles = StyleSheet.create({

    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the alpha value for the desired fade effect
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    modalContainer: {
        width: '100%',
        backgroundColor: 'white',
        marginTop: windowHeight - 700
        // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginTop: 25,
        marginBottom: 15,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#9D6A37',
        fontSize: 22
    },
    subofmaincontianer: {
        // flex:1,
        flexDirection: 'column',
        marginHorizontal: 8,
        marginBottom: 120
    },
    iconcontainer: {
        alignItems: 'flex-end'
    },
    imagecontainer: {
        marginHorizontal: 10
    },
    input: {
        height: 45,
        marginTop: 5,
        borderWidth: 1,
        borderColor: 'grey',
        fontSize: 18,
        padding: 12,
        // marginBottom: 15
    },
    onfocusinput: {
        borderColor: 'black',
        borderWidth: 1
    },
    signverficmethodscontainer: {
        marginVertical: 10
    },
    signverficmethods: {
        textAlign: 'center',
        fontSize: 16,
        color: 'black'
    },
    signtextbuttons: {
        color: 'blue'
    },
    termstextcontainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 20
    },
    termstext: {
        marginVertical: 2
    },
    googlecontainer: {
        // flex:1,
        // alignItems:'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'black',

        height: 40,
        marginBottom: 10
    },
    socialtext: {
        color: 'black',
        marginTop: 6,
        fontWeight: '700',
        fontSize: 16
    },


});