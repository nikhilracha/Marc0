import React from 'react';
import {TouchableOpacity,View,StyleSheet,Text} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
export default class LoginScreen extends React.Component {
  state={
    email:"",
    password:""
  }
  render(){
    return (
      <>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
<View style={styles.inputView} >
<TextInput
  style={styles.inputText}
  placeholder="Email..." 
  placeholderTextColor="#003f5c"
  onChangeText={text => this.setState({email:text})}/>
   <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>LOGIN</Text>
    </TouchableOpacity>
</View>
</>
);
}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
loginBtn:{
  width:"80%",
  backgroundColor:"#fb5b5a",
  borderRadius:25,
  height:50,
  alignItems:"center",
  justifyContent:"center",
  marginTop:150,
  marginBottom:10
},
inputText:{
  height:50,
  color:"white"
},
inputView:{
  width:"80%",
  backgroundColor:"#465881",
  borderRadius:25,
  height:50,
  marginTop:350,
  justifyContent:"center",
  padding:20
},
}
);

