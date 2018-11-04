import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/page/home/home.vue'
import cinema from '../components/page/cinema/cinema.vue'
import movie from '../components/page/movies/movies.vue'

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
            component:home
        },
        {
            path:'/cinema',
            name:'cinema',
            component:cinema
        },
        {
            path:'/movie',
            name:'movie',
            component:movie
        }
    ]
})
