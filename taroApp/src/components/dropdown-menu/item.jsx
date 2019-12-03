import Taro, {Component} from '@tarojs/taro'
import {View, Button, Text} from '@tarojs/components'
import Event from '@/utils/event'
import './item.less'
class DropdownItem extends Component {
    render() {
        return (
            <View>
                <Text className="mycolor" onClick={() => {
                    console.log(Event)
                    }}>我是子组件各自的啊32</Text>
            </View>
        );
    }
}

export default DropdownItem;