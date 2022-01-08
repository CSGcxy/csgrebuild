import request from "@/utils/request";
let base = 'flows'

export default {
    getSangji(segment) {
        return request({
            url: base + '/getFlowSankey/' + segment + '_Flows',
            method: 'get'
        })
    },
    getActiveTraffic(segment) {
        return request({
            url: base + '/getActiveFlows/' + segment + '_Flows',
            method: 'get'
        })
    },
    getSegTotalBytesByTime(segment, startTime,endTime) {
        return request({
            url: 'terminalStatus' + '/getSegTotalBytesByTime/' + segment + '/' + startTime + '/' + endTime,
            method: 'get'
        })
    },
    getSegTotalBytes(segment) {
        return request({
            url: 'terminalStatus' + '/getSegTotalBytes/' + segment ,
            method: 'get'
        })
    },
}