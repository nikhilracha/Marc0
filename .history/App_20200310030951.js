// import React from 'react';
// import BaseNavigator from "./src/navigation/BaseNavigator";
// import LoginScreen from "./src/components/LoginScreen/LoginScreen";
// import { View } from "react-native";
// import { createAppContainer } from 'react-navigation';
// import { ApplicationProvider,IconRegistry, Layout, Text } from '@ui-kitten/components';
// import { mapping, light as lightTheme } from '@eva-design/eva';
// import { EvaIconsPack } from '@ui-kitten/eva-icons';
// import AsyncStorage from '@react-native-community/async-storage';

// const storeData = async () => {
//       try {
//         await AsyncStorage.setItem("isLoggedIn", "true")
//       } catch (e) {
//         // saving error
//         console.log("error in storeData",e);
//       }
//     }
//     const getData = async () => {
//       try {
//         const value = await AsyncStorage.getItem("isLoggedIn")
//         if(value !== null) {
//           // value previously stored
//           console.log("vvv",value)
//           return value;
//         }
//       } catch(e) {
//         // error reading value
//         console.log("error in getData",e);
//       }
//     }    
// class App extends React.Component {
//   constructor(props){
//     super(props);
//     storeData();
//   }

//   render(){
    
//     const v = getData();
//     console.log("status",v);
    
//     return(
//       <React.Fragment>
//     <IconRegistry icons={EvaIconsPack} />
//     <ApplicationProvider mapping={mapping} theme={lightTheme}>
//     <View style={{
//     flex: 1,
//       backgroundColor: 'white'
//     }}>
//       {v=='true'?<BaseNavigator />:<LoginScreen />}
//       {/* <BaseNavigator /> */}
//       {/* <LoginScreen /> */}
//     </View>
//   </ApplicationProvider>
//   </React.Fragment>
//     );
//   }
// }



// export default App;

import 'react-native-gesture-handler';
import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Home} from  "./src/components/Home/Home"
import Icon from 'react-native-vector-icons/Ionicons';
import Blank from "./src/components/Common/Blank";
import Store from "./src/components/Store/Store";
import Events from "./src/components/Events/Events";
import Favourites from "./src/components/Favourites/Favourites";
import { AddButton } from "./src/components/Common/AddButton";
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeScreen" component={Home} />
      <Tab.Screen name="Events" component={Events} />
      <Tab.Screen name="Add" component={Blank} />
      <Tab.Screen name="Store" component={Store} />
      <Tab.Screen name="Favourites" component={Favourites} />
    </Tab.Navigator>
  );
}
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}
function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={MyTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;