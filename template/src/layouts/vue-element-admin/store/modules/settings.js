import defaultSettings from '@/settings'
const { showSettings, tagsView, fixedHeader, sidebarLogo, theme, sidebarLogoTitle, sidebarLogoUrl } = defaultSettings

const state = {
  theme: theme,
  showSettings: showSettings,
  tagsView: tagsView,
  fixedHeader: fixedHeader,
  sidebarLogo: sidebarLogo,
  sidebarLogoTitle,
  sidebarLogoUrl,
}

const mutations = {
  CHANGE_SETTING: (state, { key, value }) => {
    if (state.hasOwnProperty(key)) {
      state[key] = value
    }
  }
}

const actions = {
  changeSetting({ commit }, data) {
    commit('CHANGE_SETTING', data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}