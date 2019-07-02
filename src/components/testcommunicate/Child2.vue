<template>
    <div>
        我是子组件2
        {{msg}}
    </div>
</template>
<script>
export default {
    data() {
        return {
            msg:'这里将展示组件1传过来的值'
        }
    },
    mounted() {
        let that = this;
        this.$parent.$on('foo',function(num){
            console.log(num)
            that.msg=num
        })
    },
}
</script>
<style>
div{
    border: 1px solid red;
}
</style>

