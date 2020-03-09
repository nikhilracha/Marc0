import React from 'react';
import {
    Image,
    View,
    Dimensions,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Text
  } from 'react-native';
const SCREEN_WIDTH = Dimensions.get('window').width;
// import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import {Card} from '@ui-kitten/components';
// var image="https://s3.amazonaws.com/uifaces/faces/twitter/abdullindenis/128.jpg";

export const Details = (props) => {
  //Dont touch this
  const {navigation} = props;
  const name= navigation.getParam('name');
  const id= navigation.getParam('id');
  //till here
  console.log("In Detail page",name)
  return( 
    <SafeAreaView>
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
          <MIcon name="clock" style={{fontSize:25,marginBottom:35}}/><Text style={{marginLeft:35,paddingBottom:5}}>5:30-21:00</Text>
          
          <MIcon name="air-conditioner" /> 
          <MIcon name="shower-head" />
          <MIcon name="currency-inr" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
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