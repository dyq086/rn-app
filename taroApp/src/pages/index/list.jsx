import Taro, {Component} from '@tarojs/taro'
import {View, Text} from '@tarojs/components'
import {observer, inject} from '@tarojs/mobx'

@inject('counterStore')
@observer
class Introduction extends Component {
    componentWillMount() {}

    componentDidMount() {}

    componentWillUnmount() {}

    componentDidShow() {}

    componentDidHide() {}

    render() {
        const {counterStore: {
                good_info
            }} = this.props
        return (
            <View className='index'>

                <Text>{good_info.introduction}</Text>
            </View>
        )
    }
}

export default Introduction
