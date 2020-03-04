import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {Home} from "../components/Home/Home";
import Icon from 'react-native-vector-icons/Ionicons';
import Blank from "../components/Common/Blank";
import Store from "../components/Store/Store";
import Profile from "../components/Profile/Profile";
import Favourites from "../components/Favourites/Favourites";
import { AddButton } from "../components/Common/AddButton";

const BaseNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: () => ({
                tabBarIcon: ({ tintColor }) => (
                    <Icon
                        name="ios-home"
                        color={tintColor}
                        size={24}
                    />
                )
            })
        },
        Favourites: {
            screen: Favourites,
            navigationOptions: () => ({
                tabBarIcon: ({ tintColor }) => (
                    <Icon
                        name="ios-heart"
                        color={tintColor}
                        size={24}
                    />
                )
            })
        },
        Adding: {
            screen: Blank,
            navigationOptions: () => ({
                tabBarIcon: <AddButton />,
                tabBarLabel: () => null
            })
        },
        Store: {
            screen: Store,
            navigationOptions: () => ({
                tabBarIcon: ({ tintColor }) => (
                    <Icon
                        name="ios-cart"
                        color={tintColor}
                        size={24}
                    />
                )
            })
        },
        Events: {
            screen: Events,
            navigationOptions: () => ({
                tabBarIcon: ({ tintColor }) => (
                    <Icon
                        name="ios-alert"
                        color={tintColor}
                        size={24}
                    />
                )
            })
        }
    }, {
        tabBarOptions: {
            showLabel: true,
            activeTintColor: '#F8F8F8',
            inactiveTintColor: '#586589',
            style: {
                backgroundColor: '#171F33'
            },
            tabStyle: {}
        }
    });

export default createAppContainer(BaseNavigator);
