import request from "@/utils/request";
let base = 'offTerminalStatus'
export default {
    getOffTerminalCount() {
        return request({
            url: base + '/getOffTerminalCount',
            method:'get'
        })
    },
    getOffTerminalManufactor() {
        return request({
            url: base + '/getOffTerminalManufactor',
            method:'get'
        })
    },
    getOffTerminalSegment() {
        return request({
            url: base + '/getOffTerminalSegment',
            method:'get'
        })
    },
    getOffTerminalSegTimeSequence(segment) {
        return request({
            url: base + '/getOffTerminalSegTimeSequence/'  + segment,
            method:'get'
        })
    }
}