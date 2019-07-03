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
        
        new Compile(options.el, this)
        // new Watcher(this, 'msg')
        // setTimeout(()=>{
        //     this.$data.msg = 'lalala'
        // },2000)
    }

    observe(dataObj){
        if(!dataObj || typeof dataObj!=='object'){
            return //如果未传入data或data数据不为对象，则直接返回
        }

        Object.keys(dataObj).forEach((key)=>{
            this.defineReactive(dataObj,key,dataObj[key]) 
            //对data的每一个key做响应式处理
            this.proxyData(key)
        })
    }

    defineReactive(obj,key,val){
        // 创建Dep的实例：这个dep与每个key是一对一的关系
        const dep = new Dep()
        Object.defineProperty(obj,key,{
            get(){
                console.log(`新增了${key}的Watcher，收集了依赖`)
                if (Dep.target) {
                    dep.addDep(Dep.target) 
                    // 1，当我们后续对template进行编译的时候会发现很多{{}}
                    // 2，每发现一个{{}}我们都会为其创建一个Watcher实例
                    // 3，Watcher实例一旦被创建，其内部的constructor里都会读取对应的key值
                    // 4，Watcher实例创建的时候，还会将Dep.target指向本次Watcher实例
                    // 5，读取key值得动作会触发这个get方法
                    // 6，get方法内部将本次Dep.target所指向的那个Watcher实例添加到dep中备用
                }
                // 上面的if语句也可以变形写为如下形式：
                // Dep.target && dep.addDep(Dep.target)
                return val
            },
            set(){
                // console.log('小老弟，你这是想设置一个值啊~')
                dep.notify()
            }
        })
    }

    // 在vue根上定义属性代理data中的数据，使得vue实例可以通过data.msg 读取data值
    proxyData(key) {
      Object.defineProperty(this, key, {
        get() {
          return this.$data[key];
        },
        set(newVal) {
          this.$data[key] = newVal;
        }
      });
    }
}



// 定义一个Dep类，用以管理或收集所有的Watcher
class Dep{
    constructor(){
        this.deps = []
    }

    addDep(dep){
        this.deps.push(dep)
    }

    notify(){
        this.deps.forEach((watcher)=>{
            watcher.update()
        })
    }
}

class Watcher{
    constructor(ym,key,cb){
        this.$ym = ym
        this.$key = key
        this.$cb = cb
        Dep.target = this 
        //在Dep的全局挂载一个target，用以记录具体的key所对应的Watcher信息
        this.$ym.$data[this.$key] 
        //读取一下Yue实例对象的某个key属性，触发其defineProperty内部的get方法
        Dep.target = null
    }

    update(){
        // console.log(`${this.$key}属性更新了~`)
        this.$cb.call(this.$ym,this.$ym[this.$key])
    }
}
