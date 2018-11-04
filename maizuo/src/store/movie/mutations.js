export default {
    getBanner(state,params){
        state.imgs = params
    },
    getNowplay(state,params){
        state.nowplays = params
    },
    getUpMovie(state,params){
        state.upcoming = params
    },
    // 下拉更多的电影
    nowPlayMore(state,data){
        // 把原有的数据相结合  合并对象
        state.moreMovie = [...state.moreMovie,...data]
    },
    getIntro(state,params){
        state.getintro = params
        state.title=params.name
    },
    soonPlay(state,params){
        state.soonPlay = [...state.soonPlay,...params]
    },
    changeTitle(state){
        state.title = "卖座电影"
    }
}