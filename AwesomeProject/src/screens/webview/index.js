/*
 * @Author: yongqing
 * @Date:   2019-11-19 11:00:02
 * @Last Modified by:   yongqing
 * @Last Modified time: 2019-11-19 11:41:57
 */

import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';

import { WebView } from 'react-native-webview';

class AppWebView extends Component {
    render() {
            let { height, width } = Dimensions.get('window');
            return (
                    <WebView
				        source={{ uri: 'https://m.baidu.com' }}
				        javaScriptEnabled={true}
				        startInLoadingState={true}
				        scalesPageToFit={true}
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