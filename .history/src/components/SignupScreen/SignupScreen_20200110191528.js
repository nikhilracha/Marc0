import React from 'react';
import { SafeAreaView } from 'react-native';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { TouchableOpacity } from 'react-native-gesture-handler';

const SignupScreen = () => (
    <SafeAreaView>
        <Text>
        <TouchableOpacity>
        <MIcon name="google" style={{paddingLeft:10}} size={20}/>
        </TouchableOpacity>
        </Text>
    </SafeAreaView>
);
