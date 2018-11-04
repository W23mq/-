<template>
    <div class="wrapper" ref="wrapper">
        <ul class="content">
            
            <li v-for="item in movies" >
                    <img :src="item.poster.origin" >
                    <div >
                        <p> {{item.name}}  </p>
                        
                        <p> {{item.intro}} </p>

                        <p> {{item.cinemaCount}}家影院上映  &nbsp;&nbsp;&nbsp;&nbsp;<span> {{item.watchCount}}人购票 </span> </p>
                    </div>
                <div>{{item.grade}} > </div>
            </li>
        </ul>
    </div>
</template>

<script>
import Vuex from 'vuex';
import BScroll from "better-scroll";

export default {
    data(){
        return {
            page:2,
            timer:null
        }
    },
    methods:{
        ...Vuex.mapActions({
            updateMovie:"movie/updateMovie"
        }),
        ...Vuex.mapActions({
            nowPlayMore:"movie/nowPlayMore"
        })
    },
    computed:{
        ...Vuex.mapState({
            movies : state => state.movie.moreMovie
        })
    },
    mounted(){
        this.scroll = new BScroll(this.$refs.wrapper)
    },
    updated(){
        // 延迟刷新
        setTimeout( () => {
            this.scroll.refresh()
        },100 )

        // 当用户滚动结束的时候，判断当前页数 并进行加载下一页
        this.scroll.on( "scrollEnd", () => {
            if( this.page < 7 &&  !this.timer ){
                this.timer = setTimeout( () => {
                    this.updateMovie(this.page++);
                    this.timer = null
                },1000 )
            }
        } )
    },
    created(){
        this.nowPlayMore() 
    }

}
</script>
 
<style scoped>
.wrapper{
    height: 100%;
    overflow: hidden;
}
    img{
        width:1.2rem;
        height:1.68rem; 
    }
    li{
        width: 100%;
        padding: .4rem  0;
        height: 2.46rem;
        border-bottom: dashed .02rem #c9c9c9;
        cursor: pointer;
        display: flex;
        justify-content: space-between
    }
    li div p{
        padding-top:.25rem;
        padding-left: -.5rem;
        overflow: hidden;
    }
</style>
