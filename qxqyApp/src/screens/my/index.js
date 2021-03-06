/*
 * @Author: yongqing
 * @Date:   2019-11-18 18:01:03
 * @Last Modified by:   yongqing
 * @Last Modified time: 2019-11-19 11:12:53
 */

import React, { Component } from 'react';
import {View, Text, Button, SafeAreaView} from 'react-native';

class MyScreen extends Component {
    render() {
        let { navigation } = this.props;
        return (
            <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
		        <Text>HomeScreen Screen</Text>
		        <Button title="打开网页" onPress={()=>navigation.navigate("AppWebView")}/>
		    </SafeAreaView>
        );
    }
}

export default MyScreen;