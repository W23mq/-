<template>
    <div class="intro page" v-if="getintro.name"> 

        <img :src="getintro.cover.origin" >
        <div class="content">
            <h3>影片简介</h3>
            <p>导　演 ：{{getintro.director}} </p>
            <p class="yihang">主　演： <span v-for="item in getintro.actors"> {{item.name}} |</span> </p>
            <p>地区语言 ：{{getintro.language}} </p>
            <p>类　型 ：{{getintro.category}} </p>
            <p>上映日期 {{getintro.date}} </p>
            <p class="hangju"> {{getintro.synopsis}} </p>
        </div>
        <div class="buyit">立即购票</div>
    </div>
</template>

<script>
/* 
    这个应该是传一个id,根据id跳转到相应的详情页
*/
import Vuex from 'vuex';
export default {
    
    computed:{
        ...Vuex.mapState({
            getintro: state => state.movie.getintro,
        }),

    },
    methods:{
        ...Vuex.mapActions({
            getIntro:"movie/getIntro"
        }),
        ...Vuex.mapMutations({
            changeTitle: "movie/changeTitle"
        })
    },
    created(){
        this.getIntro(this.$route.params.id)
    },
    beforeRouteLeave(to,from,next){
        this.changeTitle()
        next()
    }
}
</script>

<style scoped>
.intro{
    height: 100%;
    
}
.content{
    padding: .4rem  0.3rem 0
}
img{
    width: 100%;
    height: 4.2rem
}
p{
    padding: .2rem 0
}
.yihang{
    width: 100%;
    overflow: hidden;
    /* text-overflow: ellipsis; */
    white-space: nowrap;
}
.hangju{
    text-overflow: ellipsis;
    margin-bottom: 80px;
    padding-left: 20px;
    padding-right: 20px;
    line-height: .4rem
}
.buyit{
    position:fixed;
    bottom:0.5rem;
    left:50%;
    font-size: .28rem;
    min-width: 3.12rem;
    height: .72rem;
    line-height: .72rem;
    border: none;
    background-color: #fe8233;
    padding: 0;
    margin-left: -1.5rem;
    border-radius: 18px;
    color: #fff;
    text-align: center;
    -webkit-transition: 0.5s ease;
}
</style>
