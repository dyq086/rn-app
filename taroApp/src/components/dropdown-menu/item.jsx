import Taro, {Component} from '@tarojs/taro'
import {View, Button, Text} from '@tarojs/components'
import './item.less'
class DropdownItem extends Component {
    render() {
        return (
            <View>
                <Text className="mycolor">我是子组件各自的啊32</Text>
            </View>
        );
    }
}

export default DropdownItem;