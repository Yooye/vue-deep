class Compile{
    constructor(el,ym){
        this.$ym = ym
        this.$el = document.querySelector(el)

        if(this.$el){
            // 1，获取el中的所有node节点
            this.$fragment = this.nodeToFragment(this.$el)

            // 2，编译el中所有的node节点
            this.compile(this.$fragment)

            // 3，将编译完成后的内容，放回el内部渲染
            this.$el.appendChild(this.$fragment)
        }
    }

    nodeToFragment(el){ //搬运节点的方法
        let fragment = document.createDocumentFragment()
        let child
        while ((child=el.firstChild)) {
            fragment.appendChild(child)
        }
        return fragment
    }

    compile(frag){ //编译节点的方法
        const childNodes = frag.childNodes
        Array.from(childNodes).forEach(node=>{
            if(this.isInterpolation(node)){
                this.compileText(node)
            }

            //   递归子元素
            if (node.childNodes && node.childNodes.length > 0) {
              this.compile(node);
            }
        })
    }

    isInterpolation(node){ //判断是否为文本节点
        return node.nodeType === 3 && /\{\{(.*)\}\}/.test(node.textContent);
    }

    compileText(node){
        const exp = RegExp.$1
        this.doUpdate(node,this.$ym,exp,'text')
    }

    doUpdate(node,ym,exp,dir){ //做更新操作的通用update方法
        let fn = this[dir+'Updator'];
        fn && fn(node,ym[exp])
        new Watcher(ym,exp,function(){
            fn && fn(node, ym[exp])
        })
    }

    textUpdator(node,value){ //渲染{{}}中绑定的对应数据
        node.textContent = value
    }
}