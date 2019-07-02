<template>
    <div class="bro1">
        我是子组件1
        <h4>我弟说：{{msg}}</h4>
        <button @click="bro1EventBus">跟弟弟聊天</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            msg:''
        }
    },
    methods: {
        bro1EventBus(){
            this.$bus.$emit('bro1-bus','弟弟，哥哥想跟你聊两句')
        }
    },
    mounted() {
        this.$bus.$on('bro2-bus',(m)=>{
            this.msg = m
        })
    },
}
</script>
<style>
.bro1{
    border: 1px solid blue;
}
</style>

