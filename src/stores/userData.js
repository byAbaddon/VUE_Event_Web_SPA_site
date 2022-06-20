import { defineStore } from 'pinia'



export const useDataStore = defineStore('userData', {

  state: () => ({
    isAuth : false, //localStorage.getItem('auth') != null,    // login
    counter: 0
  }),

  getters: {
    double: state => state.counter * 2,
    checkIsAuth : state => state.isAuth
  },

  actions: {
    increment() {
       this.counter++
    },

    checkUserLogin(e) {
      this.isAuth = e
    }

  },
})