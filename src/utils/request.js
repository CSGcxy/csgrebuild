import axios from "axios";

const service = axios.create({
    timeout: 5000 // 请求超时时间
})


// response 拦截器
service.interceptors.response.use(response => {
    const resp = response.data;
    if (resp.code !== 20000) {
        if (resp.code === 20001) {
            console.log(resp.message);
            return Promise.reject('error');
        }
    } else {
        return resp;
    }

}, error => {
    console.log('err' + error) // for debug
    return Promise.reject(error);
});

export default service
