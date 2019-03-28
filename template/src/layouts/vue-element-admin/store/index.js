import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import errorLog from './modules/errorLog'
// 修改为自定义
import permission from 'src/store/modules/permission'
import tagsView from './modules/tagsView'
import settings from './modules/settings'
// 修改为自定义
import user from 'src/store/modules/user'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    errorLog,
    permission,
    tagsView,
    settings,
    user
  },
  getters
})

export default store