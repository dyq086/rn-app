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
  getGoodList() {
    getGoodsDetail({id: 3270, sence: 5}).then((res) => {
      this.good_info = res.data;
    })
  }
})
export default counterStore