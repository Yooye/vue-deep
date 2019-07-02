<template>
    <div class="innerinner">
        我是第三层---InnerInner后代组件，
        我将把自己卖力敲代码的状态展示给祖辈们看。
        <div>
            <button @click='$dispatch("dispatch","后代在奋力敲代码！")'>展示展示</button>
        </div>
    </div>
</template>
<script>
export default {
    name:'innerinner'
}
</script>
<style>
    .innerinner{
        border: 2px solid green;
    }
</style>

