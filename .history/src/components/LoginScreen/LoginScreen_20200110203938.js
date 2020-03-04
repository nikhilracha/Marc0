import React from 'react';
import {SafeAreaView,View} from 'react-native';
import { Input } from '@ui-kitten/components';
const [value, setValue] = React.useState('');

const LoginScreen = () => (
   <SafeAreaView>
       <View>
       <Input
      placeholder='Place your Text'
      value={value}
      onChangeText={setValue}
    />
       </View>
   </SafeAreaView> 
);


export default LoginScreen;