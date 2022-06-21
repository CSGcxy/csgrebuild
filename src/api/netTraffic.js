import request from "@/utils/request";
let base = ' csg/segflow/flows'

export default {
    getSangji(segment) {
        return request({
            url: base + '/getFlowSankey/' + segment + '_Flows',
            method: 'get'
        })
    },
    getActiveTraffic(segment,currentPage) {
        return request({
            url: base + '/getActiveFlows/' + segment+ '_Flows' +'/'+currentPage,
            method: 'get'
        })
    },
    getSegTotalBytesByTime(segment, startTime,endTime) {
        return request({
            url: 'csg/segflow/terminalStatus' + '/getSegTotalBytesByTime/' + segment + '/' + startTime + '/' + endTime,
            method: 'get'
        })
    },
    getSegTotalBytes(segment) {
        return request({
            url: 'csg/segflow/terminalStatus' + '/getSegTotalBytes/' + segment ,
            method: 'get'
        })
    },
}
