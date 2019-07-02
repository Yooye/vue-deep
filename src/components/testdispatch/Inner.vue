<template>
    <div class="inner">
        我是第二层---Inner后代组件
        <h4>爸爸看到了:{{msg}}</h4>
        <InnerInner></InnerInner>
    </div>
</template>
<script>
import InnerInner from '@/components/testdispatch/InnerInner'
export default {
    name:'inner',
    data() {
        return {
            msg:''
        }
    },
    components:{
        InnerInner
    },
    mounted() {
        this.$on('dispatch',(m)=>{
            this.msg = m
        })
    }
}
</script>
<style>
    .inner{
        border: 2px solid blue;
    }
</style>

