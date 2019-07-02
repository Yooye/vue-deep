// new Yue({
//     data:{
//         msg:'hello'
//     }
// })
class Yue{
    constructor(options){
        this.$options = options //获取new Yue时传入的参数对象
        this.$data = options.data //获取参数对象中的data
        this.observe(this.$data) //将data对象进行响应化处理
    }

    observe(dataObj){
        if(!dataObj || typeof dataObj!=='object'){
            return //如果未传入data或data数据不为对象，则直接返回
        }

        Object.keys(dataObj).forEach((key)=>{
            this.defineReactive(dataObj,key,dataObj[key]) 
            //对data的每一个key做响应式处理
        })
    }

    defineReactive(obj,key,val){
        Object.defineProperty(obj,key,{
            get(){
                console.log('大兄弟，你这是在获取我的值啊~')
                return val
            },
            set(){
                console.log('小老弟，你这是想设置一个值啊~')
            }
        })
    }
}

