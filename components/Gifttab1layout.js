import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ImageBackground } from 'react-native';
import Gifttab1card from "./Gifttab1card";
import controls from "./Imports";
const Gifttab1layout = () => {
  return (
    <controls.View style={styles.container}>
      <controls.ImageBackground source={{ uri: 'https://ii1.pepperfry.com/media/catalog/studio/155/1695727144_erode_web.jpg' }} style={styles.image}>
        <controls.View>
          <controls.Text style={styles.headingtext}>HAPPY GIFTING TO YOU</controls.Text>
          <controls.Text style={styles.subheadingtext}>Spread The Joy By Selecting From The Following Options</controls.Text>
        </controls.View>
        <Gifttab1card />
      </controls.ImageBackground>
    </controls.View>
  )
}
export default Gifttab1layout;
const styles = controls.StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  },
  headingtext: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 70
  },
  subheadingtext: {
    color: 'black',
    textAlign: 'center',
  }
})