import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: null
    },

    mutations: {
        setUserData(state, userData) {
            state.user = userData
            localStorage.setItem('user', JSON.stringify(userData))
            axios.defaults.headers.common.Authorization = `Bearer ${userData.token}`
        },

        clearUserData() {
            localStorage.removeItem('user');
            location.reload();
        }
    },

    actions: {
        login({ commit }, credentials) {
            return axios
                .post('/api/login', credentials)
                .then(({ data }) => {
                    commit('setUserData', data)
                })
        },

        logout({ commit }) {
            axios.post(`/api/auth/logout`).then((response) => {
                console.log(response.data)
                commit('clearUserData')
            })
        }
    },

    getters: {
        isLogged: state => !!state.user
    }
})