import React, { Component } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import PropTypes from 'prop-types';

class Blog extends Component {
    render() {
        return (
            <SafeAreaView style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text>Favourites</Text>
            </SafeAreaView>
        );
    }
}

export default Blog;