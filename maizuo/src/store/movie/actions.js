import axios from 'axios';

export default {
    getBanner({commit}){
        axios({
            method:"get",
            url:"/v4/api/billboard/home",
            data:{
                __t:new Date().getTime()
            }
        }).then( (data) => {
            commit("getBanner",data.data.data.billboards)
        } )
    },
    getNowplay({commit}){
        axios({
            method:"get",
            url:"/v4/api/film/now-playing?page=1&count=5",
            data:{
                __t:new Date().getTime()
            }
        }).then( (data) => {
            commit("getNowplay",data.data.data.films)
        } )
    },
    // 即将上映的电影
    getUpMovie({commit}){
        axios({
            method:"get",
            url:"/v4/api/film/coming-soon?page=1&count=3",
            data:{
                __t:new Date().getTime()
            }
        }).then( (data) => {
            var data = data.data.data.films
            //设置上映时间
            data.map( (item) => {
                var getTime = item.premiereAt;
                var d = new Date(getTime);
                var m = d.getMonth()+1;
                var day = d.getDate();
                item.date = m + "月" + day + "日上映"
            } )
            commit("getUpMovie",data)
        } )
    },
    // 正在上映 
    nowPlayMore({commit}){
        // https://m.maizuo.com/v4/api/film/now-playing?page=1&count=7
        axios({
            method:"get",
            url:"/v4/api/film/now-playing?page=1&count=7"
        }).then((data)=>{
            commit("nowPlayMore",data.data.data.films)
        })
    },
    updateMovie({commit},page){
        axios({
            method:"get",
            url:"/v4/api/film/now-playing?page="+page+"&count=7"
        }).then((data)=>{
            commit("nowPlayMore",data.data.data.films)
        })
    },
    //影片的即将上映
    soonPlay({commit}){
        axios({
            method:"get",
            url:"/v4/api/film/coming-soon?page=1&count=7"
        }).then( (data) => {
            var data = data.data.data.films
            //设置上映时间
            data.map( (item) => {
                var getTime = item.premiereAt;
                var d = new Date(getTime);
                var m = d.getMonth()+1;
                var day = d.getDate();
                var w = "日一二三四五六".split(/(?!\b)/)[d.getDay()];
                item.date = m + "月" + day + "日上映 星期" + w
            } )
           commit("soonPlay",data)
        } )
    },
    // 即将上映刷新页面
    soonUpdate({commit},page){
        axios({
            method:"get",
            url:"/v4/api/film/coming-soon?page="+ page +"&count=7"
            
        }).then( (data) => {
            var data = data.data.data.films
            
            //设置上映时间
            data.map( (item) => {
                var getTime = item.premiereAt;
                var d = new Date(getTime);
                var m = d.getMonth()+1;
                var day = d.getDate();
                var w = "日一二三四五六".split(/(?!\b)/)[d.getDay()];
                item.date = m + "月" + day + "日上映  星期" + w
            } )
           
            commit("soonPlay",data)
        })
    },
    // 详情页
    getIntro({commit},id){
        axios({
            method:"get",
            url:"/v4/api/film/"+id,
        }).then( (data) => {
            var data = data.data.data.film
            // 设置上映时间
                var getTime = data.premiereAt;
                var d = new Date(getTime);
                var m = d.getMonth() + 1;
                var day = d.getDay();
                data.date = m + "月" + day + "日上映"
            
            commit("getIntro",data)
        } )
    }
}