import axios from "axios";

const service = axios.create({
    timeout: 10000 // 请求超时时间
})

// //request 请求拦截器
// service.interceptors.request.use(config => {
//     if (window.localStorage.getItem("uToken")) {
//         config.headers['token'] = window.localStorage.getItem("uToken")
//     }
//     return config;
// }, error => {
//     return Promise.reject(error)
// });

// response 响应拦截器
service.interceptors.response.use(response => {
    const resp = response.data;
    if (resp.code !== 20000) {
        if (resp.code === 20001) {
            console.log(resp.message);
            return Promise.reject('error');
        }
    }
    return resp;

}, error => {
    console.log('err' + error) // for debug
    return Promise.reject(error);
});

export default service
