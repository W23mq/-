<template>
    <div class="wrap page">
        <ul>
            <li @click="handleToggle('1')">正在热映</li>
            <li @click="handleToggle('2')">即将上映</li>
            <li :class="{border:true, l:true, r:border_r}"></li>
        </ul>
        <keep-alive>
            <component :is="comName"></component>
        </keep-alive>
    </div>
</template>

<script>
import nowPlay from './nowPlay';
import soonPlay from './soonPlay';
import Vuex from "vuex";

export default {
    components:{
        "nowPlay-com":nowPlay,
        "soonPlay-com":soonPlay
    },
    data(){
        return {
            border_r:false,
            comName:"nowPlay-com"
        }
    },
    methods:{
        // 通过点击事件传值  点击哪个就显示哪个组件
        handleToggle(val){
            if( val == 1 ){
                this.border_r=false,
                this.comName = "nowPlay-com"
            }else {
                this.border_r=true,
                this.comName = "soonPlay-com"
            }
        },
        
    }, 
   
       
   
    
}
</script>

<style scoped>
    .wrap{
        padding-right:  .3rem;
        padding-left:  .3rem;
        background: #f9f9f9;
        height: 100%;
        overflow: hidden;
    }
    ul{
        position: relative;
        display: flex;
        justify-content: space-around;
        height: .92rem;
        margin: 0 auto;
        border-bottom: solid #fe6e00 .02rem;
    }
    ul li {
        height: 100%;
        text-align: center;
        font-size:.32rem;
        line-height: .92rem;
        
    }
    .border{
        position:absolute;
        bottom:0px;
        width:50%;
        height:4px;
        background:#fe6e00;
    }
    .l{
        left:0;
    }
    .r{
        left:50%;
    }
</style>
