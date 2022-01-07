import request from "@/utils/request";
let base = 'offTerminalStatus'
export default {
    getOffTerminalCount() {
        return request({
            url: base + '/getOffTerminalCount',
            method:'get'
        })
    },
}
