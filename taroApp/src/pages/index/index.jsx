import Taro, {Component} from '@tarojs/taro'
import {View, Button, Text} from '@tarojs/components'
import {observer, inject} from '@tarojs/mobx'
import List from './list'
import './index.less'

@inject('homeStore')
@observer
class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
  }
  cat = Taro.createRef();
  state = {
    vb: '2432',
    obj: {
      a: 1,
      b: '呜呜呜呜呜呜'
    }
  }
  componentWillMount() {}

  componentWillReact() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  increment = () => {
    let {add, changeName} = this.props.homeStore;
    this.setState({vb: 'zzzzzzz'})
    add();
    changeName()
  }
  roar() {
    console.log(this.cat.current)
    this
      .cat
      .current
      .setState({zzz: 'updata'})

  }
  changeState = () => {
    this.setState(prevState => ({
      [prevState.obj.b]: '哈哈哈哈哈哈'
    }))
  }
  render() {
    let {num} = this.props.homeStore;

    return (
      <View className='index'>
        <List ref={this.cat}/>
        <Text onClick={() => this.roar()}>{num}</Text>
        <View className="sss" onClick={() => this.increment()}>开始的连接符山东矿机</View>
        <Text onClick={() => this.changeState()}>{this.state.obj.b}</Text>
      </View>
    )
  }
}

export default Index
