import Vue from 'vue'
import Vuex from 'vuex'
import userAPI from '../apis/users'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    currentUser: {
      id: -1,
      name: '',
      email: '',
      image: '',
      isAdmin: false
    },
    isAuthenticated: false
    
  },
  mutations: {

    setCurrentUser(state, currentUser) {
      state.currentUser = {
        ...state.currentUser,
        // 將 API 取得的 currentUser 覆蓋掉 Vuex state 中的 currentUser
        ...currentUser
      }
      // 將使用者的登入狀態改為 true
      state.isAuthenticated = true
    },

    revokeAuthentication(state) {
      state.currentUser = {}
      state.isAuthenticated = false
      localStorage.removeItem('token')
    }

  },
  actions: {

    async fetchCurrectUser({commit}) {
      try {

        const {data, statusText} = await userAPI.getCurrentUser()

        if (statusText !== 'OK') {
          throw new Error(statusText)
        }

        commit('setCurrentUser', {
          id: data.id,
          name: data.name,
          email: data.email,
          image: data.image,
          isAdmin: data.isAdmin
        })

        return true

      } catch (error) {
        commit('revokeAuthentication')
        return false
      }
    }

  },
  modules: {
  }
})
