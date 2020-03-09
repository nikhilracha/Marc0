import React from 'react';
import BaseNavigator from "./src/navigation/BaseNavigator";
import LoginScreen from "./src/components/LoginScreen/LoginScreen";
import { View } from "react-native";
import { ApplicationProvider,IconRegistry, Layout, Text } from '@ui-kitten/components';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import AsyncStorage from '@react-native-community/async-storage';

const storeData = async () => {
  try {
    await AsyncStorage.setItem("isLoggedIn", "false")
  } catch (e) {
    // saving error
    console.log("error in storeData",e);
  }
}

const getData = async () => {
  try {
    const value = await AsyncStorage.getItem("isLoggedIn")
    if(value == "false") {
      // value previously stored
      console.log("vvv",value)
      return (
        <React.Fragment>
<IconRegistry icons={EvaIconsPack} />
<ApplicationProvider mapping={mapping} theme={lightTheme}>
<View style={{
flex: 1,
  backgroundColor: 'white'
}}>
  <LoginScreen />

</View>
</ApplicationProvider>
</React.Fragment>
      );
    }
    else{
      <React.Fragment>
<IconRegistry icons={EvaIconsPack} />
<ApplicationProvider mapping={mapping} theme={lightTheme}>
<View style={{
flex: 1,
  backgroundColor: 'white'
}}>
  <BaseNavigator />

</View>
</ApplicationProvider>
</React.Fragment>
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

getData();

  }
}



export default App;