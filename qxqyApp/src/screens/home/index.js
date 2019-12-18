/*
 * @Author: yongqing
 * @Date:   2019-11-18 18:00:58
 * @Last Modified by:   yongqing
 * @Last Modified time: 2019-11-19 16:54:45
 */

import React, {Component} from 'react';
import {View, Text, ScrollView, SafeAreaView} from 'react-native';
import {Tabs, Button, Toast} from '@ant-design/react-native';
import {observer, inject} from 'mobx-react';
@inject('homeStore')
@observer
class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.homeStore;
    this.state = {
      value: 0,
    };
  }
  componentWillMount() {
    this.store.fetchHomeList();
  }

  render() {
    let {navigation} = this.props;
    const style = {
      alignItems: 'center',
      justifyContent: 'center',
      height: 150,
      backgroundColor: '#fff',
    };
    const tabBarUnderlineStyle = {
      width: 20,
      marginLeft: 55 / 2,
    };
    const {text, num, result} = this.store;

    return (
      <SafeAreaView style={{flex: 1}}>
        <Tabs
          tabs={this.store.tabList}
          tabBarUnderlineStyle={tabBarUnderlineStyle}
          tabBarActiveTextColor="#222"
          tabBarInactiveTextColor="#999">
          <View style={style}>
            <Text>HomeScreen Screen</Text>
            <Button
              type="primary"
              title=""
              onPress={() => navigation.navigate('HomeDetail')}>
              Go to Details
            </Button>
            <Button type="primary" onPress={() => this.onShowToast()}>
              {text}
              {num}
            </Button>
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
  onShowToast() {
    this.store.plus();
  }
}

export default HomeScreen;
