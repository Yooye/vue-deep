<template>
    <div>
        我是子组件1
        <button @click="doFoo">我想把值传给兄弟组件</button>
    </div>
</template>
<script>
export default {
    methods: {
        doFoo(){
            this.$parent.$emit('foo',12345)
        }
    },
}
</script>
<style>
div{
    border: 1px solid red;
}
</style>

