// import React, { Component } from 'react';
// import { View, Dimensions,Button,Text, SafeAreaView ,TouchableOpacity,StyleSheet} from 'react-native';
// import MIcon from 'react-native-vector-icons/MaterialCommunityIcons'
// const SCREEN_WIDTH = Dimensions.get('window').width;


// const Profile = () =>{
//         return (
//             <SafeAreaView >
//                 <View>
//                     <Text style={{textAlign:'center',fontWeight:'bold',fontSize:20}}>Profile</Text>
//                     <TouchableOpacity> 
//                         <MIcon name="account-circle" style={{paddingLeft:180}} size={50} />
//                     </TouchableOpacity>
//                         <View> 
//                             <Text style={{textAlign:'center',fontWeight:'bold',fontSize:20}}>Name</Text>
//                         </View>
//                         <View>
//                             <Text style={{textAlign:'center',fontWeight:'bold',fontSize:20}}>FIT ID</Text>
//                         </View>
//                         <View>
//                             <MIcon name="map-marker" style={{paddingLeft:190}} size={30} />
//                         </View>
//                     <Button style={{color:'black'}}
//                     title='LOGOUT' />
                    
//                 </View>
               
                
//             </SafeAreaView>
//         );
// }



// export default Profile;
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button
} from 'react-native';

export default class Profile extends Component {

  render() {
    return (
    <>
      <View style={styles.container}>
        <View style={styles.header}></View>
          <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
            <View style={styles.body}>
              <View>
                <Text>
                  FULL NAME:
                </Text>
                <Text style={styles.TextStyle}>Example of Underline Text</Text>

              </View>
              <View style={styles.bodyContent}>
                <TouchableOpacity style={styles.buttonContainer}>
                  <Text>CHANGE PASSWORD</Text> 
                </TouchableOpacity> 
            </View>
        </View>
      </View>
    </>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#00BFFF",
    height:200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
  name:{
    fontSize:22,
    color:"black",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
        color:'black'

  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
    color:'black'
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:10
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
  TextStyle: {
    textAlign: 'center',
    fontSize: 20,
    textDecorationLine: 'underline',
    //line-through is the trick
  },

});