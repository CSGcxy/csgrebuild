import request from "@/utils/request";
let base = 'flows'

export default {
    getSangji(segment) {
        return request({
            url: base + '/getFlowSankey/' + segment,
            method:'get'
        })
    },
}