import Taro, {Component} from '@tarojs/taro'
import {View, Button, Text} from '@tarojs/components'
import {observer, inject} from '@tarojs/mobx'
import './index.less'

@inject('counterStore')
@observer
class Index extends Component {

  config = {
    navigationBarTitleText: '首页',
    usingComponents: {
      'van-dropdown-menu': '../../components/vant/dropdown-menu/index',
      'van-dropdown-item': '../../components/vant/dropdown-item/index',
    }
  }
  constructor(params) {
    
  }

  componentWillMount() {}

  componentWillReact(...arg) {
    console.log('componentWillReact', arg)
  }

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  increment = () => {
    const {counterStore} = this.props
    counterStore.getGoodList()
  }

  decrement = () => {
    const {counterStore} = this.props
    counterStore.decrement()
  }

  incrementAsync = () => {
    const {counterStore} = this.props;
    counterStore.incrementAsync()
  }

  render() {
    let option1 = [
      {
        text: '全部商品',
        value: 0
      }, {
        text: '新款商品',
        value: 1
      }, {
        text: '活动商品',
        value: 2
      }
    ]

    let option2 = [
      {
        text: '默认排序',
        value: 'a'
      }, {
        text: '好评排序',
        value: 'b'
      }, {
        text: '销量排序',
        value: 'c'
      }
    ]
    let value1=0;
    let value2="a";

    return (
      <View className='index'>
        <van-dropdown-menu>
          <van-dropdown-item value={
            value1
          } options={option1}/>
          <van-dropdown-item
            value={
            value2
          }
            options={
            option2
          }/>
        </van-dropdown-menu>
        <View className="sss">开始的连接符山东矿机</View>
      </View>
    )
  }
}

export default Index
