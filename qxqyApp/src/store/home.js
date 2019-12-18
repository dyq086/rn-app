/*
 * @Description:
 * @Version: 1.0
 * @Autor: yongqing
 * @Date: 2019-12-18 16:53:59
 * @LastEditors  : yongqing
 * @LastEditTime : 2019-12-18 16:54:24
 */
import {observable, action, computed} from 'mobx';
import {getHomeList} from '@/interfaces/home';
class HomeStore {
  @observable text; // 注册变量，使其成为可检测的
  @observable num;
  @observable result;
  @observable tabs;

  constructor() {
    this.num = 0; // 初始化变量，可以定义默认值
    this.text = 'Hello, this is homePage!!!';
    this.result = {};
    this.tabs = [];
  }

  @action // 方法推荐用箭头函数的形式
  plus = () => {
    this.num += 1;
  };

  @action
  minus = () => {
    this.num -= 1;
  };

  @action
  fetchHomeList = async () => {
    let res = await getHomeList();
    this.result = res.result;
    this.tabs = res.result.markerConfig;
  };

  @computed get tabList() {
    let tempArray = [];
    if (this.tabs) {
      this.tabs.filter(item => {
        tempArray.push({
          title: item.markerName,
          id: item.id,
        });
      });
    }

    return tempArray;
  }
}

const homeStore = new HomeStore();

export {homeStore};
