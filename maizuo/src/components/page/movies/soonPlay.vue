<template>
    <div class="coming wrapper" ref="wrapper">
        <ul class="content">
            <li  v-for="item in movies" @click="handleRouter(item.id)">
                <img :src="item.poster.origin" >
                <div class="dess">
                    <div>{{item.name}}</div>
                    <div>{{item.intro}}</div>
                    <div>{{item.date}}</div>
                </div>
                <p>></p>
            </li>
        </ul>
    </div>
</template>

<script>
import Vuex from 'vuex';
import BScroll from "better-scroll";

export default {
    data(){
        return{
            page:2,
            timer:null
        }
    },
    computed:{
        ...Vuex.mapState({
            movies : state => state.movie.soonPlay
        })
    },
    methods:{
        ...Vuex.mapActions({
            soonPlay:"movie/soonPlay",
            soonUpdate:"movie/soonUpdate"
        }),
        handleRouter(id){
            this.$router.push( {name:"intro",params:{id}} )
        }
    },
    updated(){
        // 延迟刷新
        setTimeout( () => {
            this.scroll.refresh()
        },100 )

        //当拉倒当前页最顶部的时候 判断当前页数并且加载新页面

        this.scroll.on( "scrollEnd", () => {
            if( this.page<7 && !this.timer ){
                this.timer = setTimeout ( () => {
                    this.soonUpdate(this.page++);
                    this.timer = null
                } ,1000)
            }
        } )
        
    },
    mounted(){
        this.scroll = new BScroll(this.$refs.wrapper,{
            click:true
        })
    },
    created(){
        this.soonPlay()
    }
}
</script>

<style scoped>
.wrapper{
    height:100%;
    overflow: hidden;
}

.coming{
    width:100%;
    background: #f9f9f9
}
 li{
    width: 100%;
    padding: .4rem 0;
    border-bottom: dashed .02rem #c9c9c9;
    cursor: pointer;
 }
 li img{
        width: 1.2rem;
        float: left;
        overflow: hidden;
 }
 .dess{
        padding-left: .3rem;
        display: inline-block;
        width: 75%;
 }
 .dess>div:nth-child(1){
    font-size: 16px;
    line-height: 32px;
    color: #000;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
 }
 .dess>div:nth-child(2){
    height: .48rem;
    line-height: .48rem;
    color: #8e8e8e;
    font-size: .24rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    display: inline-block;
 }
 .dess>div:nth-child(3){
    line-height: 24px;
    color: #ffb375;
    font-size: 12px;
 }
 p{
    float: right;
    line-height: 29px;
    color: #c6c6c6;
 }
</style>
