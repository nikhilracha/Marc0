import React from 'react';
import {View,TextInput }from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable'; 

export class Search extends React.Component {
    render() {
      return(
     <View style={{flex:1 }}>
        <View style={{height:80,backgroundColor:'#77b5fe',
        justifyContent:'center',paddingTop:40}}>
          <Animatable.View animation="slideInRight" duration={2000} style={{height:40,backgroundColor:'white',
           flexDirection:'row',padding:5,alignItems:'center',marginTop:2}}>
            <IonIcon name="ios-search" style={{fontSize:24}} />
            <TextInput placeholder="Search" style={{fontSize:24,marginLeft:15}} />
          </Animatable.View>
        </View>
      </View>
    ); 
    }
  }

  export default Search;



   