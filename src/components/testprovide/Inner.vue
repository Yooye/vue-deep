<template>
    <div class="inner">
        我是第二层---Inner后代组件
        <InnerInner></InnerInner>
    </div>
</template>
<script>
import InnerInner from '@/components/testprovide/InnerInner'
export default {
    name:'inner',
    components:{
        InnerInner
    }
}
</script>
<style>
    .inner{
        border: 2px solid blue;
    }
</style>

