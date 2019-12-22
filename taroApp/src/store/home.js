/*
 * @Description: homeStore
 * @Version: 1.0
 * @Autor: yongqing
 * @Date: 2019-12-20 16:40:45
 * @LastEditors  : yongqing
 * @LastEditTime : 2019-12-20 17:15:24
 */
import { action, observable } from "mobx";

class homeStore {
  @observable num = 0;
  @observable myName = "young";

  @action
  add = () => {
    this.num++;
  };
  @action
  changeName = () => {
    this.myName = "张三";
  };
}
export default new homeStore();
