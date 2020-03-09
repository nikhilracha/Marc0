import React from 'react';
import {SafeAreaView,View} from 'react-native';
// import { Input,Icon, Button,Layout } from '@ui-kitten/components';
// const [value, setValue] = React.useState('0');
//   const [secureTextEntry, setSecureTextEntry] = React.useState(true);

//   const onIconPress = () => {
//     setSecureTextEntry(!secureTextEntry);
//   };

//   const renderIcon = (style) => (
//     <Icon {...style} name={secureTextEntry ? 'eye-off' : 'eye'}/>
//   );
  
// const LoginScreen = () => (
//    <SafeAreaView>
//        <View>
//         <Text>
//             Email Id:
//         </Text>
//             <Input
//              label='Email'
//              placeholder='john.doe@example.com'
//              value={value}
//              onChangeText={setValue}
//             />
//         <Text>
//             <Input
//                 value={value}
//                 placeholder='********'
//                 icon={renderIcon}
//                 secureTextEntry={secureTextEntry}
//                 onIconPress={onIconPress}
//                 onChangeText={setValue}
//             />
//         </Text>
//         <Layout style={styles.container}>
//             <Button style={styles.button} appearance='filled'>LOGIN</Button>
//         </Layout>
//        </View>
//    </SafeAreaView> 
// );

// const styles = StyleSheet.create({
//     container: {
//       flexDirection: 'row',
//       flexWrap: 'wrap',
//     },
//     button: {
//       margin: 8,
//     },
//   });

export default class App extends React.Component {
  render(){
    return (
state={
  email:"",
  password:""
}

<View style={styles.inputView} >
<TextInput  
  style={styles.inputText}
  placeholder="Email..." 
  placeholderTextColor="#003f5c"
  onChangeText={text => this.setState({email:text})}/>
</View>
    );}}
const styles = StyleSheet.create({
loginBtn:{
  width:"80%",
  backgroundColor:"#fb5b5a",
  borderRadius:25,
  height:50,
  alignItems:"center",
  justifyContent:"center",
  marginTop:40,
  marginBottom:10
});

export default LoginScreen;