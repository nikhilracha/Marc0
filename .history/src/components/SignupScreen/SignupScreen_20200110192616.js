import React from 'react';
import { SafeAreaView } from 'react-native';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { TouchableOpacity } from 'react-native-gesture-handler';

const SignupScreen = () => (
    <SafeAreaView>
        <Text>
        <TouchableOpacity styles={styles.button}>
        <MIcon name="google" style={{paddingLeft:10}} size={20}/>
        </TouchableOpacity>
        </Text>
    </SafeAreaView>
);

const styles = StyleSheet.create({
button: {
    alignItems: 'center',
    backgroundColor: 'lightblue',
    marginTop:10,
    paddingTop:15,
    paddingBottom:15,
    marginLeft:30,
    marginRight:30,
    backgroundColor:'lightblue',
    borderRadius:10,
    borderWidth: 1,
    borderColor: 'lightblue'
    
  },
})

export default SignupScreen;