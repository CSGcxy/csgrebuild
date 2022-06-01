import request from "@/utils/request";
let base = 'manage'

export default {
    register(user) {
        return request({
            method: 'post',
            url: '/register',
            data: user
        })
    },
    getUserInfo(user) {
        return request({
            method: 'get',
            url: '/users/currentUser',
            data: user
        })
    },
    logout() {
        return request({
            url: base + '/user/logout',
            method: 'get'
        })
    },
    login(data) {
        return request({
            url: base + '/user/login',
            method: 'post',
            data: data
        })
    },
    test() {
        return request({
            url: base +  '/testCors',
            method: 'get'
        })
    }
}
