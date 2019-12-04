import Taro, {Component} from '@tarojs/taro'
import {View, Button, Text} from '@tarojs/components'
import Event from '@/utils/event'
import './index.less'
class DropdownItem extends Component {
    componentDidMount() {
      
    }
    
    render() {
        let {option} = this.props;
        return (
            <View className="dropdown-item">
                {
                option.map((item) => {
                    return (
                        <View className="dropdown-item__item">
                            <View className="dropdown-item__name">{item.text}</View>
                            <View className="dropdown-item__check"></View>
                        </View>
                    )
                })
                }

            </View>
        );
    }
}

export default DropdownItem;