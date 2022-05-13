import Vue from 'vue'
import Vuex from 'vuex'
import { getUserInfo, login, logout } from '@/api/login'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        id: '',
        account: '',
        name: '',
        avatar: '',
        token: localStorage.token,
    },
    mutations: {
        SET_TOKEN: (state, token) => {
            state.token = token;
        },
        SET_ACCOUNT: (state, account) => {
            state.account = account
        },
        SET_NAME: (state, name) => {
            state.name = name
        },
        SET_AVATAR: (state, avatar) => {
            state.avatar = avatar
        },
        SET_ID: (state, id) => {
            state.id = id
        }
    },
    actions: {

        login({ commit }, user) {
            return new Promise((resolve, reject) => {
                login(user).then(res => {
                    if (res.data.success) {
                        commit('SET_TOKEN', res.data.data)
                        localStorage.token = res.data.data;
                        resolve()
                    } else {
                        reject(res.data.msg)
                    }
                }).catch(error => {
                    reject(error)
                })
            })
        },
        logout({ commit }) {
            //Promise 对象代表了未来将要发生的事件，用来传递异步操作的消息。
            //rejected: 意味着操作失败。
            return new Promise((resolve, reject) => {
                // 异步处理
                // 处理结束后、调用resolve 或 reject
                //sssssssssssssssss 当异步代码执行成功时，我们才会调用resolve(...), 当异步代码失败时就会调用reject(...)
                logout().then((res) => {
                    if (res.data.success) {
                        commit('SET_TOKEN', '')
                        commit('SET_ACCOUNT', '')
                        commit('SET_NAME', '')
                        commit('SET_AVATAR', '')
                        commit('SET_ID', '')
                        localStorage.removeItem('token')
                        resolve()
                    } else {
                        reject(res.data.msg)
                    }
                }).catch((error) => {
                    reject(error)
                })
            })
        },
        getUserInfo({ commit }) {
            //Promise 对象代表了未来将要发生的事件，用来传递异步操作的消息。
            //rejected: 意味着操作失败。
            return new Promise((resolve, reject) => {
                // 异步处理
                // 处理结束后、调用resolve 或 reject
                //sssssssssssssssss 当异步代码执行成功时，我们才会调用resolve(...), 当异步代码失败时就会调用reject(...)
                getUserInfo().then((res) => {
                    if (res.data.success) {
                        commit('SET_ACCOUNT', res.data.data.account)
                        commit('SET_NAME', res.data.data.nickname)
                        commit('SET_AVATAR', res.data.data.avatar)
                        commit('SET_ID', res.data.data.id)
                        resolve(res.data)
                    } else {
                        commit('SET_ACCOUNT', '')
                        commit('SET_NAME', '')
                        commit('SET_AVATAR', '')
                        commit('SET_ID', '')
                        localStorage.removeItem('token')
                        removeToken()
                        reject(res.data.msg)
                    }
                }).catch((error) => {
                    commit('SET_ACCOUNT', '')
                    commit('SET_NAME', '')
                    commit('SET_AVATAR', '')
                    commit('SET_ID', '')
                    removeToken()
                    localStorage.removeItem('token')
                    reject(error)
                })
            })
        },
    }
})