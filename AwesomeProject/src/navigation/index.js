/*
 * @Author: yongqing
 * @Date:   2019-11-18 17:28:57
 * @Last Modified by:   yongqing
 * @Last Modified time: 2019-11-21 15:25:24
 */
import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/AntDesign';
import Home from '@/screens/home/index.js';
import HomeDetail from '@/screens/home_detail/index';
import My from '@/screens/my/index';
import AppWebView from '@/screens/webview/index'
const BottomTabNavigator = createBottomTabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            title: '首页',
            tabBarIcon: ({ focused }) => (
                <Icon
                    name={'home'}
                    size={24}
                    color={`${focused ? '#222' : '#999'}`}
                />
            )
        }
    }, My: {
        screen: My,
        navigationOptions: {
            title: '我的',
            tabBarIcon: ({ focused }) => (
                <Icon
                    name={'user'}
                    size={24}
                    color={`${focused ? '#222' : '#999'}`}
                />
            )
        }
    },
}, {
    initialRouteName: 'My',
    tabBarOptions: {
        inactiveTintColor: '#999',
        activeTintColor: '#222',
        labelStyle: {
            fontSize: 11
        },
    },
})

const RootStack = createStackNavigator({
    Home: {
        screen: BottomTabNavigator,
        navigationOptions: ({ navigation }) => {
            return {
                header: null
            }
        },
    },
    HomeDetail: {
        screen: HomeDetail,
        navigationOptions: {
            title: '详情'
        }
    },
    AppWebView: {
        screen: AppWebView,
        navigationOptions: {
            title: '百度'
        }
    }
});

export default createAppContainer(RootStack);