import React from "react";
import { Settoken } from "../Redux/Actions/Tokenaction";
import controls from "./Imports";
const Myaccountprofile = ({ Settoken, token }) => {
  return (
    <controls.View>
      <controls.ImageBackground source={{ uri: 'https://ii1.pepperfry.com/media/catalog/studio/155/1695727144_erode_web.jpg' }} style={styles.image}>
        <controls.View style={styles.background}>
          <controls.View style={styles.profileimagecontainer}>
            <controls.Image source={{ uri: token.userProfile ? token.userProfile : "https://t3.ftcdn.net/jpg/05/60/26/08/360_F_560260880_O1V3Qm2cNO5HWjN66mBh2NrlPHNHOUxW.jpg" }} alt="hii" style={styles.profileimage} />
          </controls.View>
          <controls.View style={styles.profileinfor}>
            <controls.Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>{token.userName ? token.userName : "Undefined"}
              <controls.Text><controls.Feather name='edit-3' color={'white'} size={24} /></controls.Text></controls.Text>
            <controls.Text style={{ color: 'white', marginVertical: 4 }}>6304465771</controls.Text>
            <controls.Text style={{ color: 'white' }}>{token.userEmail}</controls.Text>
          </controls.View>
        </controls.View>
      </controls.ImageBackground>
    </controls.View>
  )
}
const mapStateToProps = (state) => ({ token: state.Tokenreducer.token });
const mapDispatchToProps = { Settoken };
export default controls.connect(mapStateToProps, mapDispatchToProps)(Myaccountprofile);
const styles = controls.StyleSheet.create({
  image: {
    width: '100%', // Width will take the full width of the container
    height: 150,
    resizeMode: 'contain'
  },
  background: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flexDirection: 'row'
  },
  profileimagecontainer: {
    marginHorizontal: 18,
    justifyContent: 'center'
  },
  profileimage: {
    height: 100,
    width: 100,
    borderRadius: 50,
    resizeMode: 'contain',
    borderColor: 'black',
    borderWidth: 1
  },
  profileinfor: {
    marginHorizontal: 5,
    justifyContent: 'center'
  }
})