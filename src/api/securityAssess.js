import request from "@/utils/request";
let base = 'safetyAssessment'
export default {
    getSegAssessScore() {
        return request({
            url: base + '/getSegAssessScore',
            method: 'get'
        })
    },
    getTerminalTotalRateScore(pageNum, pageSize) {
        return request({
            url: base + '/getTerminalTotalRateScore/' + pageNum + '/' + pageSize,
            method: 'get'
        })
    },
    getOnlineAndTypeScore() {
        return request({
            url: base + '/getOnlineAndTypeScore/',
            method: 'get'
        })
    },
}
