<template>
    <div class="innerinner">
        我是第三层---InnerInner后代组件
        <h4>{{msg}}</h4>
    </div>
</template>
<script>
export default {
    name:'innerinner',
    inject:['msg']
}
</script>
<style>
    .innerinner{
        border: 2px solid green;
    }
</style>

