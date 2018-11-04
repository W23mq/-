<template>
    <div class="top">
        <div id="header">
            <div class="header_l">
                <a href="##" @click="handletoggle()">
                    <div class="icon"> <i class="iconfont">&#xe6e8;</i> </div>
                    <div class="title"> {{title}} </div>
                </a>
            </div>
            <div class="header_r">
                <p> 北京 <i class="iconfont">&#xe731;</i> </p>
                <a href="##" class="iconfont">&#xe636;</a>
            </div>
        </div>
        <transition name="slide">
            <bar-com v-show="show_bar"></bar-com> 
        </transition>

        <transition name="fade">
            <mask-com v-show="show_bar" @handleSlide="handlemask"></mask-com>
        </transition>

        
    </div>
    
</template>

<script>
import bar from './bar.vue'
import mask from './mask.vue'
import Vuex from 'vuex';

export default {
    components:{
        "bar-com":bar,
        "mask-com":mask,
    },
    data(){
        return {
            show_bar:false,
        }
    },
    methods:{
        handletoggle(){
            this.show_bar = !this.show_bar
        },
        handlemask(val){
            this.show_bar = val;
        }
    },
    computed:{
        ...Vuex.mapState({
            title : state => state.movie.title
        })
    }
}
</script>


<style scoped>
.top{
    width: 100%
}
#header{
    height: 1rem;
    width: 100%;
    background: #282828;
    display: flex;
    justify-content: space-between;
    position:fixed;
    left:0;
    top:0;
    z-index: 6;
}
#header>.header_l>a{
    height: 1.02rem;
    width: 2.64rem;
    line-height: 1.02rem;
    display: flex;
    justify-content: space-between;
}
.header_l> a > .icon {
    height: 1.0rem;
    width: .96rem;
    border-right:.02rem solid #222;
    box-shadow: .02rem  0  .02rem #363636;
    padding-left:0.3rem;
}
.header_l  .title {
    font-size:.28rem;
    color:#efefef;
   
}
#header > .header_r{
    display: flex;
    justify-content: space-around;
    width: 2.08rem;
    height: 1.02rem;
    line-height: 1.02rem;
    
}
.header_r p{
    font-size:.28rem ;
    color:#999;
    }
.header_r a{
    font-size:.32rem;
    width: .96rem;
    color:#999;
    text-align: center
}


</style>
