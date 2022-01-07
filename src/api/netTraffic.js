import request from "@/utils/request";
let base = 'flows'

export default {
    getSangji(segment) {
        return request({
            url: base + '/getFlowSankey/' + segment,
            method: 'get'
        })
    },
    getActiveTraffic(segment) {
        return request({
            url: base + '/getActiveFlows/' + segment + '_Flows',
            method: 'get'
        })
    },
    getSegmentTraffic(segment, startTime) {
        return request({
            url: base + '/getSegTotalBytes/' + segment + '/' + startTime,
            method: 'get'
        })
    }
}