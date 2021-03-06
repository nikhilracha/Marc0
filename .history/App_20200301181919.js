import React from 'react';
import BaseNavigator from "./src/navigation/BaseNavigator";
import { View } from "react-native";
import { ApplicationProvider,IconRegistry, Layout, Text } from '@ui-kitten/components';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
 const App = () => (

    <React.Fragment>
    <IconRegistry icons={EvaIconsPack} />
  <ApplicationProvider mapping={mapping} theme={lightTheme}>
    <View style={{
    flex: 1,
      backgroundColor: 'white'
    }}>
      <BaseNavigator />
    </View>
    <View>
      <TextInput />
      <Button 
        title="Search"
        onPress={() => console.log('button was pressed')}
      />
    </View>
  </ApplicationProvider>
  </React.Fragment>
  
);

export default App;