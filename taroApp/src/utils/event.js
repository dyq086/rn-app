/*
* @Description : 事件间监听发布
 * @Version: 1.0
 * @Autor: yongqing
 * @Date: 2019-12-03 09:25:47
 * @LastEditors: yongqing
 * @LastEditTime: 2019-12-03 15:02:00
 */

class Event {
    constructor() {
        this.handlers = {}
    }
    on(type,fn) {
        if (typeof fn === 'function' && typeof type === 'string') {
            if (!this.handlers[type]) {
                this.handlers[type] = []
            }
            this.handlers[type].push(fn)
        }
    }
    off(type,fn){
        if(type && typeof type==='string'){
            if(!fn){
                if(!this.handlers[type]){
                    console.error(type + "事件不存在")
                    return false;
                }
                delete this.handlers[type];
            }else if(fn && typeof fn==='function'){
                let handlers=this.handlers[type];
                let len=handlers.length;
                while (len--) {
                    if(handlers[i]==fn){
                         handlers.splice(i,1);
                         break;
                    }
                }
            }
        }
    }
    emit(type) {
        if (this.handlers[type] && this.handlers[type].length>0) {
            let handlers=this.handlers[type];
            let _arguments = Array.prototype.slice.call(arguments,1);
            handlers.forEach((fn)=>{
                fn.apply(this,_arguments)
            })
        } else {
             console.error(type + "事件不存在")
        }
    }
}

export default new Event()