import Vue from 'vue'
import _ from 'lodash'
import './loading.css'
import mixin from '../mixin'
let Loading = {
    install(Vue){
        let that = this;
        Object.defineProperty(Vue.prototype,'$loading',{
            value:{
                show:function(target){
                    console.log(that)
                    let loader = that.createElement('span',{class:'loader'},['loading...'])
                    //console.log(target.style)
                    target.style.position = 'relative';
                    that.el = that.init(loader,'iLoading',target);
                    this.target = target;
                },
                hide:function(){
                    if(this.target){
                        this.target.removeChild(that.el)
                    }else{
                        document.body.removeChild(that.el)
                    }
                    
                }
            }
        })
    },
    ...mixin
}
console.log(Loading)

export default Loading