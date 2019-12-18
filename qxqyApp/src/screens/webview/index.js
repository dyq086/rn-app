/*
 * @Author: yongqing
 * @Date:   2019-11-19 11:00:02
 * @Last Modified by:   yongqing
 * @Last Modified time: 2019-11-22 11:12:15
 */

import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';

import { WebView } from 'react-native-webview';

class AppWebView extends Component {
    render() {
            let { height, width } = Dimensions.get('window');
            return (
                    <WebView
				        source={{ uri: 'http://127.0.0.1:8080/index.html' }}
				        javaScriptEnabled={true}
				        startInLoadingState={true}
				        scalesPageToFit={false}
				        applicationNameForUserAgent={'DemoApp/1.1.0'}

				        renderError={()=>{
				        	return (
				        		<View style={{position:'absolute',height:200,width:width,textAlign:'center',textAlignVertical:'center',top:100}}> 
				        			 <Text style={{textAlign:'center'}}>网页加载失败,请检查网络连接</Text>
				        		</View>
				        	)
				        }}
			      />
        )
    }
}

export default AppWebView