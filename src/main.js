import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import store from './store'
import moment from 'moment';


require('bootstrap');
import "bootstrap/dist/css/bootstrap.min.css";
Vue.prototype.$moment = moment;
Vue.config.productionTip = false


axios.defaults.baseURL = 'http://127.0.0.1:8000'

Vue.component('login', require('./components/Auth/Login').default);
Vue.component('app-chart', require('./components/Charts/Index').default);

new Vue({
    router,
    store,
    created() {
        const userInfo = localStorage.getItem('user')
        if (userInfo) {
            const userData = JSON.parse(userInfo)
            this.$store.commit('setUserData', userData)
        }
        axios.interceptors.response.use(
            response => response,
            error => {
                if (error.response.status === 401) {
                    this.$store.dispatch('logout')
                }
                return Promise.reject(error)
            }
        )
    },
    render: h => h(App)
}).$mount('#app')