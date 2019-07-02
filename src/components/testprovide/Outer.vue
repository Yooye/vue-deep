<template>
    <div class="outer">
        我是第一层---Outer祖先组件
        <Inner></Inner>
    </div>
</template>
<script>
import Inner from '@/components/testprovide/Inner'
export default {
    name:'outer',
    provide(){
        return {msg:'来自祖先的家训:代码是练出来的！切记切记！！'}
    },
    components:{
        Inner
    }
}
</script>
<style>
    .outer{
        border: 2px solid red;
    }
</style>

