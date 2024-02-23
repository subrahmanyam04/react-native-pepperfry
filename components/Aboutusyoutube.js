import React, { useState, useRef } from "react";
import YoutubeIframe from "react-native-youtube-iframe";
import { Dimensions } from 'react-native';
import controls from "./Imports";
const Aboutusyoutube = () => {
  const [playing, setPlaying] = useState(false);
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
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
    const marginHorizontal = 22; const videoWidth = screenWidth - 2 * marginHorizontal;
    return (
      <controls.View style={styles.yt}>
        <YoutubeIframe height={controls.Platform.OS === "ios" ? 160 : 180} width={videoWidth} play={playing} videoId={item.url} />
      </controls.View>
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
    <controls.View style={styles.container}>
      <controls.View style={styles.innercontainer}>
        <controls.View style={styles.headingtextcontainer}>
          <controls.Text style={styles.headingtext}>LIFE AT PEPPERFRY</controls.Text>
        </controls.View>
        <controls.FlatList ref={flatListRef} data={ytid} renderItem={renderVideoItem} keyExtractor={(item) => item.id} horizontal scrollEnabled={false} showsHorizontalScrollIndicator={false} />
        <controls.View style={styles.navigationButtons}>
          <controls.TouchableOpacity onPress={handlePrev} activeOpacity={1} >
            <controls.View style={styles.rowbuttoncontainer}>
              <controls.AntDesign name='left' color={'white'} size={14} />
            </controls.View>
          </controls.TouchableOpacity>
          <controls.TouchableOpacity onPress={handleNext} activeOpacity={1}>
            <controls.View style={styles.rowbuttoncontainer}>
              <controls.AntDesign name='right' color={'white'} size={14} />
            </controls.View>
          </controls.TouchableOpacity>
        </controls.View>
      </controls.View>
    </controls.View>
  );
};

const styles = controls.StyleSheet.create({
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
  },
  navigationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    bottom: controls.Platform.OS === "ios" ? "28%" : "30%",
  },
  rowbuttoncontainer: {
    width: 28,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    borderRadius: 15
  },
  headingtext: {
    fontSize: 26,
    fontWeight: '900',
    color: 'black',
    textAlign: 'center',
    marginBottom: 14
  },
  headingtextcontainer: {
    marginTop: 20
  }
});
export default Aboutusyoutube;
