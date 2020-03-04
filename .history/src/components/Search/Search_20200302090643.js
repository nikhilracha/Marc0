import React, { Component }  from 'react';

export class Search extends React.Component {
    render() {
      return(
      <>
      <View style={{flex:1 }}>
        <View style={{height:100,backgroundColor:'#77b5fe',
        justifyContent:'center',paddingHorizontal:10,paddingTop:40}}>
          <View style={{height:40,backgroundColor:'white',
           flexDirection:'row',padding:5,alignItems:'center'}}>
            <IonIcon name="ios-search" style={{fontSize:24}} />
            <TextInput placeholder="Search" style={{fontSize:24,marginLeft:15}} />
          </View>
        </View>
      </View>
        </>
        ); 
    }
  }