import request from "@/utils/request";


export function register(user) {
    return request({
        method: 'post',
        url: '/register',
        data: user
    })
}

export function getUserInfo(user) {
    return request({
        method: 'get',
        url: '/users/currentUser',
        data: user
    })
}

export function logout() {
    return request({
        url: '/logout',
        method: 'get'
    })
}

export function login(data) {
    return request({
        url: '/login',
        method: 'post',
        data
    })
}