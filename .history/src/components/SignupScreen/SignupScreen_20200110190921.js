import React from 'react';
import { SafeAreaView } from 'react-native';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import {
    Button,
    Icon,
    Layout,
  } from '@ui-kitten/components';
const SignupScreen = () => (
    <SafeAreaView>
        <Text>
       
        <Button style={styles.button} MIcon name="google" style={{paddingLeft:10}} size={20}>PRIMARY</Button>

        </Text>
    </SafeAreaView>
);
