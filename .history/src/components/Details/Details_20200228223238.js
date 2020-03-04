// import React from 'react';
// import {
//     Image,
//     View,
//     Dimensions,
//     StyleSheet,
//     SafeAreaView
//   } from 'react-native';
// const SCREEN_WIDTH = Dimensions.get('window').width;

// // import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
// import MIcon from 'react-native-vector-icons/MaterialCommunityIcons'
// import {
//     Card,
//     Text,
//   } from '@ui-kitten/components';

//   var image="https://s3.amazonaws.com/uifaces/faces/twitter/abdullindenis/128.jpg";

// export const Details = (props) => {
//   //Dont touch this
//   const {navigation} = props;
//   const name= navigation.getParam('name');
//   const id= navigation.getParam('id');
//   //till here
//   console.log("In Detail page",name)
//   return( 
//     <SafeAreaView>
//       <View>
//         <Text>
//           This is {name} Page
//           Id of the gym is {id} 
            
//         </Text>
//         <Image 
//               style={styles.image} source={{uri:image}} 
//             />
//       </View>
//       <View style={styles.body}>
//       <View style={styles.horizontal}>
//         <MIcon name="clock" style={{paddingTop:250,paddingLeft:10}} size={30} />
//       <MIcon name="air-conditioner" style={{paddingTop:250,paddingLeft:10}} size={30} /> 
//         <MIcon name="shower-head" style={{paddingTop:250,paddingLeft:10}} size={30}/>
//         <MIcon name="currency-inr" style={{paddingTop:250,paddingLeft:10}}size={30}/>
//         <Text style={{paddingTop:260,fontSize:23,color:'black'}}>200</Text>
//       </View>
//       <Text style={{fontSize:20,padding:20,paddingLeft:10}}>
//         ABOUT
//       </Text>
//       <Text style={{fontSize:15}}>
//         FitDock help of certified trainers and nutritionists and through the systematic continuous up gradiation of training modules based on the clients comfort and capability.
//       </Text>
//       </View>
//     </SafeAreaView>
//   );
// }

// var styles = StyleSheet.create({
//   image:{
//     width: 420,
//     height: 250,
//     padding: 20,
//     resizeMode: 'stretch'
//   },
//   horizontal: {
//     paddingTop:5,
//     flexDirection:'row',
//     width: SCREEN_WIDTH - (80 + 10 + 20),
//   },
//   body: {
//     marginLeft: 10,
//     marginRight: 10,
//     maxWidth: SCREEN_WIDTH - (80 + 10 + 20),
//   }
// });

// export default Details;
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

export default class Profile extends Component {

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>John Doe</Text>
              <Text style={styles.info}>UX Designer / Mobile developer</Text>
              <Text style={styles.description}>Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum electram expetendis, omittam deseruisse consequuntur ius an,</Text>
              
              {/* <TouchableOpacity style={styles.buttonContainer}>
                <Text>Opcion 1</Text>  
              </TouchableOpacity>              
              <TouchableOpacity style={styles.buttonContainer}>
                <Text>Opcion 2</Text> 
              </TouchableOpacity> */}
            </View>
        </View>
      </View>
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
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
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
});