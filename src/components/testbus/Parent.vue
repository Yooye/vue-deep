<template>
    <div class="parent">
        <Child1></Child1>
        <Child2></Child2>
    </div>
</template>
<script>
import Child1 from '@/components/testbus/Child1.vue'
import Child2 from '@/components/testbus/Child2.vue'
export default {
    components:{
        Child1,
        Child2
    }
}
</script>
<style>
.parent{
    border: 3px solid blue;
}
.parent>div{
    margin: 10px
}
</style>

