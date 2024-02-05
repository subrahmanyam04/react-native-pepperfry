import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Productsbreadcrumb from "./Productsbreadcrumb";
import Productsimageslider from "./Productsimageslider";
import Productsselectcolor from "./Productsselectcolor";
import Productscostdetails from "./Productscostdetails";


const Productslayout = () => {

    const [aboutcard,Setaboutcard] = useState([''])

    useEffect(()=>{
        retrieveData();
     
    },[])
// Retrieve the data
const retrieveData = async () => {
    try {
      const storedDataString = await AsyncStorage.getItem('aboutcarddata');
      if (storedDataString !== null) {
        // Parse the JSON string back to an object
        const storedData = JSON.parse(storedDataString);
        console.log('Data retrieved successfully:', storedData);
        Setaboutcard(storedData)
        await AsyncStorage.removeItem('aboutcarddata');
        console.log('Local storage cleared');
    
      } else {
        console.log('No data found');
      }
    } catch (error) {
      console.error('Error retrieving data:', error);
    }
  };

    return(
        <>
     
       {aboutcard.map((data)=>(
        <Text>{data.name}</Text>
       ))}

      <ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{backgroundColor:'white'}}>
        <Productsbreadcrumb/>
        <Productsimageslider/>
        <Productsselectcolor/>
        <Productscostdetails/>
      </ScrollView>

       </>
    )
}

export default Productslayout