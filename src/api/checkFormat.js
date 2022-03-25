import request from "@/utils/request";
let base = 'checkFormat'
export default {
    getPacketCount() {
        return request({
            url: base + '/getPacketCount',
            method:'get'
        })
    },
    getUnqualifiedPacketCount() {
        return request({
            url: base + '/getUnqualifiedPacketCount',
            method:'get'
        })
    },

    getDiffrentAfnCount(second) {
        return request({
            url: base + '/getDifAfnCount/'+second,
            method:'get'
        })
    },
    getUnqualifiedDetails(page,pageSize) {
        return request({
            url: base + '/getUnqualifiedDetails/'+page+'/'+pageSize,
            method:'get'
        })
    },
}
