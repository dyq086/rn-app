import Taro, {Component} from '@tarojs/taro'
import {View, Text} from '@tarojs/components'
import {observer, inject} from '@tarojs/mobx'

@inject('homeStore')
@observer
class Introduction extends Component {
    constructor(props) {
        super(props)
        this.state = {
            zzz: '我是子组件'
        }

    }
    miao() {
      this.setState({
          zzz:'我是子组件update'
      })
    }

    componentWillMount() {}

    componentDidMount() {}

    componentWillUnmount() {}

    componentDidShow() {}

    componentDidHide() {}

    render() {
        let {myName} = this.props.homeStore
        return (
            <View className='index'>
                <Text onClick={()=>this.miao()}>{myName}{this.state.zzz}</Text>
            </View>
        )
    }
}

export default Introduction
