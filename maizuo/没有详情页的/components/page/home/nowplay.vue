<template>
    <div class="nowPlay" >
        <ul >
            <li v-for="(item,index) in nowplays">
                <div>
                    <img :src="item.cover.origin" >
                    <div class="text">
                        <p> {{item.name}} </p>
                        <p> {{item.grade}} </p>
                        <p> 
                            <span> {{item.cinemaCount}}家影院上映 </span> 
                            <span> {{item.watchCount}}人购票</span>
                        </p>
                    </div>
                </div>
            </li>
        </ul>
        <div class="more">  更多热映电影 </div>
    </div>
    
</template>

<script>
import Vuex from 'vuex';

export default {
    computed:{
        ...Vuex.mapState({
            nowplays : state => state.movie.nowplays
        })  
    },
    methods:{
        ...Vuex.mapActions({
            getNowplay : "movie/getNowplay"
        })
    }, 
    
    created(){
        this.getNowplay()
        
    }
    
}
</script>

<style scoped>
    
    img{
        width: 100%;
    }
    .nowPlay ul {
        padding-top:.36rem 
    }
    .nowPlay li{
        margin: 0 .34rem .34rem;
        height: 4.82rem;
        background: #f9f9f9
    }
    .text{
        height: 1rem;
        width: 100%;
        padding-left: .28rem;
        padding-top :.26rem;
        background: #fff;
    }
    .text > :nth-child(1){
        font-size:.24rem;
    }
    .text  > :nth-child(2){
        float: right;
        color: #f78360;
        margin-right: .3rem;
        font-size: .4rem; 
        margin-top:-0.2rem;
    }
    .text  > :nth-child(3){
        font-size:.16rem;
        color:#9a9a9a;
    }
    .more{
        width: 3.2rem;
        height: .6rem;
        border: .02rem solid #aaa;
        border-radius: .3rem;
        margin: .02rem auto .06rem;
        text-align: center;
        line-height: .6rem;
        font-size: .24rem;
        color: #616161;
        cursor: pointer;
    }
</style>
