<template>
    <div class="bar page">
        <ul>
            <li v-for="(item,index) in bar" class="bar_list" >
                <router-link :to="item.name"> {{item.title}} <i class="iconfont">&#xe612;</i></router-link> 
            </li>
        </ul>
       
    </div>
</template>

<script>
import Vuex from 'vuex'
export default {
    computed:{
        ...Vuex.mapState({
            bar:state=>state.bar
        })
    }
}
</script>

<style scoped>
    .bar{
        width: 70%;
        height: 100%;
        background: #282828;
        position: absolute;
        z-index: 5;
        
    }
    .bar_list{
        height: 1rem;
        width: 100%;
        border-bottom:.02rem dotted #333;
        line-height: 1rem;
        font-size: .28rem;
        color:#9a9a9a;
        padding:0 .32rem;
    }
    .bar_list a{
        display: block;
        width: 100%;
    }
    .bar_list i {
        float: right;
        color:#9a9a9a
    }
     /*侧边栏*/
    .slide-enter-active {
        animation: slideEnter 300ms
    }
    .slide-leave-active {
        animation: slideLeave 300ms
    }

    @keyframes slideEnter {
        0% {
            transform :translateX(-100%)
        }
        100%{
            transform :translateX( 0 )
        }
    }

    @keyframes slideLeave {
        0% {
            transform :translateX(0)
        }
        100%{
            transform :translateX( -100% )
        }
    }


    /*遮罩层*/
    .fade-enter-active{
        animation: fadeEnter 300ms
    }

    .fade-leave-active{
        animation:fadeLeave 300ms
    }
    @keyframes fadeEnter {
        0% {
            opacity: 0
        }
        100%{
            opacity: 0.5;
        }
    }

    @keyframes fadeLeave {
        0% {
            opacity: 0.5
        }
        100%{
            opacity: 0.0;
        }
    }
</style>
