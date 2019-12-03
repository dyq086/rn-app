/*
 * @Description: 事件间监听发布
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2019-12-03 09:25:47
 * @LastEditors: yongqing
 * @LastEditTime: 2019-12-03 11:33:38
 */

class Event {
    constructor(){
        this.hanldes={}
    }
    on(fn,type){
       if(typeof fn==='function' && typeof type ==='string'){
           if(!this.hanldes[type]){
               this.hanldes[type]=[]
           }
           this.hanldes[type].push(fn)
       }
    }
    emit(type){
        
    }
}


export default new Event()