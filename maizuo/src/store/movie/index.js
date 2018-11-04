import state from './state'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

export default {
    namespaced: true,//如果子模块跟父模块的方法一样如何区分
    state,
    actions,
    mutations,
    getters
}