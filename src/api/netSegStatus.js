import request from "@/utils/request";
let base = ''

export default {
    getNetSegs() {
        return request({
            url: base + '/terminalStatus/getNetSegs',
            method:'get'
        })
    },
    getAlertFlow() {
        return request({
            url: base + '/terminalStatus/getAlertFlow',
            method:'get'
        })
    },
    getNetworkSegmentTerminalTotal(segment) {
        return request({
            url: base + '/terminalStatus/getNetworkSegmentTerminalTotal/' + segment,
            method:'get'
        })
    },
    getTerminalCommunication(segment){
        return request({
            url: base + '/terminalStatus/getSingelNetSeg/' + segment,
            method:'get'
        })
    },
    getFlowTiming(segment){
        return request({
            url: base + '/terminalStatus/getOnlineTerminal/' + segment,
            method:'get'
        })
    },
    getIpList(segment){
        return request({
            url: base + '/terminalStatus/getIpList/' + segment,
            method:'get'
        })
    },

}
