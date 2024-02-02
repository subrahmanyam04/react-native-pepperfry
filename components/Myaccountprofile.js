import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { ImageBackground } from 'react-native';
import { Feather } from '@expo/vector-icons'
import { Settoken } from "../Redux/Actions/Tokenaction";
import { connect } from "react-redux";
const Myaccountprofile = ({Settoken,token}) => {
  return (

    <View>

      <ImageBackground source={{ uri: 'https://ii1.pepperfry.com/media/catalog/studio/155/1695727144_erode_web.jpg' }} style={styles.image}>
        <View style={styles.background}>
          <View style={styles.profileimagecontainer}>
            {/* profile image */}
            <Image source={{uri: token.userProfile ? token.userProfile :"https://t3.ftcdn.net/jpg/05/60/26/08/360_F_560260880_O1V3Qm2cNO5HWjN66mBh2NrlPHNHOUxW.jpg"}} alt="hii" style={styles.profileimage}/>
          </View>
          <View style={styles.profileinfor}>
            <Text style={{color:'white',fontSize:18,fontWeight:'bold'}}>{token.userName ? token.userName : "Undefined"} 
            <Text>  <Feather name='edit-3' color={'white'} size={24} /></Text>  
            </Text>
            <Text style={{color:'white',marginVertical:4}}>6304465771</Text>
            <Text style={{color:'white'}}>{token.userEmail}</Text>
          </View>
        </View>

      </ImageBackground>
    </View>

  )
}

const mapStateToProps = (state) => ({

  // sliderdata: state.Sliderreducer.sliderdata,
  // card1data: state.Card1reducer.card1data,
 token : state.Tokenreducer.token
  
  // selectedAboutCard: state.Reducer1.selectedAboutCard
  
});

const mapDispatchToProps = {
  Settoken
    // setSelectedAboutCard,
};


export default connect(mapStateToProps, mapDispatchToProps)(Myaccountprofile);
const styles = StyleSheet.create({
  image: {

    width: '100%', // Width will take the full width of the container
    height: 150,
    // flex:1,
    resizeMode: 'contain'
  },

  background: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flexDirection: 'row'
  },
  profileimagecontainer :{
    marginHorizontal:18,
    justifyContent:'center'
  },
  profileimage :{
    height:100,
    width:100,
    borderRadius:50,
    resizeMode:'contain',
    borderColor:'black',
    borderWidth:1
  },
  profileinfor:{
    marginHorizontal:5,
    justifyContent:'center'
  }

})