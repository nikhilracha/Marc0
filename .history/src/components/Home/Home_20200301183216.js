import React, { Component }  from 'react';
import { View,Image, Text,Dimensions, SafeAreaView,StyleSheet,Button, TouchableOpacity, TextInput,KeyboardAvoidingView, SectionList,FlatList,StatusBar} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons'
const SCREEN_WIDTH = Dimensions.get('window').width;
import Details from '../Details/Details';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import {
  Icon,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';
import Profile from '../Profile/Profile';
const Item = (props) => {

  console.log("ooo",props)
  const _itemClick= (itemname)=> {
    props.navigation.navigation.navigate("DetailsScreen",{name:itemname})
  }
  const image="https://s3.amazonaws.com/uifaces/faces/twitter/abdullindenis/128.jpg";
  return(
    <View> 
      <View style={styles.listItem}>
        <TouchableOpacity
          style={styles.button}
          onPress={()=>_itemClick(props.data.store_name)}>
          <Image style={styles.image} source={{ uri: image }} />
        </TouchableOpacity>
        <View style={styles.body}>
          <View style={styles.horizontal}>
            <Text style={styles.name}>{props.data.store_name} </Text>
            <Text style={{paddingLeft:130,fontSize:12}}>{props.data.distance}KM</Text>
          </View>
          <View>
            <Text style={styles.description} >{props.data.place}</Text>
          </View>
          <View style={styles.horizontal}>
          <IonIcon name="ios-star"  size={20}/>
          <Text style={styles.description}>
            {' '}{props.data.rating}
          </Text>
        <TouchableOpacity onPress={()=>{props.navigation.navigation.navigate("DetailsScreen",{id:props.data._id})}}>
          <Text style={{color:'gray',fontSize:18,paddingLeft:155}}>Details</Text>
        </TouchableOpacity>
        

        
          </View>
        </View>
      </View>
    </View>
  );
 }

const HomeComponent = (props) => { 
  console.log("propss",props)
  const pdata =[
            {
                _id:414141414141,
                store_name:'FitDock',
                rating: 3.2,
                place:'Ramanthapur, Uppal',
                price:200,    
                distance:1.2            
            },
            {
              _id:3332233333333,
              store_name:'FitDock',
              rating: 3.2,
              place:'Ramanthapur, Uppal',
              price:200,    
              distance:1.2            
            },
            {
              _id:111111111,
              store_name:'FitDock',
              rating: 3.2,
              place:'Ramanthapur, Uppal',
              price:200,    
              distance:1.2            
            },
           {
            _id:2222222222,
            store_name:'FitDock',
            rating: 3.2,
            place:'Ramanthapur, Uppal',
            price:200,    
            distance:1.2            
           },
           {
            _id:5555555555,
            store_name:'FitDock',
            rating: 3.2,
            place:'Ramanthapur, Uppal',
            price:200,    
            distance:1.2            
           },
           {
            _id:666666666,
            store_name:'FitDock',
            rating: 3.2,
            place:'Ramanthapur, Uppal',
            price:200,    
            distance:1.2            
           },
           {
            _id:7777777777,
            store_name:'FitDock',
            rating: 3.2,
            place:'Ramanthapur, Uppal',
            price:200,    
            distance:1.2            
           },
  ];  
  const MenuIcon = (style) => (
    <MIcon name="account-circle" size={25}/>
    );
  const MenuAction = () => (
    <TopNavigationAction onPress={()=>props.navigation.navigate('ProfileScreen')} icon={MenuIcon}/>
  );
  const renderRightControls = () => [
    <MenuAction/>  
  ];
  const BackIcon = (style) => (
    <Icon {...style} name='arrow-down' />
  );
  
  const BackAction = () => (<>
  <TouchableOpacity onPress={()=>alert("hi")} >
    <Text style={{fontSize:20,paddingLeft:10}}>Home</Text>
    </TouchableOpacity>
    <TopNavigationAction onPress={()=>{props.navigation.navigate('')}} icon={BackIcon}/>
    </>
  );
 
  return(
    <SafeAreaView >
      <View style={{backgroundColor:'white'}}>
        <TopNavigation 
          leftControl={BackAction()}
          rightControls={renderRightControls()}
        />
          <FlatList 
            data={pdata}
            renderItem={({item}) => <Item navigation={props} data={item} />}
          />
      </View>
   </SafeAreaView>
    )
}


const RootStack = createStackNavigator(
  {
    HomeScreen: {
      screen : HomeComponent,
      navigationOptions: {
        header: null,   
      },
    },
    ProfileScreen: {
      screen:Profile,
      navigationOptions : ({navigation}) =>({
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0
          },
        headerLeft:
          <MIcon name={'chevron-left'} 
            size={40}
            onPress={ () => { navigation.goBack() }} 
          />,
        })
      },

    DetailsScreen: {
      screen : Details,
      navigationOptions : ({ navigation, screenProps }) => ({
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0
          },
        title:  null,
        headerLeft: ()=>
         <MIcon name={'chevron-left'} 
                size={40}
                onPress={ () => { navigation.goBack() }} 
          />
      })
    }
  },
  {
    headerMode: 'screen',
    defaultNavigationOptions:{
      cardStyle: { backgroundColor: 'white' },
      headerStyle: {
        borderBottomWidth: 0,
    }
    }
  }
 
);









const AppContainer = createAppContainer(RootStack);
export class Home extends React.Component {
  render() {
    return(
      <>
    
    <View style={{flex:1}}>
      <View style={{height:120,backgroundColor:'#77b5fe',
      justifyContent:'center',paddingHorizontal:2}}>
        <View style={{height:50,backgroundColor:'white'}}>

        </View>

      </View>
    </View>
    <AppContainer />
      </>
      ); 
  }
}


const styles = StyleSheet.create({
  avatar: {
    margin: 16,
  },
  horizontal: {
    paddingTop:5,
    flexDirection:'row',
    width: SCREEN_WIDTH - (80 + 10 + 20),
  },
  listItem: {
    flexDirection: 'row',
    margin: 10,
  },
  image: {
    height: 113,
    width: 122,
    borderRadius:15
  },
  name: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  description: {
    //paddingTop:5,
    fontSize: 18,
    opacity: 0.5,
  },
  Rating:{
    fontSize: 20,
    color:'black',
    fontFamily:'Times New Roman',
    paddingRight:20
  },
  body: {
    marginLeft: 10,
    marginRight: 10,
    maxWidth: SCREEN_WIDTH - (80 + 10 + 20),
  }
  });






