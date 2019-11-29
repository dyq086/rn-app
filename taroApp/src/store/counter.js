import {observable} from 'mobx'
import {getGoodsDetail} from '@/interface/base'

const counterStore = observable({
  counter: 0,
  good_info: {},
  counterStore() {
    this.counter++
  },
  increment() {
    this.counter++
  },
  decrement() {
    this.counter--
  },
  incrementAsync() {
    setTimeout(() => {
      this.counter++
    }, 1000)
  },
  async getGoodList() {
    let res = await getGoodsDetail({id: 3270, sence: 5})
    this.good_info = res.data;
  }
})
export default counterStore