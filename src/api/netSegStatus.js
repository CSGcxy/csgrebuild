import request from "@/utils/request";
let base = 'segflow/terminalStatus'

export default {
    getNetSegs() {
        return request({
            url: base + '/getNetSegs',
            method:'get'
        })
    },
    getAlertFlow() {
        return request({
            url: base + '/getAlertFlow',
            method:'get'
        })
    },
    getNetworkSegmentTerminalTotal(segment) {
        return request({
            url: base + '/getNetworkSegmentTerminalTotal/' + segment,
            method:'get'
        })
    },
    getTerminalCommunication(current){
        return request({
            url: base + '/getSegCommStatus/' + current,
            method:'get'
        })
    },
    getFlowTiming(segment){
        return request({
            url: base + '/getTerminalTreandStatus/' + segment,
            method:'get'
        })
    },
    getIpList(segment){
        return request({
            url: base + '/getIpList/' + segment,
            method:'get'
        })
    },
    getlocation() {
        return request({
            url: base + '/getlocation',
            method:'get'
        })
    }
}
