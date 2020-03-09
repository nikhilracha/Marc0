import React from 'react';
import {
    Image,
    View,
    Dimensions,
    StyleSheet,
    SafeAreaView
  } from 'react-native';
const SCREEN_WIDTH = Dimensions.get('window').width;
// import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import {Card, Text } from '@ui-kitten/components';
var image="https://www.google.com/imgres?imgurl=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1190225451303743490%2FDnOfyYnC_400x400.jpg&imgrefurl=https%3A%2F%2Ftwitter.com%2Ffitdock%2Fstatus%2F1218072051988058113&tbnid=hexyGEIguBkMzM&vet=12ahUKEwjI6LSUjoPoAhXaEXIKHVqPCUMQMygNegUIARDnAQ..i&docid=j9ORLhEe4r3sXM&w=400&h=400&q=fit%20dock%20gym&ved=2ahUKEwjI6LSUjoPoAhXaEXIKHVqPCUMQMygNegUIARDnAQg";

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
        <Image style={styles.image} source={{uri:image}}/>
      </View>
      <View style={styles.body}>
      <View style={styles.horizontal}>
        <MIcon name="clock" style={{paddingTop:250,paddingLeft:10}} size={30} />
        <MIcon name="air-conditioner" style={{paddingTop:250,paddingLeft:10}} size={30} /> 
        <MIcon name="shower-head" style={{paddingTop:250,paddingLeft:10}} size={30}/>
        <MIcon name="currency-inr" style={{paddingTop:250,paddingLeft:10}}size={30}/>
        <Text style={{paddingTop:260,fontSize:23,color:'black'}}>200</Text>
      </View>
      <Text style={{fontSize:20,padding:20,paddingLeft:10}}>
        ABOUT
      </Text>
      <Text style={{fontSize:15}}>
        FitDock help of certified trainers and nutritionists and through the systematic continuous up gradiation of training modules based on the clients comfort and capability.
      </Text>
      </View>
    </SafeAreaView>
  );
}

var styles = StyleSheet.create({
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