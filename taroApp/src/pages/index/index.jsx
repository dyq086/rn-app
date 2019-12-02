import Taro, {Component} from '@tarojs/taro'
import {View, Button, Text} from '@tarojs/components'
import {observer, inject} from '@tarojs/mobx'
import './index.less'
import {DropdownMenu, DropdownItem} from '@/components/dropdown-menu/index'

@inject('counterStore')
@observer
class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
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
    const {counterStore: {
        counter
      }} = this.props
    return (
      <View className='index'>
        <DropdownMenu color="red">
          <DropdownItem ></DropdownItem>
        </DropdownMenu>
      </View>
    )
  }
}

export default Index
