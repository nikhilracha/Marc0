import React, { Component } from 'react';
import { View, Text, StyleSheet,SafeAreaView } from 'react-native';
import {Card} from 'react-native-cards';
import PropTypes from 'prop-types';
import CardView from 'react-native-cardview'


class Blank extends Component {
    render() {
        return (
            <SafeAreaView style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
        <CardView
          cardElevation={2}
          cardMaxElevation={2}
          cornerRadius={5}
          style={styles.cardViewStyle}>

          <Text>
              Elevation 0
          </Text>
          <Text>Welcome Gold</Text>
        </CardView>
               
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
 
    MainContainer: {
   
      flex: 3,
      backgroundColor: 'black',
      justifyContent: 'center',
      alignItems: 'center',
   
    },
   
    cardViewStyle:{
   
      width: 250, 
      height: 150,
   
    },
   
    cardView_InsideText:{
   
      fontSize: 20, 
      color: 'black', 
      textAlign: 'center', 
      marginTop: 50    
   
    }
   
  });

export default Blank;