import axios from "axios";
import { BASE_URL } from "./Commonapi";

export const Getcard1Data = async () => {
    try {
        
      const response = await axios.get(`${BASE_URL}/mobilecard1.json`);
      console.log('i am response',response)
      const jsonData = response.data;
             console.log('i am json', jsonData)
      if (jsonData === null) {
        return [];
      } else {
        return Object.keys(jsonData).map((key) => ({ id: key, ...jsonData[key] }));
      }
    } catch (error) {
      console.log('error occured')
    }
  };