<template>
    <div class="bro2">
        我是子组件2
        <h4>我哥说：{{msg}}</h4>
        <button @click="bro2EventBus">跟哥哥聊天</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            msg:''
        }
    },
    mounted() {
        this.$bus.$on('bro1-bus',(m)=>{
            this.msg = m;
        })
    },
    methods: {
        bro2EventBus(){
            this.$bus.$emit('bro2-bus','大哥请讲，小弟洗耳恭听！')
        }
    },
}
</script>
<style>
.bro2{
    border: 1px solid lightskyblue;
}
</style>

