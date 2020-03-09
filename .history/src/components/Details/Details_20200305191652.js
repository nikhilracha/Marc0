import React from 'react';
import {
    Image,
    View,
    Dimensions,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Text,
    Linking
  } from 'react-native';
const SCREEN_WIDTH = Dimensions.get('window').width;
// import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import {Card} from '@ui-kitten/components';
import { ScrollView } from 'react-native-gesture-handler';
// var image="https://s3.amazonaws.com/uifaces/faces/twitter/abdullindenis/128.jpg";

export const Details = (props) => {
  //Dont touch this
  const {navigation} = props;
  const name= navigation.getParam('name');
  const id= navigation.getParam('id');
  //till here
  console.log("In Detail page",name)
  return( 
    <>
    <ScrollView>
      <View>
        <Text>
          This is {name} Page
          Id of the gym is {id} 
          </Text>
          </View>
        {/* <Image style={styles.image} source={{uri:image}}/>

      <View style={styles.body}>
      <View style={styles.horizontal}>
        <MIcon name="clock" style={{paddingBottom:250,paddingLeft:10}} size={30} />
        <MIcon name="air-conditioner" style={{paddingBottom:250,paddingLeft:10}} size={30} /> 
        <MIcon name="shower-head" style={{paddingBottom:250,paddingLeft:10}} size={30}/>
        <MIcon name="currency-inr" style={{paddingBottom:250,paddingLeft:10}}size={30}/>
        <Text style={{paddingTop:10,fontSize:23,color:'black'}}>200</Text>
      </View>
      </View>
      <View>
      <Text>
        ABOUT
      </Text>
      <Text style={{fontSize:20}}>
        FitDock help of certified trainers and nutritionists and through the systematic continuous up gradiation of training modules based on the clients comfort and capability.
      </Text>
      </View> */}
      <View style={styles.con}>
        <TouchableOpacity style={styles.card}>
          <Image style={styles.cardImage} source={{uri:'https://s3.amazonaws.com/uifaces/faces/twitter/abdullindenis/128.jpg'}} />
          <Text>&nbsp;</Text>
          <Text style={{fontSize:28,fontFamily:'Times New Roman',fontWeight:'bold'}}>Fit Dock Ramanthapur</Text>
          <Text>&nbsp;&nbsp;</Text>
          <Text>
          <MIcon name="clock" style={{fontSize:22}}/>
          <Text>&nbsp;&nbsp;</Text>
          <Text style={{fontSize:18}}>5:30-21:00</Text>
          <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>
          {" "} {" "}{" "}{" "}{" "}{" "}{" "}{" "} 
          {/* <MIcon name="map-marker" style={{fontSize:25,color:'mediumpurple'}}/><Text style={{fontSize:20}}>Location</Text> */}
          </Text>
          <Text>&nbsp;&nbsp;</Text>
          <View style={{borderBottomColor: 'gray',borderBottomWidth: 1}}/>
          <Text>&nbsp;&nbsp;</Text>
          <Text>
          <MIcon name="star" style={{fontSize:30,color:'orange'}}/><Text style={{fontSize:18,fontWeight:'bold'}}>4.7</Text><Text>&nbsp;&nbsp;</Text><Text>&nbsp;&nbsp;</Text><Text>&nbsp;&nbsp;</Text><Text>&nbsp;&nbsp;</Text>
          <MIcon name="car" style={{fontSize:22,color:'mediumpurple'}}/><Text>&nbsp;&nbsp;</Text><Text>&nbsp;&nbsp;</Text><Text>&nbsp;&nbsp;</Text> <Text>&nbsp;&nbsp;</Text><Text>&nbsp;&nbsp;</Text>
          <MIcon name="air-conditioner" style={{fontSize:22,color:'mediumpurple'}}/><Text>&nbsp;&nbsp;</Text><Text>&nbsp;&nbsp;</Text><Text>&nbsp;&nbsp;</Text><Text>&nbsp;&nbsp;</Text><Text>&nbsp;&nbsp;</Text>
          <MIcon name="shower-head" style={{fontSize:22,color:'mediumpurple'}}/><Text>&nbsp;&nbsp;</Text><Text>&nbsp;&nbsp;</Text><Text>&nbsp;&nbsp;</Text><Text>&nbsp;&nbsp;</Text><Text>&nbsp;&nbsp;</Text>
          </Text>
          <Text>
          <Text style={{fontSize:18,padding:5,color:'gray'}}>Rating</Text>
          <Text style={{fontSize:18,color:'gray'}}>{" "}{" "}{" "}{" "}Parking</Text>
          <Text style={{fontSize:18,padding:5,color:'gray'}}>{" "}{" "}{" "}{" "}{" "}AC</Text>
          <Text style={{fontSize:18,padding:5,color:'gray'}}>{" "}{" "}{" "}{" "}Shower</Text>
          </Text>
        </TouchableOpacity>
      </View>
    <Text>&nbsp;&nbsp;</Text>
    <View style={{padding:20}}>
      <Text style={{fontSize:20,fontWeight:'800',color:'gray'}}>
        A B O U T
      </Text>
      <Text>&nbsp;&nbsp;</Text>
      <Text style={{fontSize:18,color:'gray',fontWeight:'400',alignContent:'center'}}>
        Fit Dock help of certified trainers and nutritionists, and through the systematic continuous up gradiationof training modules based on the clients comfort and capability.Fit Dock indeed helps take a body positive and comprehensive step towards acheiving fitness.Depending on customer's specific needs and goals,from
        burning excess body fat and toning to building muscles, from increasing core strength to improving one's cardio vascular
        system,Fit Dock has already made a name for itself a provider of value for money service, when it comes to
        fitness guidance.
      </Text>
      <Text>&nbsp;&nbsp;</Text>
      <View style={{borderBottomColor: 'gray',borderBottomWidth: 1}}/>
      <Text>&nbsp;&nbsp;</Text>
      <Text>&nbsp;&nbsp;</Text>
      <Text style={{fontSize:20,fontWeight:'800',color:'gray'}}>
        L O C A T I O N
      </Text>
      <Text>&nbsp;&nbsp;</Text>
      <Text>
      <View style={{flex: 1, flexDirection: 'row'}}>
      <Text style={{width: '100%', height: 150, backgroundColor: 'powderblue',flexWrap: 'wrap'}} />
      <Text style={{flexWrap: 'wrap'}} onPress={ ()=>
      Linking.openURL('https://www.google.com/maps/dir/17.3957164,78.53201/fit+dock+gym/@17.3976526,78.5296008,16z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3bcb9916c5970bb9:0xb34db7ca547d033!2m2!1d78.5384766!2d17.3999671')
       } >CLICK HERE</Text>
      </View>
      </Text>
     </View>
    
  </ScrollView>

  
    </>
  );
}

var styles = StyleSheet.create({
  con:{
    marginTop:20,
    backgroundColor:'#F5FCFF'
  },
  card:{
    backgroundColor:'#fff',
    marginBottom:10,
    marginLeft:'2%',
    width:'96%',
    shadowColor:'#000',
    shadowOpacity:0.2,
    shadowRadius:1,
    shadowOffset:{
      width:3,
      height:3
    }

  },
  cardImage:{
    width:'100%',
    height:180,
    // resizeMode:'stretch '
  },
  cardText:{
    padding:50,
    fontSize:16
  },
  image:{
    width: 420,
    height: 250,
    padding: 20,
    resizeMode: 'stretch'
  },
  horizontal: {
    paddingTop:5,
    flexDirection:'row',
    width: SCREEN_WIDTH - (80 + 10 + 20),
  },
  body: {
    marginLeft: 10,
    marginRight: 10,
    maxWidth: SCREEN_WIDTH - (80 + 10 + 20),
  }
});

export default Details;