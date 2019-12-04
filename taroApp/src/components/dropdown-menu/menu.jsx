import Taro, {Component} from '@tarojs/taro'
import {View, Button, Text} from '@tarojs/components'
import Event from '@/utils/event'
import './index.less'
class DropdownMenu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            childrenComponent: 222
        }

    }

    componentDidMount() {
        this.setState({childrenComponent: 333})
        console.log(this)
    }

    render() {
        return (
            <View>
                <View className="dropdown-menu">
                    <View className="dropdown-menu__item" onClick={() => {}}>
                        {this.state.childrenComponent}
                    </View>
                    <View className="dropdown-menu__item">
                        好评推荐
                    </View>
                </View>
                <View>
                    {this.props.children}
                </View>
                <View className="dropdown-overlay"></View>
            </View>
        )
    }
}

export default DropdownMenu