import React from 'react';
import BaseNavigator from "./src/navigation/BaseNavigator";
import LoginScreen from "./src/components/LoginScreen/LoginScreen";
import { View } from "react-native";
import { createAppContainer } from 'react-navigation';
import { ApplicationProvider,IconRegistry, Layout, Text } from '@ui-kitten/components';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import AsyncStorage from '@react-native-community/async-storage';

const storeData = async () => {
      try {
        await AsyncStorage.setItem("isLoggedIn", "true")
      } catch (e) {
        // saving error
        console.log("error in storeData",e);
      }
    }
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem("isLoggedIn")
        if(value !== null) {
          // value previously stored
          console.log("vvv",value)
          return value;
        }
      } catch(e) {
        // error reading value
        console.log("error in getData",e);
      }
    }    
class App extends React.Component {
  constructor(props){
    super(props);
    storeData();
  }

  render(){
    
    const v = getData();
    console.log("status",v);
    
    return(
      <React.Fragment>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider mapping={mapping} theme={lightTheme}>
    <View style={{
    flex: 1,
      backgroundColor: 'white'
    }}>
      {v=='true'?<BaseNavigator />:<LoginScreen />}
      {/* <BaseNavigator /> */}
      {/* <LoginScreen /> */}
    </View>
  </ApplicationProvider>
  </React.Fragment>
    );
  }
}



export default createAppContainer(App);