import React, { Component } from 'react';
import { Animated, Easing, TouchableHighlight, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';

const SIZE = 80;
const durationIn = 300;
const durationOut = 200;

class AddButton extends Component {

    render() {
        return (
            <View style={{
                position: 'absolute',
                alignItems: 'center'
            }}>
                <Animated.View style={{

                    alignItems: 'center',
                    justifyContent: 'center',
                    width: SIZE,
                    height: SIZE,
                    borderRadius: SIZE / 2,
                    backgroundColor: '#48A2F8',
                }}>
                    <TouchableOpacity
                        onPress={this.toggleView}
                        activeOpacity={1}
                    >
                        <Icon name="ios-home" size={24} color="#F8F8F8" />
                    </TouchableOpacity>
                </Animated.View>
            </View>
        );
    }
}

class SubAddButton extends Component {
    render() {
        const {
            style,
            icon,
            onPress
        } = this.props;

        return (
            <Animated.View style={{
                position: 'absolute',
                ...style
            }}>
                <TouchableHighlight
                    onPress={() => onPress && onPress()}
                    style={{
                        position: 'absolute',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: SIZE / 2,
                        height: SIZE / 2,
                        borderRadius: SIZE / 4,
                        backgroundColor: '#48A2F8'
                    }}
                >
                    <Icon name="ios-home" size={16} color="#F8F8F8" />
                </TouchableHighlight>
            </Animated.View>
        );
    }
}

SubAddButton.propTypes = {
    icon: PropTypes.string.isRequired,
    onPress: PropTypes.func
};

export { AddButton };