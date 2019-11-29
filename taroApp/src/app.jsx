import Taro, {Component} from '@tarojs/taro'
import "@tarojs/async-await";
import {Provider} from '@tarojs/mobx'
import Index from './pages/index'

import counterStore from './store/counter'

import './app.less'

// 如果需要在 h5 环境中开启 React Devtools 取消以下注释： if (process.env.NODE_ENV !==
// 'production' && process.env.TARO_ENV === 'h5')  {   require('nerv-devtools')
// }

const store = {
  counterStore
}

class App extends Component {

  config = {
    pages: [
      'pages/index/index', 'pages/events/events', 'pages/my/my'

    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      borderStyle: "black",
      selectedColor: "#FFC300",
      backgroundColor: "#ffffff",
      color: "#999999",
      list: [
        {
          pagePath: "pages/index/index",
          iconPath: "./assets/icons/tabbar/store.png",
          selectedIconPath: "./assets/icons/tabbar_selected/store.png",
          text: "商家列表"
        }, {
          pagePath: "pages/events/events",
          iconPath: "./assets/icons/tabbar/gifts.png",
          selectedIconPath: "./assets/icons/tabbar_selected/gifts.png",
          text: "优惠活动"
        }, {
          pagePath: "pages/my/my",
          iconPath: "./assets/icons/tabbar/account.png",
          selectedIconPath: "./assets/icons/tabbar_selected/account.png",
          text: "我的"
        }
      ]
    }
  }

  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // 在 App 类中的 render() 函数没有实际作用 请勿修改此函数
  render() {
    return (
      <Provider store={store}>
        <Index/>
      </Provider>
    )
  }
}

Taro.render(
  <App/>, document.getElementById('app'))
