/*
 * @Author: yongqing
 * @Date:   2019-11-18 18:00:58
 * @Last Modified by:   yongqing
 * @Last Modified time: 2019-11-19 16:54:45
 */

import React, { Component } from 'react';
import {View, Text, ScrollView, SafeAreaView, Alert} from 'react-native';
import {
    Tabs,
    Provider,
    Button,
    Toast,
    WhiteSpace,
    WingBlank,
    portal,
} from '@ant-design/react-native';
class HomeScreen extends Component {
    render() {
        let { navigation } = this.props;
        const tabs = [
            { title: '推荐' },
            { title: '同城' },
            { title: '榜单' },
            { title: '社会' },
            { title: '体育' },
            { title: '新闻' },
            { title: '明星' },
            { title: '搞笑' },
        ];
        const style = {
            alignItems: 'center',
            justifyContent: 'center',
            height: 150,
            backgroundColor: '#fff',
        };
        const tabBarUnderlineStyle = {
            width: 20,
            marginLeft: 55 / 2


        }
        return (
            <SafeAreaView style={{ flex: 1}}>
		         <Tabs 
		         	tabs={tabs} 
		         	tabBarUnderlineStyle={tabBarUnderlineStyle}
		         	tabBarActiveTextColor="#222"
		         	tabBarInactiveTextColor="#999"
		         >
		          <View style={style}>
		           <Text>HomeScreen Screen</Text>
		           <Button
			           type="primary"
			           title=""
			           onPress={() => navigation.navigate('HomeDetail')}>
			       		Go to Details
		       		</Button>
		       		 <Button
		               type="primary"
		               onPress={() =>this.onShowToast()}>Show</Button>

		          </View>
		          <View style={style}>
		            <Text>Content of Second Tab</Text>
		          </View>
		          <View style={style}>
		            <Text>Content of Third Tab</Text>
		          </View>
		        </Tabs>
		    </SafeAreaView>
        );
    }
    onShowToast(){
    	Toast.success({content:'success'});
    }
}

export default HomeScreen;