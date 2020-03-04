import React from 'react';
import {SafeAreaView,View} from 'react-native';
import { Input,Icon } from '@ui-kitten/components';
const [value, setValue] = React.useState('');
const [value, setValue] = React.useState('');
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);

  const onIconPress = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const renderIcon = (style) => (
    <Icon {...style} name={secureTextEntry ? 'eye-off' : 'eye'}/>
  );
const LoginScreen = () => (
   <SafeAreaView>
       <View>
        <Text>
            Email Id:
        </Text>
            <Input
             label='Email'
             placeholder='john.doe@example.com'
             value={value}
             onChangeText={setValue}
            />
        <Text>
            <Input
                value={value}
                placeholder='********'
                icon={renderIcon}
                secureTextEntry={secureTextEntry}
                onIconPress={onIconPress}
                onChangeText={setValue}
            />
        </Text>
       </View>
   </SafeAreaView> 
);


export default LoginScreen;