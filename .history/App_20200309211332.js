import React from 'react';
import BaseNavigator from "./src/navigation/BaseNavigator";
import { View } from "react-native";
import { ApplicationProvider,IconRegistry, Layout, Text } from '@ui-kitten/components';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { FlatList } from 'react-native-gesture-handler';
import LoginScreen from '../LoginScreen/LoginScreen';
 const App = () => (
 
    <React.Fragment>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider mapping={mapping} theme={lightTheme}>
    <View style={{
    flex: 1,
      backgroundColor: 'white'
    }}>
      <BaseNavigator />
      <LoginScreen />
    </View>
  </ApplicationProvider>
  </React.Fragment>
  
);

export default App;