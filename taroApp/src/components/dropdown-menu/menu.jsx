import Taro, {Component} from '@tarojs/taro'
import {View, Button, Text} from '@tarojs/components'
import './index.less'
class DropdownMenu extends Component {
    render() {
        return (
            <View>
                <View className="dropdown-menu">
                    <View className="dropdown-menu__item">全部商品</View>
                    <View className="dropdown-menu__item">好评推荐</View>
                </View>
                <View style={{
                    color: this.props.color
                }}>
                    {this.props.children}
                </View>
            </View>
        )
    }
}

export default DropdownMenu