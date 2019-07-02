<template>
    <div>
        <Child1></Child1>
        <Child2></Child2>
    </div>
</template>
<script>
import Child1 from '@/components/testcommunicate/Child1.vue'
import Child2 from '@/components/testcommunicate/Child2.vue'
export default {
    components:{
        Child1,
        Child2
    }
}
</script>
<style>
div{
    border: 3px solid blue;
}
</style>

