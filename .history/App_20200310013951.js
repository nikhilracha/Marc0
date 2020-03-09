import React from 'react';
import BaseNavigator from "./src/navigation/BaseNavigator";
import LoginScreen from "./src/components/LoginScreen/LoginScreen";
import { View } from "react-native";
import { ApplicationProvider,IconRegistry, Layout, Text } from '@ui-kitten/components';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import AsyncStorage from '@react-native-community/async-storage';

 const App = () => {
  const {isLoggedIn,setIsLoggedIn} = React.useState(false);
  const storeData = async () => {
    try {
      await AsyncStorage.setItem('isLoggedIn', 'false')
    } catch (e) {
      // saving error
      console.log("error in storeData",e);
    }
  }
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('isLoggedIn')
      if(value !== null) {
        // value previously stored
        const d = JSON.stringify(value); 
        return d;
      }
    } catch(e) {
      // error reading value
      console.log("error in getData",e);
    }
  }
  storeData();
  const val=getData();
  console.log("val",val);
  return(
    <React.Fragment>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider mapping={mapping} theme={lightTheme}>
    <View style={{
    flex: 1,
      backgroundColor: 'white'
    }}>
      {false?<BaseNavigator />:<LoginScreen />}
      {/* <BaseNavigator /> */}
      {/* <LoginScreen /> */}
    </View>
  </ApplicationProvider>
  </React.Fragment>
  
);}



export default App;