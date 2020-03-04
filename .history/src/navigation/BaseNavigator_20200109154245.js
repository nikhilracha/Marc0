import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {Home} from "../components/Home/Home";
import Icon from 'react-native-vector-icons/Ionicons';
import Blog from "../components/Blog/Blog";
import Blank from "../components/Common/Blank";
import Settings from "../components/Settings/Settings";
import Profile from "../components/Profile/Profile";
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
        Blog: {
            screen: Blog,
            navigationOptions: () => ({
                tabBarIcon: ({ tintColor }) => (
                    <Icon
                        name="ios-journal"
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
        Settings: {
            screen: Settings,
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
        Profile: {
            screen: Profile,
            navigationOptions: () => ({
                tabBarIcon: ({ tintColor }) => (
                    <Icon
                        name="ios-person"
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
