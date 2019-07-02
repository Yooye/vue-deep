<template>
    <div class="outer">
        我是第一层---Outer祖先组件
        <h4>爷爷看到了:{{msg}}</h4>
        <Inner></Inner>
    </div>
</template>
<script>
import Inner from '@/components/testdispatch/Inner'
export default {
    name:'outer',
    data() {
        return {
            msg:''
        }
    },
    components:{
        Inner
    },
    mounted() {
        this.$on('dispatch',(m)=>{
            this.msg = m
        })
    }
}
</script>
<style>
    .outer{
        border: 2px solid red;
    }
</style>

