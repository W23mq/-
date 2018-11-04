<template>
    <div class="comming">
        <div class="then">
            <div>即将热映</div>
        </div>
        <div class="upMovie" v-for="(item,index) in upcoming"  @click="handleRouter(item.id)">
            <div><img :src="item.cover.origin" ></div>
            <div class="upMovie_desc">
                <div style="padding-left:0.2rem">{{item.name}}</div>
                <div class="time">{{item.date}}</div>
            </div>
        </div>
        <div class="moreMovie">更多即将上映的电影</div>
    </div>
</template>
<script>
import Vuex from 'vuex';

export default {
    methods:{
        ...Vuex.mapActions({
            getUpMovie:"movie/getUpMovie"
        }),
        handleRouter(id){
            this.$router.push( {name:"intro",params:{id}} )
        }
    },
    computed:{
        ...Vuex.mapState({
            upcoming : state => state.movie.upcoming
        })
    },
    
    created(){
        this.getUpMovie()
    }
}
</script>
<style scoped>
    .then{
        position: relative;
        margin-top: .6rem;
        margin-bottom: .6rem;
        border-bottom: .02rem solid #a8a8a8;
    }
    .then div{
        width: 1.3rem;
        height: .4rem;
        margin: 0 auto;
        margin-bottom: -.2rem;
        border-radius: .1rem;
        font-size: .1rem;
        line-height: .4rem;
        text-align: center;
        color: #eee;
        background-color: #a7a7a7;
    }
    .upMovie{
        margin:0 .34rem .34rem .34rem;
    }
    .upMovie img{
        width: 100%;
    }
    .upMovie_desc{
        width:100%;
        height:1rem;
        display:flex;
        justify-content:space-between;
        align-items:center;
        background:#fff;
    }
    .time{
        font-size: .2rem;
        color: RGB(245, 162, 125);
        line-height: .3rem;
        height: .7rem;
        padding-right: 0.2rem;
        padding-top: .2rem;
        padding-left: .56rem;
    }
    .moreMovie{
        width: 3.2rem;
        height: .6rem;
        border: .02rem solid #aaa;
        border-radius: .3rem;
        margin: .2rem auto .6rem;
        text-align: center;
        line-height: .6rem;
        font-size: .24rem;
        color: #616161;
        cursor: pointer;
    }
</style>
