import { Image, StyleSheet, Text, TouchableOpacity, View, Animated, Platform, ScrollView, SafeAreaView, Linking, FlatList, Button, ImageBackground, TextInput, Modal, Alert,EvilIcons } from "react-native";
import { PagesBottomborder, PagesTopborder } from "../components/PagesTopandBottomborder";
import { connect } from "react-redux";
import { useNavigation, useRoute } from '@react-navigation/native';
import { AntDesign, Entypo, Ionicons, MaterialIcons, FontAwesome5, Feather, MaterialCommunityIcons, Octicons} from '@expo/vector-icons';
import { windowWidth } from "../Util/Dimensions";
const controls = {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Animated,
    Platform,
    ScrollView,
    SafeAreaView,
    PagesBottomborder,
    PagesTopborder,
    connect,
    useNavigation,
    useRoute,
    AntDesign,
    Linking,
    windowWidth,
    FlatList,
    Entypo,
    Ionicons,
    MaterialIcons,
    Button,
    ImageBackground,
    TextInput,
    FontAwesome5,
    Feather,
    MaterialCommunityIcons,
    Octicons,
    Modal,
    Alert,
    EvilIcons
}

export default controls