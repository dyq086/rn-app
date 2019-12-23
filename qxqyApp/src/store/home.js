/*
 * @Description:
 * @Version: 1.0
 * @Autor: yongqing
 * @Date: 2019-12-18 16:53:59
 * @LastEditors  : yongqing
 * @LastEditTime : 2019-12-23 17:01:24
 */
import {observable, action, computed} from 'mobx';
import remotedev from 'mobx-remotedev';
import {getHomeList} from '@/interfaces/home';

@remotedev({
  name: 'HomeStore',
  global:true
  // Options: https://github.com/zalmoxisus/mobx-remotedev#api
})
class HomeStore {
  @observable num;
  @observable result;
  @observable tabs;

  constructor() {
    this.num = 0; 
    this.result = {
      projectList: [],
      bbsConfig:[]
    };
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
