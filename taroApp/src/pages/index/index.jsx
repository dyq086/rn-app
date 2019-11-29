import Taro, {Component} from '@tarojs/taro'
import {View, Button, Text} from '@tarojs/components'
import {observer, inject} from '@tarojs/mobx'
import './index.less'
import Introduction from './list'
@inject('counterStore')
@observer
class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount() {}

  componentWillReact(...arg) {
    console.log('componentWillReact',arg)
  }

  componentDidMount() {
    
  }

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
    const {counterStore: {
        counter
      }} = this.props
    return (
      <View className='index'>
        <Button onClick={this.increment}>+</Button>
        <Button onClick={this.decrement}>-</Button>
        <Button onClick={this.incrementAsync}>Add Async</Button>
        <Text>{counter}</Text>
        <Introduction></Introduction>
      </View>
    )
  }
}

export default Index
