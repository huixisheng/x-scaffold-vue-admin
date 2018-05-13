import Vue from 'vue'
import Vuex from 'vuex'
import app from '@/layouts/PanJiaChen/store/modules/app'
import tagsView from '@/layouts/PanJiaChen/store/modules/tagsView'
// import errorLog from './modules/errorLog'
import permission from './modules/permission'
// import tagsView from './modules/tagsView'
// import user from './modules/user'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    // errorLog,
    permission,
    tagsView,
    // user
  },
  getters
})

export default store
