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
     
<View  >
<TextInput
  style={styles.inputText}
  placeholder="Email..." 
  placeholderTextColor="#003f5c"
  onChangeText={text => this.setState({email:text})}/>
  <TextInput
  style={styles.pass}
  placeholder="password..." 
  placeholderTextColor="#003f5c"
  onChangeText={text => this.setState({password:text})}/>

   <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>LOGIN</Text>
    </TouchableOpacity>
</View>
</>
);
}
}


const styles = StyleSheet.create({
  pass:{
    height:50,
  color:"white",
  width:"100%",
  backgroundColor:"#465881",
  borderRadius:25,
  height:50,
  marginBottom:180,
  justifyContent:"center",
  padding:20

  },
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
loginBtn:{
  width:"100%",
  backgroundColor:"#fb5b5a",
  borderRadius:25,
  height:50,
  alignItems:"center",
  justifyContent:"center",
  marginBottom:250
},
inputText:{
  height:50,
  color:"white",
  width:"100%",
  backgroundColor:"#465881",
  borderRadius:25,
  height:50,
  marginTop:320,
  justifyContent:"center",
  padding:20,
  paddingTop:10


},
inputView:{
  width:"80%",
  backgroundColor:"#465881",
  borderRadius:25,
  height:50,
  marginTop:350,
  justifyContent:"center",
  paddingTop:20
},
}
);

