import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
    routes:[
        {
            path:'/',
            redirect:'/home'
        },
        {
            path:'/home',
            name:'home',
            component:resolve => require(['../components/page/home/home.vue'],resolve)
        },
        {
            path:'/cinema',
            name:'cinema',
            component:resolve => require(['../components/page/cinema/cinema.vue'],resolve)
        },
        {
            path:'/movie',
            name:'movie',
            component:resolve => require (['../components/page/movies/movies.vue'],resolve)
            
        },
        {
            path:'/:id',
            name:'intro',
            component:resolve => require (["../components/page/movies/intro.vue"],resolve)
        }
    ]
})
