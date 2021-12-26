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
    }
}
