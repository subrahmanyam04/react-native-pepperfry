import React, { useState, useRef } from "react";
import { View, FlatList, TouchableOpacity, Alert, Text, StyleSheet } from "react-native";
import YoutubeIframe from "react-native-youtube-iframe";
import { AntDesign } from '@expo/vector-icons'
import { Dimensions } from 'react-native';
const Aboutusyoutube = () => {
  const [playing, setPlaying] = useState(false);
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log('i am current index', currentIndex)
  const ytid = [
    {
      id: 1,
      url: "4BS-ztrnpoQ",
    },
    {
      id: 2,
      url: "Ptv4QG_euqQ",
    },
    {
      id: 3,
      url: "sbT2cMxE-f0",
    },
    {
      id: 4,
      url: "01RxyajzFSk",
    },
  ];

  const renderVideoItem = ({ item }) => {
    const screenWidth = Dimensions.get('window').width;
    console.log('i am screen', screenWidth)
    const marginHorizontal = 22;
    const videoWidth = screenWidth - 2 * marginHorizontal;
    console.log('i am videoWidth', videoWidth)
    return (
      <View style={styles.yt}>
        <YoutubeIframe
          height={195}
          width={videoWidth}
          play={playing}
          videoId={item.url}
        />
      </View>
    );
  };

  const handleNext = () => {
    if (currentIndex < ytid.length - 1) {
      setCurrentIndex(currentIndex + 1);
      flatListRef.current.scrollToIndex({
        index: currentIndex + 1,
        animated: true,
      });
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      flatListRef.current.scrollToIndex({
        index: currentIndex - 1,
        animated: true,
      });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.innercontainer}>
        <View style={styles.headingtextcontainer}>
          <Text style={styles.headingtext}>
            LIFE AT PEPPERFRY
          </Text>
        </View>
        <FlatList
          ref={flatListRef}
          data={ytid}
          renderItem={renderVideoItem}
          keyExtractor={(item) => item.id}
          horizontal
          scrollEnabled={false}
          showsHorizontalScrollIndicator={false} // Set to false to hide scroll indicator
        />
        <View style={styles.navigationButtons}>
          
          <TouchableOpacity onPress={handlePrev} activeOpacity={1} >
          <View style={styles.rowbuttoncontainer}>
            <AntDesign name='left' color={'white'} size={14} />
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={handleNext} activeOpacity={1}>
          <View style={styles.rowbuttoncontainer}>
            <AntDesign name='right' color={'white'} size={14} />
            </View>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innercontainer: {
    flex: 1,
    marginHorizontal: 22,
  },
  yt: {
    flex: 1,
    borderRadius: 10,
    overflow: 'hidden',
    borderRadius: 10,
    overflow: 'hidden',
  },
  navigationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    bottom: 118,
  },
  rowbuttoncontainer:{
      width:28,
      height:28,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      borderRadius:15
  },
  headingtext:{
    fontSize:32,
    fontWeight:'bold',
    color:'black',
    textAlign:'center',
    marginBottom:14
  },
  headingtextcontainer:{
    marginTop:20
  }

});

export default Aboutusyoutube;
