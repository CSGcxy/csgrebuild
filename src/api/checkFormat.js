import request from "@/utils/request";
let base = 'checkFormat'
export default {
    getDate() {
        return request({
            url: base + '/',
            method:'get'
        })
    },

}
