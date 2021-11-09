import { createStore } from 'vuex'

export default createStore({
  state: {
    theme: {}
  },
  mutations: {
    SET_THEME(state, theme) {
      state.theme = theme;
      localStorage.theme = theme;
    }
  },
  actions: {
    initTheme({ commit }) {
      const cachedTheme = localStorage.theme ? localStorage.theme : false;
      //  `true` if the user has set theme to `dark` on browser/OS
      const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (cachedTheme){
        document.querySelector("html").classList.add(cachedTheme);
        commit('SET_THEME', cachedTheme)
      }
      else if (userPrefersDark){
        commit('SET_THEME', 'dark')
        document.querySelector("html").classList.add("dark");
      }
      else{
        commit('SET_THEME', 'light')
        document.querySelector("html").classList.remove("dark");
      }
    },
    toggleTheme({ commit }) {

      switch (localStorage.theme) {
          case 'light':
              document.querySelector("html").classList.add("dark")
              commit('SET_THEME', 'dark')
              break;

          default:
              document.querySelector("html").classList.remove("dark")
              commit('SET_THEME', 'light')
              break;
      }
    }
  },
  getters: {
    getTheme: (state) => {
      return state.theme;
    }
  },
  modules: {
    
  }
})
