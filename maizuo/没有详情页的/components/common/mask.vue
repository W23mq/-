<template>
    <div class="mask" @click="handleSlide()"></div>
</template>

<script>
import Vuex from 'vuex';
export default {
    methods:{
        //点击隐藏 bar和自己  组件传值  子传父  
        /* 
        在子组件上绑定自定义事件，在父组件中通过this.$emit("事件名"，参数)来触发这个事件
        */
        handleSlide(){
            this.$emit("handleSlide",false)
        }
    }
}
</script>


<style>
    .mask{
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        position: absolute;
        left: 0;
        z-index: 4;
    }
</style>
