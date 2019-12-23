/*
 * @Author: yongqing
 * @Date:   2019-11-18 18:00:58
 * @Last Modified by:   yongqing
 * @Last Modified time: 2019-11-19 16:54:45
 */

import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import {Tabs, Button, Toast} from '@ant-design/react-native';
import {observer, inject} from 'mobx-react';
const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;

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
    const tabBarUnderlineStyle = {
      width: 20,
      marginLeft: 55 / 2,
    };
    const {result} = this.props.homeStore;

    return (
      <SafeAreaView style={{flex: 1}}>
        <Tabs
          tabs={this.store.tabList}
          tabBarUnderlineStyle={tabBarUnderlineStyle}
          tabBarActiveTextColor="#222"
          tabBarInactiveTextColor="#999">
          <ScrollView style={styles.container}>
            <View style={styles.header}>
              {result.flowBanner && result.flowBanner.length > 0 ? (
                <Image
                  style={styles.banner_img}
                  source={{uri: result.flowBanner[0].photo}}
                />
              ) : (
                ''
              )}
            </View>
            <View style={styles.bbs_box}>
              {result.bbsConfig.map((item, index) => (
                <Image
                  style={styles.bbs_box_img}
                  source={{uri: item.img}}
                  key={index}
                />
              ))}
            </View>
            <View style={styles.list_box}>
              <View style={styles.list_box_header}>
                <Text style={{color: '#222', fontSize: 25}}>每日上新</Text>
                <Text style={{color: '#999', fontSize: 12, paddingTop: 8}}>
                  每天都有美好的事情发生
                </Text>
              </View>
              <View style={styles.list_content_box}>
                {result.projectList.map((item, index) => (
                  <View style={styles.list_content_item} key={index}>
                    <Image
                      style={{width: winWidth - 20, height: 200}}
                      source={{uri: item.webPic + '?imageView2/0/w/680'}}
                    />
                    <View style={styles.product_box}>
                      <Text style={{fontSize: 18}}>{item.name}</Text>
                      <View style={styles.marker_box}>
                        <Text style={styles.item_fzc}>
                          {item.area}/{item.markerName}/{item.ispartnerName}
                        </Text>
                        <View style={styles.info_box}>
                          <Image
                            style={{width: 20, height: 20, borderRadius: 50}}
                            source={{
                              uri: item.header + '?imageView2/0/w/50',
                            }}
                          />
                          <Text style={(styles.item_fzc, {marginLeft: 5})}>
                            {item.userName}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                ))}
              </View>
            </View>
          </ScrollView>
        </Tabs>
      </SafeAreaView>
    );
  }
  onShowToast() {
    this.store.plus();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  banner_img: {
    width: winWidth - 20,
    height: 110,
    resizeMode: 'contain',
  },
  bbs_box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bbs_box_img: {
    width: 170,
    height: 60,
    resizeMode: 'cover',
  },
  list_box: {
    marginTop: 20,
  },
  list_box_header: {
    marginTop: 20,
  },
  product_box: {
    padding: 10,
  },
  marker_box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  item_fzc: {
    fontSize: 16,
    color: '#999',
  },
  info_box: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  list_content_box: {

  },
  list_content_item: {
    marginTop: 20,
    shadowColor: '#000',
    backgroundColor:'#ffffff',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius:5
  },
});

export default HomeScreen;
